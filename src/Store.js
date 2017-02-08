import React, { Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import './Store.css';

class Store extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }

  }


  componentDidMount() {
    axios.get('https://practiceapi.devmountain.com/products')
    .then(res => {
      this.setState({
        products: res.data
      })
    })
  }


  render() {

    var products = this.state.products.map((product, i) => {
      return (
        <Link key={i} to={"products/" + product.id}>
          <li>{product.title}</li>
        </Link>
      )
    })

    return (
      <div className="store">
        <h1>This is the store!!!</h1>

        <ul>
          {products}
        </ul>
      </div>
    )
  }
}

export default Store
