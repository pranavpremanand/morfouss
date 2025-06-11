import { Navigate, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { routes } from "./content/constant";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "./components/common/LoadingSpinner";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./components/SpinnerContext";
import { Toaster } from "react-hot-toast";
import { ScrollToTop } from "./components/ScrollToTop";
import QueryProvider from "./utils/QueryProvider";
import { HelmetProvider } from "react-helmet-async";

// Lazy load components for better performance
const WebsiteHeader = lazy(() => import("./components/website/WebsiteHeader"));
const WebsiteFooter = lazy(() => import("./components/website/WebsiteFooter"));
const Thankyou = lazy(() => import("./pages/Thankyou"));

// Lazy load only the page components for better performance
const ServiceDetails = lazy(() =>
  import("./pages/website/ServiceDetails/ServiceDetails")
);
const BlogDetails = lazy(() =>
  import("./pages/website/BlogDetails/BlogDetails")
);

// Initialize AOS with simple settings
AOS.init({
  once: true,
  duration: 500,
  disable: window.disableAOS || false, // Disable on mobile
  startEvent: "DOMContentLoaded", // Earlier initialization
  offset: 120, // Smaller offset for earlier animation
  delay: 0,
});

export default function App() {
  return (
    <HelmetProvider>
      <SpinnerContextProvider>
        <QueryProvider>
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
                path="/insights/:slug"
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
            </Routes>
          </Suspense>
        </QueryProvider>
      </SpinnerContextProvider>
    </HelmetProvider>
  );
}
