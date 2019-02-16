import React from 'react';
import './index.css';
import LoaderComponent from './LoaderComponent';

import { connect } from 'react-redux';
import { loadNews } from './actions/newsActions';

class Sources extends React.Component{
	constructor(props){
		super(props);
		this.state = {
            news : [],
            isLoading: true
		}
	}
	handleSourceSelect(event){
		this.setState({isLoading:true});
		var source_id = event.target.value;
		if(source_id===""){
        source_id = 'bbc-news';
		}
        this.props.loadNews(source_id);
	}
    componentWillReceiveProps(newProps) {
        this.setState({news:newProps.news.articles});
				this.setState({isLoading:false});
    }
		//If api fails to load than componentDidMount will execute when we select other category.
    componentDidMount(){
			if(this.state.isLoading){
        this.setState({isLoading:false});
			}
    }
	render(){
		return(
			<div>
			{(this.state.isLoading) ? <LoaderComponent /> : '' }
				<select className="dropdown-btn" onChange={this.handleSourceSelect.bind(this)}>
				{ this.props.sources.map( (source, i) => (
						<option value={source.id} key={i}>{source.name}</option>
				))}
				</select>
				<div className="news_div">
					{ this.state.news.map( (newsobj, i) => (
					<div className="news">
							<img src={newsobj.urlToImage} className="img_resp" />
							<a href={newsobj.url} className="heading" key={i}>{newsobj.title}</a>
							<p className="description">{newsobj.content}<span className="readmore"><a href={newsobj.url} target="_blank">read more...</a></span></p>
					</div>
					))}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state =>({
news: state.newsData
});

export default connect(mapStateToProps, { loadNews })(Sources);
