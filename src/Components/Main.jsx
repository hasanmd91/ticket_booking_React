import React from "react";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <main>
      <Outlet></Outlet>
    </main>
  );
}

export default Main;
