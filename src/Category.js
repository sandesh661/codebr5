import React from 'react';
import './index.css';

class Category extends React.Component{
	constructor(props){
		super(props);

		this.handleCatClick = this.handleCatClick.bind(this);
	}
	handleCatClick(event){
		this.props.handleActivePrnt(event.target.attributes.getNamedItem('data-cat').value);
	}

	render(){
		return(
			<div className={this.props.isactive ? 'cat-active' : 'category' } data-cat={this.props.value} onClick={this.handleCatClick}>{this.props.value}</div>
		);
	}
}

export default Category;
