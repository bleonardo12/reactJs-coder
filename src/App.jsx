
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";
import CartContextProvider from './context/CartContext'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Components/NavBar/NavBar.css";

function App() {
    return (
        <BrowserRouter>
        <CartContextProvider >
            <div className="App">
                <NavBar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ItemListContainer saludo="hola soy ItemListCointainer" />
                        }
                    />
                    <Route
                        path="/categoria/:id"
                        element={<ItemListContainer />}
                    />
                    <Route
                        path="/detalle/:detalleId"
                        element={<ItemDetailContainer />}
                    />
                    <Route path="/cart" element={<Cart />} />
                    {/* <Route path="/notFound" element={<Component404 />}/>*/}
                    <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </CartContextProvider>
        </BrowserRouter>
    );
}

export default App;
