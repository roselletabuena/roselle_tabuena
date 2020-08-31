import React, { Component } from 'react'
import Projects from  '../../components/Projects/Projects'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Contact from '../../components/Contact'
import About from  '../../components/About'

class Layout extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Header />
                <About/>
                <Projects/>
                <Contact />
            </React.Fragment>
        )
    }

}

export default Layout