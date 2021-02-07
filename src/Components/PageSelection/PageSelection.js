import { useState } from 'react'
import { Fragment } from 'react';
import Home from '../Home'
import EditProduct from '../EditProduct'
//list of pages in the app
import Pages from './Pages'


// Componet used to track the currently selected page and switch between pages.
// To change to a new page from another component import 'Pages' as above and
// pass setSelectedPage method down the tree to your component. 
// Call setSelectedPage(Pages.<new_page>) to change to the new_page page.
const PageSelection = (props) => {
    const [selectedPage, setSelectedPage] = useState(Pages.HOME)

    return (
        <Fragment>
            {selectedPage === Pages.HOME && <Home allProducts={props.allProducts} changePage={setSelectedPage} /> }
            {selectedPage === Pages.EDIT_PRODUCT && <EditProduct changePage={setSelectedPage}/> }
        </Fragment>
    )
}

export default PageSelection
