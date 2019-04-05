import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {GetData} from '../../services/GetData';
import './Albums.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

class Albums extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: [],
            redirect: false
        };
    }

    componentWillMount(){
        if(sessionStorage.getItem('irtoken')){
            GetData('labelalbums ').then((result) => {
                this.setState({data: result});
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

                        <h4>Albums</h4>
                        <div class="table-responsive">
                            <table class="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Cover</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.map((album) => {
                                        return (
                                            <tr>
                                                <td>{album.id}</td>
                                                <td>{album.title}</td>
                                                <td><img src={album.art_thumbnail} /></td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                        <Footer />
                    </main>
                </div>
            </div>
        );
    }
}

export default Albums;
