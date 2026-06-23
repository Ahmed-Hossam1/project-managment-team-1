import { useTranslation } from "react-i18next";
import LangSwitcher from "./components/shared/lang-switcher";
import DashboardNavbar from "./components/Dashboard/DashboardNavbar";
import DashboardPage from "./components/Dashboard/DashboardPage";
import { createBrowserRouter } from "react-router-dom";

export default function App() {

   
  return (
    <div>
      <DashboardNavbar />
      <DashboardPage />
    </div>

  );
}