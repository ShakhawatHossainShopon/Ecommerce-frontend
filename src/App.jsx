import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { Navbar } from "./Components";
function App() {
  const Home = lazy(() => import("@/Module/UserClient/Screens/Home/Home"));
  const NotFound = lazy(() =>
    import("@/Module/UserClient/Screens/NotFound/NotFound")
  );

  return (
    <>
      <div className="p-2 md:p-4">
        <Router>
          <Navbar />
          <Suspense
            fallback={
              <div className="w-full flex justify-center items-center h-[90vh]">
                <ClipLoader size={100} color="#F38160" />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </>
  );
}

export default App;
