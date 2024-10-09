import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Views/sharedComponents/NavBar/NavBar";
import { HomePage } from "./Views/Pages/HomePage/HomePage";
import { ThemeProvider } from "@material-tailwind/react";
import { AppProvider } from "./Views/sharedComponents/Context-provider/context-provider";
import { Marketplace } from "./Views/Pages/MarketplacePage/Marketplace";
import { Login } from "./Views/Pages/LoginPage/Login";
import { Signup } from "./Views/Pages/SignupPage/Signup";
import { store } from "./Redux/Store/store";
import { Provider } from "react-redux";
import ProfilePage from "./Views/Pages/ProfilePage/ProfilePage";
import { InstrumentDetailPage } from "./Views/Pages/instrumentDetailsPage/instrumentDetailsPage";
import MusicalNoteDetailPage from "./Views/Pages/musicalNotesDetailsPage/musicalNotesDetailsPage";
import { StripeComponent } from "./Views/sharedComponents/stripeComponent/stripeComponent";
function App() {
  return (
    <>
      <AppProvider>
        <Provider store={store}>
          <ThemeProvider>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Community" />
                <Route path="/Marketplace" element={<Marketplace />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/ProfilePage" element={<ProfilePage />} />
                <Route path="/payment" element={<StripeComponent />}></Route>
                <Route
                  path="/instrumentDetailsPage/:id"
                  element={<InstrumentDetailPage />}
                ></Route>
                <Route
                  path="/musicalNotesDetailsPage/:id"
                  element={<MusicalNoteDetailPage />}
                ></Route>
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </Provider>
      </AppProvider>
    </>
  );
}

export default App;
