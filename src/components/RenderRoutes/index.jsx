import React from "react";
import { Route, Routes } from "react-router";
import Container from "../Container";
import routes from "../../utils/routes";

const RenderRoutes = ({ routes }) => {
  return (
    <Routes>
      <Route element={<Container />}>
        {routes.map((route, index) => {
          const { isProtected, path, Screen } = route;

          return <Route path={path} element={<Screen />} key={index} />;
        })}
      </Route>
    </Routes>
  );
};

export default RenderRoutes;
