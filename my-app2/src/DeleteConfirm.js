import React, { useState } from "react";
import { Button, Confirm } from "semantic-ui-react";
import { message } from "antd";

const ConfirmExampleConfirm = ({ onConfirm }) => {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    setOpen(false);
    onConfirm();
    message.success("Product removed successfully!");
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        style={{ backgroundColor: "blueviolet", color: "white" }}
      >
        Remove
      </Button>
      <Confirm
        open={open}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        content="Are you sure you want to remove this product?"
      />
    </>
  );
};

export default ConfirmExampleConfirm;
