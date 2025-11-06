import React from "react";
import WeatherModule from "./WeatherModule";
import CurrencyConverter from "./CurrencyConverter";
import QuoteGenerator from "./QuoteGenerator";

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>InfoHub Dashboard</h1>
      <div style={styles.widgets}>
        <div style={styles.widget}>
          <WeatherModule />
        </div>
        <div style={styles.widget}>
          <CurrencyConverter />
        </div>
        <div style={styles.widget}>
          <QuoteGenerator />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    width: "100vw", // ensure full width
    padding: "40px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    boxSizing: "border-box",
  },
  heading: {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "2.5rem",
    color: "#ffffff",
    textShadow: "1px 1px 5px rgba(0,0,0,0.3)",
  },
  widgets: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
    width: "100%",
    maxWidth: "1200px",
  },
  widget: {
    flex: "1 1 300px",
    minWidth: "280px",
    maxWidth: "400px",
    padding: "25px",
    borderRadius: "15px",
    backgroundColor: "#ffffff",
    color: "#1f2937",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
};

export default Dashboard;
