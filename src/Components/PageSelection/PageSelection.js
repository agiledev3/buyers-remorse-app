import { useState } from 'react'
import React,{Fragment} from 'react';
import Home from '../Home'
import EditProduct from '../EditProduct'
import Pages from './Pages'

const PageSelection = (props) => {
    const [selectedPage, setSelectedPage] = useState(Pages.HOME)

    return (
        <React.Fragment>
            {selectedPage === Pages.HOME && <Home allProducts={props.allProducts} changePage={setSelectedPage} /> }
            {selectedPage === Pages.EDIT_PRODUCT && <EditProduct changePage={setSelectedPage}/> }
        </React.Fragment>
    )
}

export default PageSelection
