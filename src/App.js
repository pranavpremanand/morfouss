import { Navigate, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import WebsiteHeader from "./components/website/WebsiteHeader";
import WebsiteFooter from "./components/website/WebsiteFooter";
import { routes } from "./content/constant";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "./components/common/LoadingSpinner";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./components/SpinnerContext";
import { Toaster } from "react-hot-toast";
import Thankyou from "./pages/Thankyou";
import { ScrollToTop } from "./components/ScrollToTop";

const ServiceDetails = lazy(() =>
  import("./pages/website/ServiceDetails/ServiceDetails")
);
const BlogDetails = lazy(() =>
  import("./pages/website/BlogDetails/BlogDetails")
);

AOS.init({
  once: true,
  duration: 500,
});
export default function App() {
  return (
    <SpinnerContextProvider>
      <LoadingSpinnerContext />
      <ScrollToTop />
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
            path="/services/:title"
            element={
              <>
                <WebsiteHeader />
                <ServiceDetails />
                <WebsiteFooter />
              </>
            }
          />

          <Route
            path="/insights/:id"
            element={
              <>
                <WebsiteHeader />
                <BlogDetails />
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
