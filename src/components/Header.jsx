import React  from 'react';
import './Header.css'
import {Search} from '@material-ui/icons'
import {Avatar} from '@material-ui/core'
import{Link} from 'react-router-dom'

const Header = () => {



 return (
  <div className='header'>
   <Link>
   <img className='header_left' src='https://logos-world.net/wp-content/uploads/2020/07/Airbnb-Logo.png' alt='airbnb'/>
  </Link>
  <div className='header_center'>
 
   <input className='inputTag' type='text' ></input>
<div className='search'>
<Search/>

</div>
  </div>
  <div className='header_right'>
   <p className="header_word"> Airbnb Your Home</p>
   <div>
   <Avatar/>

   </div>
  </div>
  </div>
 );
};

export default Header;
