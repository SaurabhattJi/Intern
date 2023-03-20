import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import Cartoon from "../src/images/car2.png";

const App = () => {
    return (
        <div className="card">
            <div
                className="card-body"
                style={{ height: "25rem" }}
            >
                <img
                    src={Cartoon}
                    alt="CArtoon"
                />
                <h5 className="card-title">Micky Mouse </h5>
                <p className="card-text">
                    Mickey Mouse is an animated cartoon character co-created in
                    1928.
                </p>
                <hr />
                <p>Price: $20</p>
                <span>
                    {" "}
                    <a
                        href="/"
                        className="btn btn-primary "
                    >
                        Read More
                    </a>
                </span>
            </div>
        </div>
    );
};

export default App;
