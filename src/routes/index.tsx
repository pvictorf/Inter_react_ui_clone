import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as Page from "../pages";

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page.Home />} />
        <Route path="*" element={(<h1>Not Found :(</h1>)} />
      </Routes>
    </BrowserRouter>
  );
}

export default routes