import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Container/ItemListContainer";
import "./Components/NavBar/NavBar.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
