import AdminDashboardIndex from "../Components/AdminDashboard/AdminDashboardIndex";
import AdminAllBlog from "../Components/AdminDashboard/UpdateFrontEnd/AdminBlog/AdminAllBlog";
import AdminBlog from "../Components/AdminDashboard/UpdateFrontEnd/AdminBlog/AdminBlog";
import AdminContact from "../Components/AdminDashboard/UpdateFrontEnd/AdminContact";
import AdminFooter from "../Components/AdminDashboard/UpdateFrontEnd/AdminFooter";
import AdminHappyClient from "../Components/AdminDashboard/UpdateFrontEnd/AdminHappyClient";
import AdminHero from "../Components/AdminDashboard/UpdateFrontEnd/AdminHero";
import AdminAllProducts from "../Components/AdminDashboard/UpdateFrontEnd/AdminProduct/AdminAllProducts";
import AdminProduct from "../Components/AdminDashboard/UpdateFrontEnd/AdminProduct/AdminProduct";
import AdminAllReview from "../Components/AdminDashboard/UpdateFrontEnd/AdminReview/AdminAllReview";
import AdminReview from "../Components/AdminDashboard/UpdateFrontEnd/AdminReview/AdminReview";
import AdminAllService from "../Components/AdminDashboard/UpdateFrontEnd/AdminService/AdminAllService";
import AdminService from "../Components/AdminDashboard/UpdateFrontEnd/AdminService/AdminService";
import AdminSubscribe from "../Components/AdminDashboard/UpdateFrontEnd/AdminSubscribe";
import AdminTopBar from "../Components/AdminDashboard/UpdateFrontEnd/AdminTopBar";
import AdminAppointment from "../Pages/AdminDashboard/Appointmrnt/AdminAppointment";
import ChangePassword from "../Shared/Auth/ChangePassword";


const AdminRoutes = [
  { path: "overview", Component: AdminDashboardIndex },
  { path: "updateHero", Component: AdminHero },
  { path: "AddService", Component: AdminService },
  { path: "admin-appointment", Component: AdminAppointment },

  { path: "allService", Component: AdminAllService },
  { path: "updateService/:id", Component: AdminService },
  { path: "AddProduct", Component: AdminProduct },
  { path: "allProducts", Component: AdminAllProducts },
  { path: "updateProduct/:id", Component: AdminProduct },

  { path: "AddReview", Component: AdminReview },
  { path: "allReviews", Component: AdminAllReview },
  { path: "updateReview/:id", Component: AdminReview },

  { path: "updateContact", Component: AdminContact },
  { path: "updateFooter", Component: AdminFooter },
  { path: "updateTopBar", Component: AdminTopBar },
  { path: "updateSubscribe", Component: AdminSubscribe },
  { path: "updateHappyClient", Component: AdminHappyClient },
  { path: "changePassword", Component: ChangePassword },

  { path: "AddBlog", Component: AdminBlog },
  { path: "allBlogs", Component: AdminAllBlog },
  { path: "updateBlog/:id", Component: AdminBlog },

];

export default AdminRoutes;
