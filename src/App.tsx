import { Outlet } from "react-router";
import CommonLayout from "./components/layouts/CommonLayout";
import ScrollToTop from "./utils/ScrollToTop";
import BackToTopButton from "./utils/BackToTopButton";

function App() {
  return (
    <CommonLayout>
      <ScrollToTop/>
      <Outlet />
      <BackToTopButton/>
    </CommonLayout>
  );
}

export default App;