import React, { Component } from "react";
import api from '../../services/api';
import './styles.css';

export default class Main extends Component{
    state = {
        products:[],
        productInfo:[],
        page:1
    }
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page${page}`);
        const { docs, ...productInfo} = response.data;
        this.setState({ products: docs , productInfo, page })
        console.log(response.data);
    };
    prevPage = ()=>{

    }
    nextPage = ()=>{
        const { page,productInfo } = this.state;
        if(page === productInfo.pages) return;
            const pageNumber = page + 1;
            this.loadProducts(pageNumber);
    }

    render(){
        return(
            <div className="product-list">
                {/* como se fosse um foreach no array e retornou singularmente apos o map() product significa a nova variavel que vai receber o valor no singular; */}
                {this.state.products.map(product =>(
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <a href="#">Acessar</a>
                    </article>
                ))}
                <div className="actions">
                    <button onClick={this.prevPage}>Anterior</button>
                    <button onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        )
    }
}