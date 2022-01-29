import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={(<h1>Not Found :(</h1>)} />
      </Routes>
    </BrowserRouter>
  );
}

export default routes