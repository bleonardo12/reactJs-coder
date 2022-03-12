import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Container/ItemListContainer";
import "./Components/NavBar/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="div-header">
            <NavBar />
            <ItemListContainer />
            <button className="btn btn-primary">Cargar página</button>
        </div>
    );
}

export default App;
