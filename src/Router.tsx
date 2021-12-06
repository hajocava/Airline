import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Navbar } from "./components/navbarBottom/Navbar";
import { Home } from "./views/Home";

export const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        <Navbar />
    </BrowserRouter>
);
