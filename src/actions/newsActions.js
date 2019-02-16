import axios from 'axios';
import _ from 'lodash';

import { FETCH_ALL_NEWS, FETCH_SOURCES, LOAD_NEWS } from './types';

var news = [];

export const fetchNews = () => dispatch => {
	axios.get('https://newsapi.org/v2/sources?apiKey=0a01fd51a20147fc92c78e89b6abf152')
	.then((response) => {
		const sources = response.data.sources;
		const result = _.uniq(_.map(sources, item => item.category));
		news = result;
		//console.log(news);
          dispatch({
						 	type: FETCH_ALL_NEWS,
							payload: news
            })
	})
}

export const fetchSources = (category) => dispatch => {
	axios.get('https://newsapi.org/v2/top-headlines?country=de&category='+category+'&apiKey=0a01fd51a20147fc92c78e89b6abf152')
		.then((response) => {
			const articles = response.data.articles;
			const result = _.uniq(_.map(articles, item => item.source));
			const result2 = _.uniqWith(result, _.isEqual);
			//const removeNull = _.reject(result2, ['id', null]);						//Remove If news id:null
          dispatch({
						 	type: FETCH_SOURCES,
							payload: result2
          })
	})
}

export const loadNews = (source_id) => dispatch => {
	axios.get('https://newsapi.org/v2/top-headlines?sources='+source_id+'&apiKey=0a01fd51a20147fc92c78e89b6abf152')
		.then((response) => {
			//this.setState({news:response.data.articles});
			const articles = response.data.articles;
          dispatch({
					 	type: LOAD_NEWS,
						payload: articles
          })
	})
}
