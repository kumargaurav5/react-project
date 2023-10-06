import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utlis/appStore";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="app ">
      <Header />
      <Outlet />
      {/* <Footer/> */}
    </div>
    </Provider>
  );
};

export default AppLayout;
