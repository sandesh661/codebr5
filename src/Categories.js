import React from 'react';
import './index.css';
import Category from './Category';
import Sources from './Sources';
import LoaderComponent from './LoaderComponent';

import { connect } from 'react-redux';
import { fetchNews, fetchSources } from './actions/newsActions';

class Categories extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			categories: [],
			sources: [],
			isActive: '',
			isLoading: true
		}
		this.handleActive = this.handleActive.bind(this);
	}

	componentWillReceiveProps(newProps) {
      this.setState({categories: newProps.news.lists});
      this.setState({sources: newProps.news.sources});
			this.setState({isLoading:false});
  }
	componentWillMount(){
      this.props.fetchNews();
	}
	handleActive(category){
		this.setState({ isActive : category });
    this.props.fetchSources(category);
	}

	render(){
		return(
			<div>
				{(this.state.isLoading) ? <LoaderComponent /> : '' }
				{this.state.categories.map( (catobj, i) => (
					<Category value={catobj} key={i} isactive={catobj === this.state.isActive} handleActivePrnt={this.handleActive} />
				))}
					<Sources sources={this.state.sources} />
			</div>
		)
	}
}


const mapStateToProps = state =>({
news: state.newsData
});

export default connect(mapStateToProps, { fetchNews, fetchSources })(Categories);
