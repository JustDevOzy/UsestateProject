import { useState } from "react"
import { useRef, useEffect } from "react"

function App() {
	const [items, setItems] = useState([])
	const [newitem, setNewItem] = useState("")
	const [newQuantity, setNewQuantity] = useState("")
	const [currentIndex, setCurrentIndex] = useState(-1)

	// Refs
	let itemName = useRef()
	let itemQuantity = useRef()

	useEffect(() => {
		itemName.current.focus()
	}, [])

	function handleItemChange(event) {
		setNewItem(event.target.value)
	}

	function handleQuantityChange(event) {
		setNewQuantity(event.target.value)
	}

	function handleSubmit(event) {
		event.preventDefault()
		if (currentIndex >= 0) {
			const updateItem = [...items]
			updateItem[currentIndex] = { item: newitem, quantity: newQuantity }
			setItems(updateItem)
			setCurrentIndex(-1)
		} else {
			if (
				itemName.current.value === "" ||
				itemQuantity.current.value === ""
			) {
				window.alert("Add item name and quantity")
			} else {
				setItems([...items, { item: newitem, quantity: newQuantity }])
			}
		}

		setNewItem("")
		setNewQuantity("")
	}
	return (
		<div className="container">
			<h1 className="title text-center"> Inventory List</h1>
			<form className="myform" onSubmit={handleSubmit}>
				<div>
					<input
						placeholder="item name"
						className="form-1"
						ref={itemName}
						value={newitem}
						onChange={handleItemChange}
					/>
				</div>

				<div>
					<input
						placeholder="item quantity"
						className="form-2"
						ref={itemQuantity}
						value={newQuantity}
						onChange={handleQuantityChange}
					/>
				</div>

				<button className="btn" type="submit">
					Save
				</button>
			</form>
			<div className="alllists">
				{console.log(items)}
				{items.map((item, index) => (
					<div className="list-items-new">
						<div className="half">
							<h3 key={index}>
								{item.item} {item.quantity}
							</h3>
							<div className="btns">
								<button className="btn btn-1">Edit</button>
								<button className="btn btn-2">X</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default App
