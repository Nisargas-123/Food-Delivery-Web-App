import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Orders() {

  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    const fetchOrders = () => {

      // ✅ GET LOGGED-IN USER
      const user = JSON.parse(
        localStorage.getItem("user")
      );

      // ✅ IF USER NOT FOUND
      if (!user) {
        console.log("No user found");
        return;
      }

      // ✅ FETCH USER-SPECIFIC ORDERS
      axios.get(
        `http://localhost:5000/api/orders/${user._id}`
      )
        .then(res => {

          setOrders(res.data);

        })
        .catch(err => {

          console.log(err);
        });
    };

    // ✅ INITIAL FETCH
    fetchOrders();

    // ✅ AUTO REFRESH
    const interval = setInterval(
      fetchOrders,
      2000
    );

    return () => clearInterval(interval);

  }, []);

  // ✅ PROGRESS FUNCTION
  const getProgress = (createdAt) => {

  const now = new Date();

  const created = new Date(createdAt);

  const diff = (now - created) / 1000;

  if (diff < 10) {
    return 10;
  }

  if (diff < 20) {
    return 30;
  }

  if (diff < 30) {
    return 50;
  }

  if (diff < 40) {
    return 75;
  }

  return 100;
};

  // ✅ STATUS FUNCTION
  const getStatus = (progress) => {

  if (progress <= 10) {
    return "Order Placed";
  }

  if (progress <= 30) {
    return "Preparing";
  }

  if (progress <= 50) {
    return "Order Packed";
  }

  if (progress <= 75) {
    return "Picked by Delivery Partner";
  }

  if (progress < 100) {
    return "On the Way";
  }

  return "Delivered";
};

  return (

    <div style={styles.container}>

      <h2 style={styles.heading}>
        Your Orders
      </h2>

      {/* ✅ NO ORDERS */}
      {orders.length === 0 ? (

        <p style={{ textAlign: "center" }}>
          No orders found ❌
        </p>

      ) : (

        orders.map((order, index) => {

          const progress = Math.min(
            getProgress(order.createdAt),
            100
          );

          const status = getStatus(progress);

          return (

            <div
              key={order._id}
              style={styles.card}
            >

              {/* HEADER */}
              <div style={styles.header}>

                <h4>
                  Order #{index + 1}
                </h4>

                <span style={styles.status}>
                  {status}
                </span>

              </div>

              {/* PROGRESS BAR */}
              <div style={styles.progressWrapper}>

  <div
  style={{
    ...styles.bike,
    transform: `translateX(${progress * 3.5}px)`
  }}
>
  🛵
</div>

  <div style={styles.progressContainer}>

    <div
      style={{
        ...styles.progressFill,
        width: `${progress}%`
      }}
    />

  </div>

</div>

              <div style={styles.labels}>

  <span style={
    progress >= 10
      ? styles.active
      : styles.inactive
  }>
    Order Placed
  </span>

  <span style={
    progress >= 30
      ? styles.active
      : styles.inactive
  }>
    Preparing
  </span>

  <span style={
    progress >= 50
      ? styles.active
      : styles.inactive
  }>
    Packed
  </span>

  <span style={
    progress >= 75
      ? styles.active
      : styles.inactive
  }>
    Picked
  </span>

  <span style={
    progress >= 90
      ? styles.active
      : styles.inactive
  }>
    On Way
  </span>

  <span style={
    progress === 100
      ? styles.active
      : styles.inactive
  }>
    Delivered
  </span>

</div>

              {/* TIME */}
              <p style={styles.time}>

                Ordered at:
                {" "}
                {new Date(order.createdAt)
                  .toLocaleTimeString()}

              </p>

              {/* ITEMS */}
              {order.items.map((item, i) => (

                <div
                  key={i}
                  style={styles.item}
                >

                  <span>
                    {item.name}
                    {" × "}
                    {item.quantity || 1}
                  </span>

                  <span>
                    ₹
                    {item.price * (item.quantity || 1)}
                  </span>

                </div>
              ))}

              {/* TOTAL */}
              <div style={styles.total}>

                <strong>Total</strong>

                <strong>
                  ₹{order.totalAmount}
                </strong>

              </div>

            </div>
          );
        })
      )}

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/home")}
        style={styles.button}
      >
        Back to Home
      </button>

    </div>
  );
}

const styles = {

  container: {
    minHeight: "100vh",
    background: "#f4f6f8",
    padding: "20px"
  },

  heading: {
    textAlign: "center",
    marginBottom: "20px"
  },

  card: {
    width: "380px",
    margin: "20px auto",
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)"
  },

  header: {
    display: "flex",
    justifyContent: "space-between"
  },

  status: {
    color: "#6f42c1",
    fontWeight: "bold"
  },

  progressWrapper: {
  position: "relative",
  margin: "20px 0"
},

bike: {
  position: "absolute",
  top: "-20px",
  left: "0px",
  fontSize: "24px",
  transition: "transform 1s linear",
  zIndex: 2
},

  progressContainer: {
    height: "8px",
    background: "#eee",
    borderRadius: "10px",
    overflow: "hidden",
    margin: "15px 0"
  },

  progressFill: {
    height: "100%",
    background: "#6f42c1",
    transition: "width 1s linear"
  },

  labels: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px"
  },

  active: {
    color: "#6f42c1",
    fontWeight: "bold"
  },

  inactive: {
    color: "#aaa"
  },

  time: {
    fontSize: "12px",
    color: "#666",
    marginTop: "10px"
  },

  item: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px"
  },

  total: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    borderTop: "1px solid #eee",
    paddingTop: "10px"
  },

  button: {
    display: "block",
    margin: "20px auto",
    padding: "10px 20px",
    borderRadius: "8px",
    background: "#6f42c1",
    color: "white",
    border: "none"
  }
};

export default Orders;