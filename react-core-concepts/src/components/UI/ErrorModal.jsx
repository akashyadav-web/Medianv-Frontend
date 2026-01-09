import React from "react";
import Card from "./Card";
import Button from "./Button";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onConfirm}></div> {/* Fixed syntax */}
      <Card className="modal"> {/* Fixed syntax */}
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <Button onClick={props.onConfirm}>Okay</Button> {/* Added onClick handler */}
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
