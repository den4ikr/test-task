import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appLinks } from "./routes";
import { AppStoreProvider } from "./store";
import Theme from "./Theme";

const Home = lazy(() => import("./containers/Home"));
const JobDetails = lazy(() => import("./containers/JobDetails"));

function App() {
  return (
    <AppStoreProvider>
      <Theme>
        <BrowserRouter>
          <Suspense fallback={<div>Loading</div>}>
            <Routes>
              <Route path={appLinks.home.link} index element={<Home />} />
              <Route path={appLinks.jobDetails.link} element={<JobDetails />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Theme>
    </AppStoreProvider>
  );
}

export default App;
