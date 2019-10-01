import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class ClassList extends Component {
  constructor() {
    super()

    this.state = {
      students: [],
      goBack: function (){
        window.history.back()
      }
    }
    
  }

  componentDidMount (){
    console.log(this.props.match.params.class)
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(res => {
      this.setState({
        students: res.data
      })
    })
    .catch(err => alert('An error occurred', err))
  }

  render() {
    const students = this.state.students.map((student, i) => (
      <Link to={`/student/${student.id}`} key={i}>
        <h3>{student.first_name}{student.last_name}</h3>
      </Link>
    ))
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
          {students}
          <button onClick={this.state.goBack}>Back</button>
      </div>
    )
  }
}