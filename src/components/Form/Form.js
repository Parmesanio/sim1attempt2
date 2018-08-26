import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            productName: '',
            productImg: '',
            productPrice: ''
         }
         this.handleClear = this.handleClear.bind(this);
         this.handleGetAll = this.handleGetAll.bind(this);
         this.handlePost = this.handlePost.bind(this);
         this.goForwards = this.goForwards.bind(this);
    }
    goForwards() {
        this.props.history.goForward('/');
    }
    handlePost(productName, productUrl, productPrice) {
        axios.post('/api/product', {productName, productUrl, productPrice})
            .then(() => this.goForwards)
            .catch(err => console.log('Err in post', err));

    }
    handleGetAll() {
        axios.get('/api/inventory')
            .then(res => {
                this.setState({
                    products: res.data
                })
            }).catch(err => console.log('Err in get', err));
    }
    handleName(event){
        this.setState({
            productName: event.target.value
        })
    }
    handleImg(event){
        this.setState({
            productImg: event.target.value
        })
    }
    handlePrice(event){
        this.setState({
            productPrice: event.target.value
        })
    }
    handleClear(){
        this.setState({
            productImg: '',
            productName: '',
            productPrice: ''
        })
    }
    onSubmit(event) {
        event.preventDefault();
    }
    render() {
        
        
        let { productImg, productName, productPrice } = this.state;
        return ( 
            <div>
                <form onSubmit={(event) => this.onSubmit(event)}>
                    <img src={productImg} alt={productName} />
                    <label>Image URL</label>
                    <input type="text" onChange={(event) => this.handleImg(event)} value={productImg} />
                    <label>Product Name</label>
                    <input type="text" onChange={(event) => this.handleName(event)} value={productName} />
                    <label>Price</label>
                    <input type="text" onChange={(event) => this.handlePrice(event)} value={productPrice} />
                    <button onClick={this.handleClear}>Cancel</button>
                    <button onClick={() => this.handlePost(productName, productImg, productPrice)}>Add to Inventory</button>
                </form>
            </div>
         );
    }
}
 
export default Form;