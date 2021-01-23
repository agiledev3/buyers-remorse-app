import React from 'react'
import { Link } from 'react-router-dom'

function ListItem(prop) {
    const {id, name, daysLeft, likeCount} = prop.product;

    return (
        <div style={boxStyle}>
            <div style={captionStyle}>
                {name}
            </div>
            <div style={contentStyle}>
                <span>
                    <i className="far fa-clock"></i> {daysLeft} days left
                </span>
                <span>
                    {/* ToDo:: remove sup after Bootstrap or SemanticUI is available */}
                    <i className="fas fa-pen" style={actionBtnStyle}><sup></sup></i>
                    <Link to={`/product/${id}`}>
                        <i className="fas fa-thumbs-up" style={actionBtnStyle}><sup>{likeCount}</sup></i>                    
                    </Link>
                    <i className="fas fa-trash-alt" style={actionBtnStyle}><sup></sup></i>
                </span>
            </div>
        </div>        
    )
}

//ToDo:: use Bootstrap or SemanticUI instead when available
const boxStyle = {
    color: "black",
    backgroundColor: "white",
    padding: "0.3rem 0.5rem",
    margin: "0.3rem",
    fontFamily: "Arial",
    border: 'solid 1px lightgrey'
  };

const captionStyle = {
    textAlign: 'left',
    fontSize: '1.5rem'
}

const contentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1rem',
    paddingTop: '0.5rem'
}

const actionBtnStyle = {
    border: '1px solid black',
    padding: '0.1em',
    cursor: "pointer",
    margin: "0 0.1em"
}


export default ListItem
