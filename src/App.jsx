import { useState } from "react";

import "./App.css";
import HomePage from "./Pages/HomePage";
import OurListeners from "./Pages/OurListeners";
import OurBlogs from "./Pages/OurBlogs";
import Listenersdescription from "./Pages/Listenersdescription";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Listenerdesc from "./Components/Listnerdesc/Listenerdesc";
import ScrollToTop from "./Components/Scrolltotop/Scrolltotop";
import Blogsdescription from "./Pages/Blogsdescription";
import BecomeListener from "./Pages/BecomeListener";
import DeleteAccountPage from './Pages/DeleteAccountPage';
import PrivacyPolicyPage from "./Pages/PrivacyPolicy";
import DeepLinkRedirect from "./Pages/DeepLinkRedirect";


function App() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop/> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path='' */}

        <Route path="/OurListeners" element={<OurListeners />} />
        <Route path="/OurBlogs" element={<OurBlogs />} />
        <Route path="/refer" element={<DeepLinkRedirect />} />
        <Route path="/shareprofile" element={<DeepLinkRedirect />} />
        <Route path="/:Ourlistener" element={<Listenersdescription />} />
        <Route path="/Blogsdesc/:blogId" element={<Blogsdescription />} />
        <Route path="/BecomeListener" element={<BecomeListener />} />

<Route path="/delete-account" element={<DeleteAccountPage />} />
<Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
