import { Navigate, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { routes } from "./content/constant";
import { lazy, Suspense, useEffect } from "react";
import { LoadingSpinner } from "./components/common/LoadingSpinner";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./components/SpinnerContext";
import { Toaster } from "react-hot-toast";
import { ScrollToTop } from "./components/ScrollToTop";

// Lazy load components for better performance
const WebsiteHeader = lazy(() => import("./components/website/WebsiteHeader"));
const WebsiteFooter = lazy(() => import("./components/website/WebsiteFooter"));
const Thankyou = lazy(() => import("./pages/Thankyou"));
const ServiceDetails = lazy(() =>
  import("./pages/website/ServiceDetails/ServiceDetails")
);
const BlogDetails = lazy(() =>
  import("./pages/website/BlogDetails/BlogDetails")
);

// Initialize AOS with performance-optimized settings
export default function App() {
  useEffect(() => {
    // Initialize AOS only after component mounts for better performance
    AOS.init({
      once: true,
      duration: 500,
      disable: window.innerWidth < 768 ? 'mobile' : false, // Disable on mobile for better performance
    });

    // Clean up AOS on unmount
    return () => {
      AOS.refresh();
    };
  }, []);

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
                  <Suspense fallback={<div className="h-20 bg-primary"></div>}>
                    <WebsiteHeader />
                  </Suspense>
                  {component}
                  <Suspense fallback={<div className="h-40 bg-primary"></div>}>
                    <WebsiteFooter />
                  </Suspense>
                </>
              }
            />
          ))}

          <Route
            path="/services/:title"
            element={
              <>
                <Suspense fallback={<div className="h-20 bg-primary"></div>}>
                  <WebsiteHeader />
                </Suspense>
                <ServiceDetails />
                <Suspense fallback={<div className="h-40 bg-primary"></div>}>
                  <WebsiteFooter />
                </Suspense>
              </>
            }
          />

          <Route
            path="/insights/:id"
            element={
              <>
                <Suspense fallback={<div className="h-20 bg-primary"></div>}>
                  <WebsiteHeader />
                </Suspense>
                <BlogDetails />
                <Suspense fallback={<div className="h-40 bg-primary"></div>}>
                  <WebsiteFooter />
                </Suspense>
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
    </SpinnerContextProvider>
  );
}
