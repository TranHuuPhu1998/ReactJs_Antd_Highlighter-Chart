import React from 'react'
import {Link,Router} from 'react-router-dom'
function routerLink(props) {
  return (
    <div>
        <Router>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </Router>
    </div>
  )
}

export default routerLink

