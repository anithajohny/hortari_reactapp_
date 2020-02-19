import React from "react"
//import App from "./App"
import productTile from "../components/productTile";

export default class Cart extends React.Component {
    componentDidMount() {
        this.initCart();
    }


    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }
    }




    initCart() {
        let myCart = localStorage.getItem('cart')
        myCart = JSON.parse(myCart)
        this.setState({
            cart: myCart || []
        })
    }


    render() {
        const productsList = this.state.cart.map((product) => {
            return productTile(null,product)
        })
        return (

            <nav>
                <div>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search Item" placeholder="Search Item" aria-label="Search Item" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Clear Cart</button>
                    </form>
                    CART ITEMS
              <div className="container">
                        <div className="row">
                            {productsList}

                        </div>

                    </div>
                    <div>
                    </div>
                </div>
            </nav>


        )
    }
}

