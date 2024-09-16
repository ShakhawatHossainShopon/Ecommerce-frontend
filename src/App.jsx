import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ClipLoader } from "react-spinners";
function App() {
  const Home = lazy(() => import("./Module/UserClient/Screens/Home"));
  const NotFound = lazy(() => import("./Module/UserClient/Screens/NotFound"));

  return (
    <>
      <Router>
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
    </>
  );
}

export default App;
