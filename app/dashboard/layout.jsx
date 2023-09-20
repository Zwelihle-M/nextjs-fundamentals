import React from "react";

const navigationStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  padding: "30px",
  listStyleType: "none",
  flexDirection: "column",
  backgroundColor: "white",
  color: "black",
  width: "200px",
  height: "100vh",
};

const divStyle = {
  display: "flex",
};

export default function DashboardLayout({ children }) {
  return (
    <>
      <div style={divStyle}>
        <aside style={navigationStyle}>
          <li>Blog</li>
          <li>Dashboard</li>
          <li>Profile</li>
        </aside>
        {children}
      </div>
    </>
  );
}
