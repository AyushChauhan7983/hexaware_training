import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      qty: 0,
      totalAmount: 0,
      discount: 0,
      totalPaid: 0,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, this.calculateTotal);
  };

  calculateTotal = () => {
    const { price, qty, discount } = this.state;
    const totalAmount = price * qty;
    const totalPaid = totalAmount - (totalAmount * discount) / 100;

    this.setState({
      totalAmount,
      totalPaid,
    });
  };

  render() {
    const { price, qty, totalAmount, discount, totalPaid } = this.state;

    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>Billing Calculator</h1>

        <div>
          <label>Price: </label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={this.handleInputChange}
            style={{ margin: "10px" }}
          />
        </div>

        <div>
          <label>Quantity: </label>
          <input
            type="number"
            name="qty"
            value={qty}
            onChange={this.handleInputChange}
            style={{ margin: "10px" }}
          />
        </div>

        <div>
          <label>Discount (%): </label>
          <input
            type="number"
            name="discount"
            value={discount}
            onChange={this.handleInputChange}
            style={{ margin: "10px" }}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Total Amount: </label>
          <h3>{totalAmount}</h3>
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Total Paid: </label>
          <h3>{totalPaid}</h3>
        </div>
      </div>
    );
  }
}

export default App;
