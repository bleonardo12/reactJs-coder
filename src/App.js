import { Navbar } from "react-bootstrap";
import "./App.css";
import CartWidget from "./Components/Header/Cart/CartWidget";
import Header from "./Components/Header/Header";
import ItemListContainer from "./Components/ItemListContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="div-header">
            <Header />
            <Navbar />
            <CartWidget />
            <ItemListContainer />
            <FontAwesomeIcon icon={faGlobe} />
        </div>
    );
}

export default App;
