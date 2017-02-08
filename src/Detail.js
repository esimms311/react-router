import React, { Component } from 'react';
import axios from 'axios';
import './Detail.css';

class Detail extends Component {

  constructor(props) {
    super(props)

    this.state = {
      product: {}
    }
  }

  componentDidMount() {
    axios.get('https://practiceapi.devmountain.com/products/' + this.props.params.id)
    .then(res => {
      this.setState({
        product: res.data
      })
    })
  }

  render() {
    return (
      <div className="product-detail">
        <img src={this.state.product.image} />
        <h1>{this.state.product.title}</h1>
        <p>Price: ${this.state.product.price}.00</p>
        <p>Description: {this.state.product.desc}</p>
      </div>
    )
  }
}

export default Detail;
