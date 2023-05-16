import React from 'react';
import logo from "../images/logo.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import "../App.css"

const Header = () => {
  return (
    <div className='headerDiv'>
        <div className="leftDiv">
            <div className="logo"><img src={logo} alt="logo"/></div>
            <div className="menu">
                <div className="menuItem">
                    <div>Courses</div>
                    <div><KeyboardArrowDownIcon/></div>
                </div>
                <div className="menuItem">
                    <div>Programs</div>
                    <div><KeyboardArrowDownIcon/></div>
                </div>
            </div>
            
        </div>
        <div className="rightDiv">
        <div className="menu">
                <div className="menuItem">
                    <div><SearchIcon/></div>
                </div>
                <div className="menuItem">
                    <div>Log in</div>
                </div>
                <div className="menuItem">
                    <button>JOIN NOW</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header