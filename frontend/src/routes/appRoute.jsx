import { Route } from "react-router-dom";
import appPaths from "../utils/pathConstant";
import App from "../App";
import AppLayout from "../layouts/AppLayout";

const appRoute=(
    <Route path={appPaths.ROOT} element={<App/>}>
        <Route element={<AppLayout/>}>
<Route path={appPaths.HOME} lazy={()=>import("../pages/home")}/>
<Route path={appPaths.REGISTER} lazy={()=>import("../pages/auth/signup")}/>
<Route path={appPaths.LOGIN} lazy={()=>import("../pages/auth/login")}/>
        </Route>
    </Route>
)

export default appRoute