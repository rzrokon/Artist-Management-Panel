import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import './Header.css';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            redirect: false
        };
        this.logout = this.logout.bind(this);
        this.SigninSignout = this.SigninSignout.bind(this);
    }

    logout(){
        sessionStorage.setItem('irtoken', '');
        sessionStorage.clear();
        this.setState({redirect: true});
    }

    SigninSignout(){
        if(sessionStorage.getItem('irtoken')){
            return(
                <button class="nav-link" onClick={this.logout}>Sign out</button>
            );
        }
        else{
            return(
                <a class="nav-link" href="/login">Sign in</a>
            );
        }
    }


    render() {
        
        if(this.state.redirect){
            return (<Redirect to={'/login'} />)
        }

        return (
            <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
                <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">{this.props.name}</a>
                {/* <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" /> */}
                <ul class="navbar-nav px-3">
                    <li class="nav-item text-nowrap">
                    {this.SigninSignout()}
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;
