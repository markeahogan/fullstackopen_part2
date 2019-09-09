import React from 'react'
import ReactDOM from 'react-dom'

const Header = props =>
  <h1>{props.course}</h1>

const Total = ({parts}) => {
  const sum = parts.reduce((sum, x) => sum += x.exercises, 0);
  return (<p><strong>total of {sum} exercises</strong></p>)
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
    const courses = [
        {
          name: 'Half Stack application development',
          id: 1,
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
            },
            {
              name: 'Redux',
              exercises: 11,
              id: 4
            }
          ]
        }, 
        {
          name: 'Node.js',
          id: 2,
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1
            },
            {
              name: 'Middlewares',
              exercises: 7,
              id: 2
            }
          ]
        }
      ]
    
    const courseElements = () => courses.map(x => <Course course={x} />);
    return (
        <div>
            {courseElements()}
        </div>
    )
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)