import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return(
    <div>
    <h1>custon App !</h1>
    </div>
  )
}



// const reactElement = {
//   type:'a',
//   props:{
//     href:'htrps://google.com',target:'_black'
//   },
//   children:'click me to visit google',
// }
const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google </a>
)
const anotherUser = "variable injection"
const reactElement = React.createElement (
  'a',
  {href:'https://google.com', target: "_blank"},
  'click me to visit Google ',
  anotherUser
)





ReactDOM.createRoot(document.getElementById('root')).
render(
    reactElement
)
