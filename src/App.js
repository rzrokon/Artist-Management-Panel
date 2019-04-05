import React, { Component } from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './styles/bootstrap.min.css';
import './styles/custom.css';
import Routes from './routes'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            appName: 'Imagine Radio'
        };
    }

    render() {
        return (
            <div className="">  
                <Header name={this.state.appName} />
                <Routes />
            </div>
        );
    }
}

export default App;
