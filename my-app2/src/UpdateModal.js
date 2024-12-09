import React, { useState } from "react";
import { Modal, Button } from "semantic-ui-react";
import "./App.css";
import { message } from "antd";

const ModalU = ({ product, onUpdateProduct }) => {
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState(product?.price || "");
  const [error, setError] = useState("");

  const handleUpdateProduct = () => {
    if (!price) {
      message.error("Please enter price");
      return;
    }
    const updatedProduct = { price: parseFloat(price) };
    onUpdateProduct(product.id, updatedProduct);
    resetFields();
    setOpen(false);
    message.success("Price updated successfully!");
  };

  const resetFields = () => {
    setPrice(product?.price || "");
    setError("");
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        resetFields();
        setOpen(false);
      }}
      onOpen={() => setOpen(true)}
      trigger={<Button primary>Update</Button>}
    >
      <Modal.Header>Update Product Price</Modal.Header>
      <Modal.Content>
        <div className="form">
          <input
            type="text"
            placeholder="Enter Price"
            value={price}
            onChange={(e) => {
              setError("");
              setPrice(e.target.value);
            }}
            className="price-input"
          />
          {error && <div className="error-message">{error}</div>}
        </div>
      </Modal.Content>

      <Modal.Actions>
        <Button primary onClick={handleUpdateProduct}>
          Update
        </Button>
        <Button
          onClick={() => {
            resetFields();
            setOpen(false);
          }}
        >
          Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalU;
