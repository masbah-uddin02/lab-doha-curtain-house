import { Route, Routes } from "react-router-dom";
import Notfound from "./Shared/Notfound";
import Home from "./Pages/Home/Home";
import PublicRoutes from "./Routes/PublicRoutes";
import Main from "./Pages/Main/Main";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import AdminRoutes from "./Routes/AdminRoutes";
import { ToastContainer } from "react-toastify";
import AdminDashboardIndex from "./Components/AdminDashboard/AdminDashboardIndex";
import 'react-toastify/dist/ReactToastify.css';
import Bot from "./Shared/Bot";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Bot></Bot>
      <Routes>

        {/* Public routes */}
        <Route path="/" element={<Main />}>
          <Route index element={<Home />}></Route>
          {PublicRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>

        {/* Admin routes */}
        <Route path="/adminDashboard" element={<AdminDashboard />}>
          <Route index element={<AdminDashboardIndex />}></Route>
          {AdminRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>

        <Route path="*" element={<Notfound />}></Route>
      </Routes>

      {/* for toast 👇 */}
      <ToastContainer />
    </div>
  );
}

export default App;
