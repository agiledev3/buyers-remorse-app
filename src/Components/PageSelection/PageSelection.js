import { useState } from 'react'
import React,{Fragment} from 'react';
import Home from '../Home'
import EditProduct from '../EditProduct'

const PageSelection = (props) => {
    const [selectedPage, setSelectedPage] = useState(props.pages.HOME)

    return (
        <React.Fragment>
            {selectedPage === props.pages.HOME && <Home allProducts={props.allProducts} pages={props.pages} changePage={setSelectedPage} /> }
            {selectedPage === props.pages.EDIT_PRODUCT && <EditProduct pages={props.pages} changePage={setSelectedPage}/> }
        </React.Fragment>
    )
}

export default PageSelection
