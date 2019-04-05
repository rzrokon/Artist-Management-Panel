import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {GetData} from '../../services/GetData';
import './Tracks.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

class Tracks extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: [],
            count: 0,
            next: 0,
            prev: 0,
            numpages: 0,
            currentPage: 1,
            redirect: false
        };
    }

    componentWillMount(){
        if(sessionStorage.getItem('irtoken')){

            var getQueryString = function ( field, url ) {
                var href = url ? url : window.location.href;
                var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
                var string = reg.exec(href);
                return string ? string[1] : null;
            };

            if(getQueryString('page') > 0){
                this.setState({currentPage: getQueryString('page')});
            }

            GetData('labeltracks?page=' + getQueryString('page')).then((result) => {
                this.setState({data: result.data});
                this.setState({count: result.count});
                this.setState({numpages: result.numpages});
                this.setState({next: result.next});
                this.setState({prev: result.prev});
            });

        }
        else{
            this.setState({redirect: true});
        }
    }

    render() {

        if(this.state.redirect){
            return (<Redirect to={'/login'} />)
        }

        return (
            <div class="container-fluid">
                <div class="row">
                    <Navigation />

                    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">

                        <h4>Tracks</h4>
                        <div class="table-responsive">
                            <table class="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Album</th>
                                        <th>Album Cover</th>
                                        <th>Artist</th>
                                        <th>Times Played</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.map((track) => {
                                        return (
                                            <tr>
                                                <td>{track.id}</td>
                                                <td>{track.title}</td>
                                                <td>{track.album.title}</td>
                                                <td><img src={track.album_art_thumbnail} /></td>
                                                <td>{track.artist.title}</td>
                                                <td>{Math.floor(Math.random() * 100) + 1}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                        <hr />

                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class={ this.state.currentPage < 2 ? 'page-item disabled' : 'page-item' }><a class="page-link" href={'/tracks/?page=' + this.state.prev}>Previous</a></li>

                                <li class={ this.state.currentPage >= this.state.numpages ? 'page-item disabled' : 'page-item' }><a class="page-link" href={'/tracks/?page=' + this.state.next}>Next</a></li>
                                
                                <li class="page-item disabled"><a class="page-link">Current page {this.state.currentPage} of total {this.state.numpages} pages and {this.state.count} items.</a></li>
                            </ul>
                        </nav>

                        <Footer />
                    </main>
                </div>
            </div>
        );
    }
}

export default Tracks;
