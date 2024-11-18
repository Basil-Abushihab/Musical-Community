import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Views/sharedComponents/NavBar/NavBar";
import { HomePage } from "./Views/Pages/HomePage/HomePage";
import { Marketplace } from "./Views/Pages/MarketplacePage/Marketplace";
import { Login } from "./Views/Pages/LoginPage/Login";
import { Signup } from "./Views/Pages/SignupPage/Signup";
import ProfilePage from "./Views/Pages/ProfilePage/ProfilePage";
import { InstrumentDetailPage } from "./Views/Pages/instrumentDetailsPage/instrumentDetailsPage";
import MusicalNoteDetailPage from "./Views/Pages/musicalNotesDetailsPage/musicalNotesDetailsPage";
import { StripeComponent } from "./Views/sharedComponents/stripeComponent/stripeComponent";
import Footer from "./Views/sharedComponents/Footer/footer";
import { AboutUs } from "./Views/Pages/aboutUs/aboutUs";
import { FAQ } from "./Views/Pages/FAQ/FAQ";
import TermsOfService from "./Views/Pages/TermsOfServicePage/TermsOfService";
import MusicalNotesPlayer from "./Views/Pages/MusicalNotesPlayer/MusicalNotesPlayer"; // Correct import
import { ThemeProvider } from "@material-tailwind/react";
import { AppProvider } from "./Views/sharedComponents/Context-provider/context-provider";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/store";

function App() {
  return (
    <AppProvider>
      <Provider store={store}>
        <ThemeProvider>
          <BrowserRouter>
            <NavBar />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Marketplace" element={<Marketplace />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/ProfilePage" element={<ProfilePage />} />
              <Route path="/payment" element={<StripeComponent />} />
              <Route
                path="/instrumentDetailsPage/:id"
                element={<InstrumentDetailPage />}
              />
              <Route
                path="/musicalNotesDetailsPage/:id"
                element={<MusicalNoteDetailPage />}
              />

              <Route
                path="/MusicalNotesPlayer"
                element={<MusicalNotesPlayer />}
              />

              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/TermsOfService" element={<TermsOfService />} />
              <Route path="/FAQ" element={<FAQ />} />
            </Routes>

            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </AppProvider>
  );
}

export default App;
