import Ourservices from "../Components/Home/Our Services/Ourservices";
import OurProduct from "../Components/Home/OurProduct/OurProduct";
import AboutUs from "../Pages/AboutUs/AboutUs";
import RefundReturns from "../Pages/Additional Page/RefundReturns ";
import TermsConditions from "../Pages/Additional Page/TermsConditions";
import PrivacyPolicy from "../Pages/Additional Page/priveacyPolicy";
import AllPeoductpage from "../Pages/AllProductPage/AllPeoductpage";
import Appointment from "../Pages/Appointment/Appointment";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import BlogPage from "../Pages/BlogPage/BlogPage";
import ContactUs from "../Pages/ContactUs/ContactUs";
import DeveloperTeam from "../Pages/DeveloperTeam/DeveloperTeam";
import Home from "../Pages/Home/Home";
import ProductDetailsPage from "../Pages/ProductDetailsPage/ProductDetailsPage";
import ReviewPage from "../Pages/ReviewPage/ReviewPage";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Login from "../Shared/Auth/Login";
import SignUp from "../Shared/Auth/SignUp";

const PublicRoutes = [
  { path: "", Component: Home },
  { path: "home", Component: Home },
  { path: "aboutUs", Component: AboutUs },
  { path: "contactUs", Component: ContactUs },
  { path: "our-services", Component: Ourservices },
  {path: "our-products", Component: OurProduct},
  {path: "blogs", Component: BlogPage},
  {path: "appointment", Component: Appointment},
  {path: "/our-services/:id", Component: ServiceDetails},
  {path: "/products/:id", Component: AllPeoductpage},
  {path: "/our-blog/:id", Component: BlogDetails},
  {path: "/all-reviews", Component: ReviewPage},
  {path: "/our-product/:id", Component: ProductDetailsPage},
  {path: "/developer-team", Component: DeveloperTeam},
  {path: "/login", Component: Login},
  {path: "/signUp", Component: SignUp},
  {path: "/privacyPolicy", Component: PrivacyPolicy},
  {path: "/refundReturns", Component: RefundReturns},
  {path: "/TermsConditions", Component: TermsConditions},



  
];

export default PublicRoutes;
