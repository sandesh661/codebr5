import { FETCH_ALL_NEWS, FETCH_SOURCES, LOAD_NEWS } from '../actions/types';

const initialState = {
				lists: [],
        sources:[],
        articles:[]
}

export default function(state = initialState, action){
	switch(action.type){
		case FETCH_ALL_NEWS:
			return{
				...state,
				lists: action.payload
			};
		case FETCH_SOURCES:
			return{
				...state,
				sources: action.payload
			};
		case LOAD_NEWS:
			return{
				...state,
				articles: action.payload
			};
		default:
			return state;
	}
}
