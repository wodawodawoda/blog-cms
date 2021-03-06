import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import { hot } from 'react-hot-loader';

// Import modules
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Slider from '../Slider/Slider';
import Selected from '../Selected/Selected';
import PostList from '../PostList/PostList'
import Footer from '../Footer/Footer'
import Post from '../Post/Post'

class App extends Component {
  render() {
    return (
      <div className="blog">
        <Header />
				<Navigation />
				<Route exact path={"/"} component={Slider}/>
				<Route exact path={"/"} component={Selected}/>
				<Route exact path={"/"} component={PostList}/>
				<Route path={'/categories/:category'} component={PostList}/>
				<Route path={'/posts/:post'} component={Post}/>
				<Footer />
      </div>
    );
  }
}

export default hot(module)(App);
