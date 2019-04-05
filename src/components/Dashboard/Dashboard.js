import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {GetData} from '../../services/GetData';
import './Dashboard.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import logo from './../../logo.svg';
import Chart from 'react-google-charts';


class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: [],
            redirect: false
        };

        this.logout = this.logout.bind(this);
    }

    componentWillMount(){
        if(sessionStorage.getItem('irtoken')){
            GetData('labeltoptracks').then((result) => {
                this.setState({data: result});
            });
        }
        else{
            this.setState({redirect: true});
        }
    }

    logout(){
        sessionStorage.setItem('irtoken', '');
        sessionStorage.clear();
        this.setState({redirect: true});
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

                        <h4>Streaming Statistics</h4>
                                                
                            <Chart
                                width={'600px'}
                                height={'400px'}
                                chartType="LineChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['x', 'dogs'],
                                    [0, 0],
                                    [1, 10],
                                    [2, 23],
                                    [3, 17],
                                    [4, 18],
                                    [5, 9],
                                    [6, 11],
                                    [7, 27],
                                    [8, 33],
                                    [9, 40],
                                    [10, 32],
                                    [11, 35],
                                ]}
                                options={{
                                    hAxis: {
                                    title: 'Time',
                                    },
                                    vAxis: {
                                    title: 'Popularity',
                                    },
                                }}
                                rootProps={{ 'data-testid': '1' }}
                                />

                        <p>&nbsp;</p>

                        <h4>Top Played Tracks</h4>
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
                                                <td>{track.track__id}</td>
                                                <td>{track.track__title}</td>
                                                <td>{track.track__album__title}</td>
                                                <td><img src={'http://45.114.84.83:9002/media/' + track.track__album__art} /></td>
                                                <td>{track.track__artist__title}</td>
                                                <td>{track.track_count}</td>
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

export default Dashboard;
