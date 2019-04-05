import React, { Component } from 'react';
import './Navigation.css';
import * as Icon from 'react-feather';


class Navigation extends Component {

    render() {

        return (
            <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                <div class="sidebar-sticky">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link active" href="/home">
                            <Icon.Home size={16} />
                            Dashboard <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/history">
                            <Icon.TrendingUp size={16} />
                            History
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/albums">
                            <Icon.Layers size={16} />
                            Albums
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/tracks">
                            <Icon.Activity size={16} />
                            Tracks
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;
