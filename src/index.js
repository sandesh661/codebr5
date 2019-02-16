import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import axios from 'axios';
//import _ from 'lodash';
import Categories from './Categories';
//import Spinner from 'react-spinkit';

import { Provider } from 'react-redux';
import store from './store';



ReactDOM.render(<Provider store={store} ><Categories /></Provider> , document.getElementById('root'));
