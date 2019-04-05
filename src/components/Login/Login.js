import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import './Login.css';
import {PostData} from './../../services/PostData';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            redirect: false
        };

        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login(){
        if(this.state.email && this.state.password){
            PostData('rest-auth/login/', this.state).then((result) => {
                let responseJSON = result;
                if(responseJSON.key){
                    sessionStorage.setItem('irtoken', responseJSON.key);
                    this.setState({redirect: true});
                }
                else{
                    console.log('Login Error');
                }
            });
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state)
    }

    render() {

        if(this.state.redirect){
            return (<Redirect to={'/home'} />)
        }
        
        if(sessionStorage.getItem('irtoken')){
            return (<Redirect to={'/home'} />)
        }

        return (
            <main role="main">
                <section className="jumbotron text-center">
                    <div className="container">
                        <div className="form-signin">
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <label for="inputEmail" className="sr-only">Email address</label>
                            <input name="email" type="email" id="inputEmail" className="form-control" placeholder="Email address" onChange={this.onChange} required autoFocus />
                            <label for="inputPassword" className="sr-only">Password</label>
                            <input name="password" type="password" id="inputPassword" className="form-control" placeholder="Password" onChange={this.onChange} required />
                            <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.login}>Sign in</button>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Login;
