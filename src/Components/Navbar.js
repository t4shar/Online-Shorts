import React, { useState } from 'react'

import {
  Link
} from "react-router-dom";
const Navbar = (props)=> {
  const [state, setState] = useState({
    mode:'navbar navbar-expand-lg navbar-light bg-light',
    color:'black'
  })
  const  handleupmode = ()=> {
      if(state.mode === 'navbar navbar-expand-lg navbar-light bg-light'){
        // console.log("present in if")
        document.getElementById('changeIT').style.color='white'
        document.body.style.backgroundColor = '#3f3939'
         setState({mode:'navbar navbar-expand-lg navbar-dark bg-dark',color:'white'})
      }else{
        // console.log("present in else")
        document.getElementById('changeIT').style.color='black'
        document.body.style.backgroundColor = 'white'
         setState({mode:'navbar navbar-expand-lg navbar-light bg-light',color:'white'})
      }
  }
 
    return (
      <div>
        
        <nav className={state.mode}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Online-Shots</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/science">Sceince</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/health"> Health</Link></li>
              </ul>
              <div className="form-check form-switch" id="changeIT">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={ handleupmode} onChange={ props.togglemode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault"  >DarkMode</label>
            </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }

export default Navbar
