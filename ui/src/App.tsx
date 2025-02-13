import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./Context";
import LandingPage from "./pages/LandingPage";
import Lookup from "./pages/Lookup";
import Verifier from "./pages/Verifier";

function App() {
  useEffect(() => {
    if (process.env.REACT_APP_TAG === "latest") {
      document.title = "(staging) sourcify.eth";
    }
  }, []);

  return (
    <div className="flex min-h-screen text-gray-800 bg-gray-50">
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/verifier" element={<Verifier />} />
            <Route path="/lookup" element={<Lookup />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
