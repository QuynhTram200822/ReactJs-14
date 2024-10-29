// ParentComponent.js
import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { ChildComponent } from "../ChildComponents/ChildComponents";

function ParentComponent() {
  const dispatch = useDispatch(); // Khởi tạo dispatch

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" }); // Gửi hành động INCREMENT
  };

  return (
    <div className="container d-flex vh-100 justify-content-center align-items-center">
      <Button variant="primary" className="me-2" onClick={handleIncrement}>
        +
      </Button>
      <ChildComponent />
    </div>
  );
}

export default ParentComponent;
