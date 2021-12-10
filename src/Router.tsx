import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Flights } from "./views/Flights";
import { Home } from "./views/Home";
import { PurchasesView } from "./views/Purchases";
import { ShoppingCart } from "./components/Shopping/ShoppingCart";

export const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/vuelos" element={<Flights />} />
            <Route path="/boletos" element={<PurchasesView />} />
            <Route path="/carrito" element={<ShoppingCart />} />
        </Routes>
        <Navbar />
    </BrowserRouter>
)
