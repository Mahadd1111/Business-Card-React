import React from 'react';
import ReactDOM from 'react-dom/client';
import profilePic from "./imgs/profile.jpg";
import "./styles.css"

function Profile(){
    return(
        <div id="profile">
            <img src={profilePic} className="profile-pic"></img>
        </div>
    );
}

function About(){
    return(
        <div className="about">
            <h1>Laura Smith</h1>
            <h3>Front end Developer</h3>
            <small>LauraSmith.website</small>
            <div className="contact">
                <button className="btn btn-lg btn-light"><i className="fa-solid fa-envelope"></i> Email</button>
                <button className="btn btn-lg btn-primary"><i className="fa-brands fa-linkedin"></i> LinkedIn</button>
            </div>
        </div>
    );
}

function Information(){
    return(
        <div className="info">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porta ante. Vestibulum eu mollis elit, et mattis felis. Donec lacinia nisl ac dolor imperdiet, vel venenatis justo ullamcorper. Phasellus convallis tempor odio, at sodales ex ultrices molestie.</p>
            <h1>Interests</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porta ante. Vestibulum eu mollis elit, et mattis felis. Donec lacinia nisl ac dolor imperdiet, vel venenatis justo ullamcorper. Phasellus convallis tempor odio, at sodales ex ultrices molestie.</p>
        </div>
    );
}

function Footer(){
    return(
        <div className="footer">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-github"></i>
        </div>
    );
}

function BusinessCard(){
    return(
        <div>
            <Profile/>
            <About/>
            <Information/>
            <Footer/>
        </div>
        
    );
}

const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(<BusinessCard/>);