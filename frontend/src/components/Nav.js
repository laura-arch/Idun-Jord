import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./../Nav.css";

function Nav() {
  return (
    <>
      <header>
        <></>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <></>
      </footer>
    </>
  );
}

export default Nav;
