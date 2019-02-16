import React from 'react';
import './index.css';
import Spinner from 'react-spinkit';

class LoaderComponent extends React.Component{
    render(){
        return(
                <div className="loader_div">
                    <Spinner name="line-scale" color="orange"/>
                </div>
                );
    }
}

export default LoaderComponent;
