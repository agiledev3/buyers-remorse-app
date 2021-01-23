import React from 'react'
import ListItem from './ListItem'
import { Link } from 'react-router-dom'

function ProductList(props) {
    return (
        <div style={containerStyle}>
            <div>
                <div style={captionStyle}>Buyer's regret <i className="far fa-user-circle" style={userIconStyle}></i></div>
                <div style={captionStyle}>My wishlist</div>
            </div>
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
    position: 'relative',
    color: 'black',
}

const captionStyle ={
    border: '1px solid black',
    padding: '0.3rem 0',
    textAlign: 'center'
}

const actionBtnStyle = {
    border: '1px solid black',
    padding: '0.1rem',
    cursor: "pointer",
    margin: "0.1rem 0.1rem",
    fontSize: '2rem',
    position: 'absolute',
    right: '0',
    bottom:'0'
}

const userIconStyle = {
    float:'right', 
    padding: '0.5rem 0.5rem 0.5rem 0'
}


export default ProductList
