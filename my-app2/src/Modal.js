import React, { useState } from "react";
import { Modal, Button } from "semantic-ui-react";
import "./App.css";
import { message } from "antd";

const ModalC = ({ onAddProduct }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const handleAddProduct = () => {
    const newProduct = {
      id: Math.floor(Math.random() * 1000),
      title,
      price,
      image,
      description,
      rating,
    };
    onAddProduct(newProduct);
    resetFields();
    setOpen(false);
    // messageApi.open({
    //   type: "success",
    //   content: "This is a success message",
    // });
    message.success("Product added successfully!");
  };

  const resetFields = () => {
    setTitle("");
    setPrice("");
    setImage("");
    setDescription("");
    setRating("");
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button primary>Add New Product</Button>}
    >
      <Modal.Header>Add New Product</Modal.Header>
      <Modal.Content>
        <div className="form">
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
      </Modal.Content>

      <Modal.Actions>
        <Button primary onClick={handleAddProduct}>
          Add
        </Button>

        <Button onClick={() => setOpen(false)}>Cancel</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalC;
