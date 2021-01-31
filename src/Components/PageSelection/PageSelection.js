import { useState } from 'react'
import Home from '../Home'
import EditProduct from '../EditProduct'

const PageSelection = (props) => {
    const [selectedPage, setSelectedPage] = useState(props.pages.HOME)

    return (
        <div>
            {selectedPage === props.pages.HOME && <Home allProducts={props.allProducts} pages={props.pages} changePage={setSelectedPage} /> }
            {selectedPage === props.pages.EDIT_PRODUCT && <EditProduct pages={props.pages} changePage={setSelectedPage}/> }
        </div>
    )
}

export default PageSelection
