import React from 'react'
import ReactDOM from 'react-dom'

const Header = props =>
  <h1>{props.course}</h1>

const Total = props => {
  const parts = props.parts;
  return (<p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>)
}  

const Part = props =>
  <p>{props.part.name} {props.part.exercises}</p>

const Content = props => (
  <div>
      {props.parts.map((x)=> <Part part={x} />)}    
  </div>
)

const Course = ({course}) => {    
    return (<div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>)
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
            },
            {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
            },
            {
            name: 'State of a component',
            exercises: 14,
            id: 3
            }
        ]
    }
    
    return (
    <div>
        <Course course={course} />
    </div>
    )
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)