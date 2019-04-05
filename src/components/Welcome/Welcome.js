import React, { Component } from 'react';
import './Welcome.css';

class Welcome extends Component {
    render() {
        return (
            <main role="main">
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">Welcome</h1>
                        <p className="lead text-muted">The information you're going to inveiled it's beyond your imagination.</p>
                        <p>
                            <a href="/login" className="btn btn-primary my-2">Signin</a>
                        </p>
                    </div>
                </section>
            </main>
        );
    }
}

export default Welcome;
