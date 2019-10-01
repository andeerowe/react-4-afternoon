import React, { Component } from 'react';
import axios from 'axios'
// import {HashRouter} from 'react-router-dom'


export default class Student extends Component {
  constructor() {
    super()

    this.state = {
      studentInfo: {},
      goBack: function (){
        window.history.back()
      }
    }

  }

  componentDidMount (){
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`)
    .then(res => {
      this.setState({
        studentInfo: res.data
      })
    })
    .catch(err => alert('Fix your code, lady'))
  }

  goBack (){
    window.history.back()
  }

  render() {
    // console.log(HashRouter)
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>{this.state.studentInfo.first_name}{this.state.studentInfo.last_name}</h1>
        <h3>Grade:{this.state.studentInfo.grade}</h3>
        <h3>Email:{this.state.studentInfo.email}</h3>
        <button onClick={this.state.goBack}>Back</button>
      </div>
    )
  }
}