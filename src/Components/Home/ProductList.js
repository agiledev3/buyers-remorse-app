import React from 'react'
import ListItem from './ListItem'
import { Link } from 'react-router-dom'

function ProductList(props) {
    return (
        <div style={containerStyle}>
            {props.allProducts.map((product) => (
                <ListItem key={product.id} product={product}/>
            ))}
            <Link to='/product/add'>
                <i className="fas fa-plus" style={actionBtnStyle}></i>
            </Link>            
        </div>
    )
}

//ToDo:: use framework for styles
const containerStyle = {
    minWidth:'15rem',
    minHeight:'20rem', 
    backgroundColor:"white",
    position: 'relative'
}

const actionBtnStyle = {
    border: '1px solid black',
    padding: '0.1rem',
    cursor: "pointer",
    margin: "0.1rem 0.1rem",
    color: 'black',
    fontSize: '2rem',
    position: 'absolute',
    right: '0',
    bottom:'0'
}

export default ProductList
