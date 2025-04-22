import { Navigate, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import WebsiteHeader from "./components/website/WebsiteHeader";
import WebsiteFooter from "./components/website/WebsiteFooter";
import { routes } from "./constant";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "./components/common/LoadingSpinner";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./components/SpinnerContext";
import { Toaster } from "react-hot-toast";
import Thankyou from "./pages/Thankyou";

const ServiceDetails = lazy(() =>
  import("./pages/website/ServiceDetails/ServiceDetails")
);

AOS.init({
  once: true,
  duration: 500,
});
export default function App() {
  return (
    <SpinnerContextProvider>
      <LoadingSpinnerContext />

      {/* <Link
        to={`https://wa.me/${companyDetails.whatsapp}`}
        target="_blank"
        className="fixed bottom-[1rem] right-[1rem] z-50 p-3 rounded-full border-2 border-green-500 bg-white hover:bg-black text-green-500 hover:text-white transition-all duration-300"
      >
        <BsWhatsapp className="text-3xl" />
      </Link> */}

      <Toaster
        position="top-bottom"
        toastOptions={{
          style: {
            background: "#010C2A",
            color: "#ffffff",
          },
        }}
      />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          {/* Website Pages */}
          {routes.map(({ component, name, path }, index) => (
            <Route
              key={name}
              path={path}
              element={
                <>
                  <WebsiteHeader />
                  {component}
                  <WebsiteFooter />
                </>
              }
            />
          ))}

          <Route
            path="/services/:service"
            element={
              <>
                <WebsiteHeader />
                <ServiceDetails />
                <WebsiteFooter />
              </>
            }
          />
          <Route
            path="/thank-you"
            element={
              <>
                <Thankyou />
              </>
            }
          />

          {/* Landing Pages */}
          {/* <Route
            path="/web-development"
            element={
              <>
                <LandingHeader />
                <LandingPage page={"web-development"} />
                <LandingFooter />
              </>
            }
          />
          <Route
            path="/app-development"
            element={
              <>
                <LandingHeader />
                <LandingPage page={"app-development"} />
                <LandingFooter />
              </>
            }
          /> */}
        </Routes>
      </Suspense>
    </SpinnerContextProvider>
  );
}
