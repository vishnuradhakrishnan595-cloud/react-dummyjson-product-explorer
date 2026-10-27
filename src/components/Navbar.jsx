import React from "react";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        backgroundColor: "#2563eb",
        color: "white",
      }}
    >
      <h2 style={{ margin: 0 }}>MyWebsite</h2>

      <div style={{ display: "flex", gap: "25px" }}>
        <a href="#home" style={linkStyle}>
          Home
        </a>

        <a href="#products" style={linkStyle}>
          Products
        </a>

        <a href="#about" style={linkStyle}>
          About
        </a>

        <a href="#contact" style={linkStyle}>
          Contact
        </a>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
};

export default Navbar;