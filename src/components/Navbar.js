import React from 'react'
import Link from './Link'

function Navbar() {
    return (
        <nav className='py-1 position-fixed w-100 nav'>
            <div className='container'>
                
                <div className="text-center">
                    <img src='./logo.jpg' className="brand-img mt-3"/>
                </div>

                <ul className="list-inline  mt-3 text-center">
                    <Link title="Resume"  icon="file" link="#"/>
                    <Link title="About"  icon="address-card" link="#"/>
                    <Link title="Projects"  icon="tasks"  link="#"/>
                    <Link title="Contact"  icon="envelope-open" link="#"/>
                </ul>
                
            </div>
        </nav>
    )
}

export default Navbar