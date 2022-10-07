
import './App.css';
import { Fragment } from 'react';

function App() {
  return (
 <Fragment>
 <div className="first_bac">    
    <nav> 
        <a href="index.html"><img src="public/st-clare-college-caloocan-bnw.png" alt="logo" className="nav_logo"/></a>
        <div className="nav_menu" id="navLinks">
            <i className="fa fa-times" onclick="hideMenu()"></i>
            <ul className="nav_link">
                <li><a className="links" href="#">ABOUT</a></li>
                <li><a className="links" href="#">PROGRAMS</a></li>
                <li><a className="links" href="#">ADMISSION</a></li>
                <li><a className="links" href="#">NEWS</a></li>
                <li><a className="links" id="link" href="#">CONTACT US</a></li> 
            </ul>
        </div> 
        <i className="fa fa-bars" onclick="showMenu()"></i>   
    </nav>  
  <div className="header">
        <h1>St. Clare College</h1>  
        <h3>CALOOCAN EST . 1986</h3>
        <a href="https://youtu.be/xDRjWOwhLs0">WATCH CAMPUS VIDEO TOUR</a>
    </div>
  </div>
  <div className="sec_bac">
    <div className="sec_title">
       <h3>Welcome to St. Clar,</h3>
       <h1>THE LEADING SCHOOL FOR PROFESSIONAL DEVELOPMENT.</h1>
       <h4>Our goal is to provide an atmosphere where engagement and passion for learbing thrives</h4>
    </div>
 </div>



 
 
</Fragment>
  );
}

export default App;
