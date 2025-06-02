import React from "react";
import { Outlet } from "react-router";
// <Outlet /> 라우터 아래있는 라우트 다 가져옴
const AppLayout = () => {
  return (
    <div>
      Sider
      <Outlet />
    </div>
  );
};

export default AppLayout;
