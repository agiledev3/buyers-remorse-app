import { useState } from 'react'

const useForm = (existingProduct) => {
	//use a passed product to edit; if none is passed - construct a default one to create
	const initProduct = existingProduct ? existingProduct :  {
		name: "",
		linkToBuy: "",
		reasonToBuy: "",
		reminderPeriod: 7,
		coolingPeriod: 30,
	};

	const [product, setValues] = useState(initProduct)
	const handleChange = (event) => {
		const { name, value } = event.target
		setValues({...product, [name]: value})
	}
	const handleReset = () =>{
		setValues({...initProduct})
	}

	return {handleChange, handleReset, product}
}

export default useForm
