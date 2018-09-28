import React from 'react'
import Link  from 'gatsby-link'
const Menu =  () => {
  return (
    <div style={{
        background:'rebeccapurple',
        marginBottom:'0'
    }}>
    <ul style={{
        listStyle:'none',
        display:'flex',
        justifyContent:'space-evently'
    }}>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/page-2/">Page2</Link></li>
       <li><Link to="/sometoughts">Some toughts</Link></li>
       
    </ul>
    </div>
   
  )
}
export default Menu;
