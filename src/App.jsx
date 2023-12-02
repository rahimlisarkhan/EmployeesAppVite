import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import { ROUTER } from "./shared/constant/router";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail";
import DetailSetting from "./pages/DetailSetting";
import About from "./pages/About";
import CreatePage from "./pages/Create";

import moment from "moment";

import "./shared/helper/momentAz";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Set the locale to "tr" when the component mounts
    moment.locale("az");

    // Optionally, you can change the locale back to the default when the component unmounts
    return () => {
      moment.locale(); // Reset to the default locale
    };
  }, []);

  return (
    <Routes>
      <Route path={ROUTER.HOME} element={<HomePage />} />

      <Route path={ROUTER.DETAIL} element={<Detail />} />
      <Route path={ROUTER.DETAIL_SETTING} element={<DetailSetting />} />

      <Route path={ROUTER.ABOUT} element={<About />} />
      <Route path={ROUTER.CREATE} element={<CreatePage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
