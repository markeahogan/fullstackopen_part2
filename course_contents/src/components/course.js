import React from 'react'

const Header = props => <h1>{props.course}</h1>

const Total = ({parts}) => {
    const sum = parts.reduce((sum, x) => sum += x.exercises, 0);
    return (<p><strong>total of {sum} exercises</strong></p>)
}  

const Part = props => <p>{props.part.name} {props.part.exercises}</p>

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

export default Course