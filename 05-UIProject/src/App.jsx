import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

const data = [
  {
    id:1,
    tag:"Satisfied",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, enim! Deserunt impedit labore molestiae corporis.",
    image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id:2,
    tag:"Satisfied",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, enim! Deserunt impedit labore molestiae corporis.",
    image:"https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id:3,
    tag:"Unsatisfied",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, enim! Deserunt impedit labore molestiae corporis.",
    image:"https://images.unsplash.com/photo-1635766854982-fc151c6e9278?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id:4,
    tag:"Unsatisfied",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, enim! Deserunt impedit labore molestiae corporis.",
    image:"https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id:5,
    tag:"Unsatisfied",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, enim! Deserunt impedit labore molestiae corporis.",
    image:"https://plus.unsplash.com/premium_photo-1727239592072-df93f25b7a6d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
]
function App() {
  return (
    <div> 
    <Section1 data = {data} />
    <Section2/>
    
    </div>
  )
}

export default App