
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import MainNews from './Components/MainNews';
import LoadingBar from 'react-top-loading-bar'

export class App extends Component{
   state = {
    mode:'light',
    progress:0
  }
  
   togglemode = async()=>{
     if(  this.state.mode === 'light'){

        this.setState({mode:'dark'})
      }else{
         this.setState({mode:'light'})
      }
  }
   
  
  setProgress = (progress)=>{
     this.setState({progress:progress})
  }

  render(){
    return (
      <div>
        <Router>
      <Navbar togglemode={this.togglemode} />
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
      {/* <MainNews setProgress={ this.setProgress}  pageSize="6" country="in" category="Sports"/> */}
      <Switch>
          <Route exact path="/"><MainNews setProgress={ this.setProgress}  mode={  this.state.mode} key="General" pageSize="6" country="in" category="general"/></Route>
          <Route exact path="/business"><MainNews setProgress={ this.setProgress}  mode={  this.state.mode} key="Business" pageSize="6" country="in" category="business"/></Route>
          <Route exact path="/entertainment"><MainNews setProgress={ this.setProgress}  mode={  this.state.mode} key="Entertainment" pageSize="6" country="in" category="entertainment"/></Route>
          <Route exact path="/sports"><MainNews setProgress={ this.setProgress}  mode={  this.state.mode} key="Sports" pageSize="6" country="in" category="sports"/></Route>
          <Route exact path="/science"><MainNews setProgress={ this.setProgress}  mode={  this.state.mode} key="Sceince" pageSize="6" country="in" category="science"/></Route>
          <Route exact path="/technology"><MainNews setProgress={ this.setProgress}  mode={  this.state.mode} key="Technology" pageSize="6" country="in" category="technology"/></Route>
          <Route exact path="/health"><MainNews setProgress={ this.setProgress}  mode={  this.state.mode} key="Health" pageSize="6" country="in" category="health"/></Route>   
        </Switch>
        </Router>
      </div>
    )
  }
}

export default App
