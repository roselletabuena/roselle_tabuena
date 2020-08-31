import React from 'react'
import './Components.css'

const About = () => {
    return (
        <div className="container">
           
           <div className="row">
                <div className="col-md-6 text-center">
                    <img src="/me.jpg" style={{ width: '75%' }} className="mt-3 img-fluid rounded"></img>
                </div>

                <div className="col-md-6">
                <h1 className="section-text mt-5 border-gradient border-gradient-purple pl-3">ABOUT</h1>
                    <p className="text-justify mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className="text-justify mt-5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                </div>
           </div>
        </div>
    )
}

export default About