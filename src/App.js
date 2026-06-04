import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy Load Pages
const Home = lazy(() => import("./pages/Home"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const SubServicePage = lazy(() => import("./pages/SubServicePage"));

// Loading Component
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>Loading...</div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;