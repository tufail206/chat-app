import { Route } from "react-router-dom";
import appPaths from "../utils/pathConstant";
import App from "../App";
import AppLayout from "../layouts/AppLayout";
import AuthRoute from "./authRoute";

const appRoute = (
  <Route path={appPaths.ROOT} element={<App />}>
    <Route element={<AuthRoute />}>
      <Route element={<AppLayout />}>
        <Route path={appPaths.HOME} lazy={() => import("../pages/home")} />
      </Route>
    </Route>
    <Route
      path={appPaths.REGISTER}
      lazy={() => import("../pages/auth/signup")}
    />
    <Route path={appPaths.LOGIN} lazy={() => import("../pages/auth/login")} />
  </Route>
);

export default appRoute