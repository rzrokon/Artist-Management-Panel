import React, { Component } from 'react';
import './NotFound.css';

class NotFound extends Component {
    render() {
        return (
            <main role="main">
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">404 - Nothing Found</h1>
                        <p className="lead text-muted">It's beyond our imagination</p>
                        <p>
                            <a href="/login" className="btn btn-primary my-2">Signin</a>
                            <a href="/signup" className="btn btn-primary my-2">Signup</a>
                        </p>
                    </div>
                </section>
            </main>
        );
    }
}

export default NotFound;
