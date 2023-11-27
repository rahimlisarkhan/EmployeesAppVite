import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import { ROUTER } from "./shared/constant/router";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail";
import DetailSetting from "./pages/DetailSetting";
import About from "./pages/About";
import CreatePage from "./pages/Create";

function App() {
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
