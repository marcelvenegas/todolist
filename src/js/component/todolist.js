import React from "react";

//Rendering an Array
export class Todolist extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: ["HELLO"]
		};
	}
	render() {
		let myList = ["First", "Second", "Third", "Fourth", "Animal", 43];
		console.log(myList);

		return (
			<div className="text-center mt-5">
				<h1>To Do List</h1>
				<input
					type="text"
					value={this.state.anInput}
					onChange={this.updateState}
					placeholder="Enter activity here"
				/>
				<button
					type="button"
					className="btn"
					onClick={() => this.setState({})}>
					Enter Activity
				</button>
				<ul>
					{myList.map((tea, parrot) => {
						return <li key={parrot}>{tea}</li>;
					})}
				</ul>
			</div>
		);
	}
}
