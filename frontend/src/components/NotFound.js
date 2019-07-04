import React, { Component } from "react";
import { DigitText } from "@cthit/react-digit-components";
import "./styles/NotFound.css";

class NotFound extends Component {
    render() {
        return (
            <div className="notFoundTextArea">
                <DigitText.Title text="Error 404: Not Found" />
            </div>
        );
    }
}

export default NotFound;
