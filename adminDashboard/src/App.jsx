import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import Sidebar from "./sharedComponnents/sidebar";
import { LoginPage } from "./pages/loginPage";
import { AdminDashboardHome } from "./pages/homePage/homePage";
import { UsersPage } from "./pages/usersPage/usersPage";
import { InstrumentListingTable } from "./pages/instrumentListingPage/InstrumentListingPage";
const AppLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <div className={`flex w-full ${!isLoginPage ? "bg-gray-50" : ""}`}>
      {!isLoginPage && <Sidebar />}
      <div className={`${!isLoginPage ? "flex-1" : "w-full"}`}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Home" element={<AdminDashboardHome />} />
          <Route path="/ManageUsers" element={<UsersPage />} />
          <Route
            path="/ManageInstrumentListing"
            element={<InstrumentListingTable />}
          />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppLayout />
      </Router>
    </Provider>
  );
}

export default App;
