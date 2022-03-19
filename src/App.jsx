import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Components/NavBar/NavBar.css";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ItemListContainer saludo="hola soy ItemListCointainer" />
                        }
                    />
                    <Route path="/itemList" element={<ItemListContainer />} />
                    <Route
                        path="/detalle/:detalleId"
                        element={<ItemDetailContainer />}
                    />
                    {/* <Route path="/notFound" element={<Component404 />}/>*/}
                    <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
