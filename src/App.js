import React from 'react';
import logo from './logo.svg';
import './App.css';
import productTile from './components/productTile';
const productsArray=[
      {
        "id": 1,
        "title": "one plus",
        "price":"Rs:2300",
        "image":"http://t0.gstatic.com/images?q=tbn%3AANd9GcRsQUeyYRsysXaDCeJH9o1Q-qzoDCTxAlzlkdRjvaqJQAg8zPRQui11UWRPKdvQcXf2rsDRHdVp&usqp=CAc"

      },
      {
        "id": 2,
        "title": "realme",
        "price":"Rs:2300",
        "image":"http://t0.gstatic.com/images?q=tbn%3AANd9GcTqD0dnc158qJLYsuBp1jF6JIFSTEmmtDhZMExEf0pAgv4F4FNp-oNyUiWnS67AlJ8WqV5KWg&usqp=CAc"

      },
      {
      "id": 3,
      "title": "one plus",
      "price":"Rs:2300",
      "image":"http://t0.gstatic.com/images?q=tbn%3AANd9GcRsQUeyYRsysXaDCeJH9o1Q-qzoDCTxAlzlkdRjvaqJQAg8zPRQui11UWRPKdvQcXf2rsDRHdVp&usqp=CAc"

    },
    {
      "id": 4,
      "title": "realme",
      "price":"Rs:2300",
      "image":"http://t0.gstatic.com/images?q=tbn%3AANd9GcTqD0dnc158qJLYsuBp1jF6JIFSTEmmtDhZMExEf0pAgv4F4FNp-oNyUiWnS67AlJ8WqV5KWg&usqp=CAc"

    },
    {
    "id": 5,
    "title": "one plus",
    "price":"Rs:2300",
    "image":"http://t0.gstatic.com/images?q=tbn%3AANd9GcRsQUeyYRsysXaDCeJH9o1Q-qzoDCTxAlzlkdRjvaqJQAg8zPRQui11UWRPKdvQcXf2rsDRHdVp&usqp=CAc"

  },
  {
    "id": 6,
    "title": "realme",
    "price":"Rs:2300",
    "image":"http://t0.gstatic.com/images?q=tbn%3AANd9GcTqD0dnc158qJLYsuBp1jF6JIFSTEmmtDhZMExEf0pAgv4F4FNp-oNyUiWnS67AlJ8WqV5KWg&usqp=CAc"

  }

    ]
 
 
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cartcount: 0,
      alertOncartcount: 10,
      products: []
    }
  }

addcount()
{
  const newcount = this.state.cartcount + 1;
  this.setState({
    cartcount: newcount
    })
}

loadProducts(){
  this.setState({
    products:productsArray
  })
}
render() {
  const productsList=this.state.products.map((product)=>{
    return productTile(this.addcount.bind(this),product)
  })

  console.log(productsList)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
        <a className="navbar-brand" href="#">Navbar</a>
        <button  onClick={()=>{this.loadProducts()}}>load products</button>
        <button className="right" type="button">
          Cart({this.state.cartcount})
        </button>
      </nav>
      <div className="container">
        <div className="row">
          <h2>Products</h2>
        </div>
        <div className="row">
          {productsList}
        </div>
        <div className="row d-flex justify-content-end">
          <button className="btn btn-primary" id="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}
}

export default App;
