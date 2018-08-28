import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
class App extends Component {
  render() {
    return (
      <div className="App">
       <div>Age: <span>{this.props.age}</span> </div>
       <button onClick={this.props.onAgeUp}>AGE UP</button>
        <button onClick={this.props.onAgeDown}>AGE DOWN</button>
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
  return{
    age:state.age
  }
}
const mapDispachToProps=(dispatch)=>{
  return{
    onAgeUp:()=>dispatch ({type:'AGE_UP'}),
    onAgeDown:()=> dispatch({type:'AGE_DOWN'})
  }
}
export default connect(mapStateToProps,mapDispachToProps)(App);
