import Pages from '../PageSelection/Pages'

const EditProduct = (props) => {
    return (
        <div>
            <h1>This is the (dummy) edit product page</h1>
            <p>This is a dummy EditProduct page to be updated when the page has been completed</p>
            <button onClick={() => props.changePage(Pages.HOME)}>Home</button>
        </div>
    )
}

export default EditProduct
