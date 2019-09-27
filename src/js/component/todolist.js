import React from "react";
import { Lista } from "./Lista.js";

//Rendering an Array
export class Todolist extends React.Component {
	constructor() {
		super();
		this.state = {
			anInput: "",
			todos: ["Hola", "otra Hola", "heyyy"]
		};
		this.updateState = this.updateState.bind(this);
	}
	updateState(e) {
		this.setState({ anInput: e.target.value });
	}

	deleteElement = chair => {
		let temp = this.state.todos;
		temp.splice(chair, 1);
		this.setState({ todos: temp });
	};

	render() {
		let aList = this.state.todos.map((todo, index) => {
			return <Todolist key={index} name={todo} />;
		});

		return (
			<div className="text-center mt-5">
				<h1>To Do List</h1>
				<input
					type="text"
					className="placeholder"
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
					{this.state.todos.map((elem, ind) => {
						return (
							<Lista
								key={ind}
								text={elem}
								action={() => this.deleteElement(ind)}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}
