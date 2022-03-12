import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Container/ItemListContainer";
import "./Components/NavBar/NavBar.css";

function App() {
    return (
        <div className="div-header">
            <NavBar />
            <ItemListContainer greeting="Bienvenidos a Anaiak Indumentaria Deportiva" />
        </div>
    );
}

export default App;
