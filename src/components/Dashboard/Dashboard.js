import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products: [],
            isEditing: false
         }
         this.handleGetAll = this.handleGetAll.bind(this);
         this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount() {
        this.handleGetAll();
    }
    handleGetAll() {
        axios.get('/api/inventory')
            .then(res => {
                console.log(res);
                
                this.setState({
                    products: res.data
                })
            }).catch(err => console.log('Err in get', err));
    }
    handleDelete(id){
        
        axios.delete(`/api/product/${id}`)
            .then(() => this.props.history.push('/'))
            .catch(err => console.log('Err in handleDelete', err));
    }
    render() {
        let { products } = this.state;
        let mapped = products.map(product => {
            let { id } = product;
            return <Product key={id} {...product} handleDelete={this.handleDelete} />
        })
        return ( 
            <div>
            {mapped}
            </div>
         );
    }
}
 
export default Dashboard;