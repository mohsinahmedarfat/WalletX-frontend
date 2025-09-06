import { Outlet } from "react-router";
import "./App.css";
import CommonLayout from "./components/layouts/CommonLayout";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <CommonLayout>
      <ScrollToTop/>
      <Outlet />
    </CommonLayout>
  );
}

export default App;
