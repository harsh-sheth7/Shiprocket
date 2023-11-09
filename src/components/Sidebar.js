import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: "dashboard",
    },
    {
      path: "/about",
      name: "About",
      icon: "info",
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: "analytics",
    },
    {
      path: "/product",
      name: "Product",
      icon: "inventory_2",
    },
    {
      path: "/productList",
      name: "Product List",
      icon: "list_alt",
    },
  ];

  const toggleSidebarOpen = (event) => {
    event.currentTarget.style.width = "250px";
  };

  const toggleSidebarClose = (event) => {
    event.currentTarget.style.width = "55px";
  };

  return (
    <div className="container">
      <div
        style={{
          width: "55px",
        }}
        className="sidebar"
        onMouseOver={toggleSidebarOpen}
        onMouseLeave={toggleSidebarClose}
      >
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="material-icons"> {item.icon} </div>{" "}
            <div
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden"
              }}
              className="link_text"
            >
              {item.name}{" "}
            </div>{" "}
          </NavLink>
        ))}{" "}
      </div>{" "}
      <main> {children} </main>{" "}
    </div>
  );
};

export default Sidebar;
