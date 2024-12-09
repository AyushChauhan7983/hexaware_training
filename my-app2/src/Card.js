import React from "react";
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from "semantic-ui-react";
import "./App.css";
import ConfirmExampleConfirm from "./DeleteConfirm";
import ModalU from "./UpdateModal";

const CardExampleCard = ({ product, removeProduct, updateProduct }) => {
  const truncatedName = (name) =>
    name.length > 20 ? name.slice(0, 20) + "..." : name;

  const truncateDescription = (description) =>
    description.length > 100 ? description.slice(0, 100) + "..." : description;

  return (
    <Card>
      <div className="card-image-container">
        <Image src={product.image} wrapped ui={false} />
      </div>
      <CardContent>
        <CardHeader>{truncatedName(product.title)}</CardHeader>
        <CardMeta>
          <span className="price">${product.price}</span>
        </CardMeta>
        <CardDescription>
          {truncateDescription(product.description)}
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <div className="rating">
          <Icon name="star" color="yellow" />
          {product.rating?.rate || "N/A"} ({product.rating?.count || 0})
        </div>
      </CardContent>
      <div className="card-actions">
        <ConfirmExampleConfirm onConfirm={() => removeProduct(product.id)} />
        <ModalU product={product} onUpdateProduct={updateProduct} />
      </div>
    </Card>
  );
};

export default CardExampleCard;
