import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Loading() {
    return (
        <div className="Loading">
            <br /> <br />
            <Spinner color="primary" />
        </div>
    );
}

export default Loading;
