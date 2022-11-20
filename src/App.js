import "./App.css";
import "bootstrap";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navbar";
import SideBar from "./components/sidebar";
import WareHouse from "./pages/warehouse";
import "bootstrap/dist/css/bootstrap.min.css";
import Shelf from "./pages/shelf";
import Sales from "./pages/sales";
import CreateRecord from "./pages/create";
import Profile from "./pages/profile";
import Messages from "./pages/messages";
import Purchase from "./pages/purchase";
import ErrorBoundary from "./components/error-boundary";
function App() {
  return (
    <div className="col-lg-12 bg-black App">
      <Navigation />
      <div className="col-lg-12 bg-black d-flex flex-row">
        <SideBar />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<WareHouse />} />
            <Route path="/warehouse" element={<WareHouse />} />
            <Route path="/shelf" element={<Shelf />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/create" element={<CreateRecord />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/purchase" element={<Purchase />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
