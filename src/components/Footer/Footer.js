import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
            <footer className="text-muted">
                <div className="container">
                    <p className="float-right">
                        <a href="#">Back to top</a>
                    </p>
                    <p>Copyright &copy; Imagine Entertainment Limited</p>
                </div>
            </footer>
        );
    }
}

export default Footer;
