import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SpinnerFullPage from "./components/SpinnerFullPage";
import { GeolocationProvider } from "./contexts/GeolocationContext";

// const Homepage = lazy(() => import("./pages/Homepage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const SelectView = lazy(() => import("./pages/SelectView"));
const MapView = lazy(() => import("./pages/MapView"));

function App() {
  return (
    <GeolocationProvider>
      <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage />} />
        <Routes>
          {/* <Route index element={<Homepage />} /> */}
          <Route index element={<MapView />} />
          <Route path="app" element={<SelectView />} />
          <Route path="map" element={<MapView />} />
          <Route path="list" element={null} />
          <Route path="new" element={null} />
          <Route path="login" element={null} />
          <Route path="user" element={null} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </GeolocationProvider>
  );
}

export default App;
