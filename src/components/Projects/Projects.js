import React from 'react'
import Project from './Project'

function Projects() {


    const skills = ['All', 'node.js', 'Java', 'PHP', 'React', 'Fullstack']

    const button = skills.map(function(skill) {
        return <button className="btn btn-outline-primary btn-small btn-skills ml-2">{skill}</button>
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className="pl-3 mt-5 section-text">PROJECTS</h1>
                    <div className="button mt-3">
                    {button}
                    </div>
                </div>
            </div>
            <Project/>
        </div>
    )
}

export default Projects