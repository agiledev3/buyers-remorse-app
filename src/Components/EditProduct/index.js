import React from "react"
import useForm from './useForm'
import Pages from '../PageSelection/Pages'
import { Col, Row, Card, Button, Form } from 'react-bootstrap'

const EditProduct = (props) => {
	const { handleChange, handleReset, product } = useForm(props.product);
	const handleSubmit = (e) =>{
		e.preventDefault();		
		if(product.id){
			props.updateProduct(product.id, product)
		}
		else{
			props.createProduct(product)
		}
		props.changePage(Pages.HOME);
		props.setCurrentProduct(null);
	}

    const resetAndGoHome = () =>{
        handleReset();
        props.changePage(Pages.HOME);
		props.setCurrentProduct(null);
    }

	return(
		<React.Fragment>
			<Card className="my-2">
				<Card.Title className='text-center'>
					<Row className="p-1">
		                 <Col xs={{span:2}} style={{fontSize:"2em"}}>
		                  	<Button variant="outline-dark" size="lg" onClick={resetAndGoHome}>
								<i className="fas fa-chevron-left align-center"></i>
							</Button>
		                 </Col>
		                 <Col xs={{span:8}}>
		                        Buyer's regret
		                 </Col>
		                    <Col xs={{span:2}} style={{fontSize:"2em"}}>
		                   	<i className="far fa-user-circle align-middle"></i>
		                 </Col>
		            </Row>
		            <Row>
		                <Col sm={{span:2}}></Col>
		                <Col sm={{span:8}}>
		                        Product Details
		                </Col>
		                <Col sm={{span:2}}></Col>
		            </Row>
				</Card.Title>
			</Card>
			<Form className="product-form" onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Label htmlFor="name">Product name:</Form.Label>
					<Form.Control
						onChange={handleChange}
						value={product.name}
						placeholder="Product name ..."
						name="name"
						id="name"
						data-testid="name"
						required/>
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor="linkToBuy">Link to buy:</Form.Label>
					<Form.Control
						onChange={handleChange}
						value={product.linkToBuy}
						placeholder="Link to a website ..."
						name="linkToBuy"
						id="linkToBuy"
						/>
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor="reasonToBuy">Why would you like to buy this product?</Form.Label>
					<Form.Control
						onChange={handleChange}
						value={product.reasonToBuy}
						placeholder="Reason to buy ..."
						name="reasonToBuy"
						id="reasonToBuy"
						as="textarea"
						rows="3"
						required
						 />
				</Form.Group>
				<Form.Row>
				<Form.Group as={Col} xs="auto">
					<Form.Label htmlFor="reminderPeriod">How long should I wait before I remind you about this product?</Form.Label>
					<Form.Control
						onChange={handleChange}
						value={product.reminderPeriod}
						placeholder="Days ..."
						name="reminderPeriod"
						id="reminderPeriod"
						type="number"
						min="1"
						max="30"
						style={{maxWidth:"5rem"}}
						 />
				</Form.Group>
				<Col lg="2"></Col>
				<Form.Group as={Col} xs="auto">
					<Form.Label htmlFor="coolingPeriod">How long should I lock the buy button?</Form.Label>
					<Form.Control
						onChange={handleChange}
						value={product.coolingPeriod}
						placeholder="Days ..."
						name="coolingPeriod"
						id="coolingPeriod"
						type="number"
						min="1"
						max="90"
						style={{maxWidth:"5rem"}}
						 />
				</Form.Group>
				</Form.Row>
				<Form.Row>
				<Col>
					<Button variant="outline-danger" aligned="left aligned" size="lg" onClick={resetAndGoHome}>
						<i className="fas fa-times-circle"></i>
					</Button>
				</Col>
				<Col xs="auto">
					<Button variant="outline-success" aligned="right aligned" type="submit" size="lg" title="Save product">
						<i className="fas fa-check"></i>
					</Button>
				</Col>
				</Form.Row>
			</Form>
		</React.Fragment>
	);
};

export default EditProduct;
