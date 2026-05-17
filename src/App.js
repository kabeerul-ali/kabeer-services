import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import SubServicePage from "./pages/SubServicePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/service/:serviceId"
          element={<ServicePage />}
        />

        <Route
          path="/service/:serviceId/:subServiceId"
          element={<SubServicePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;