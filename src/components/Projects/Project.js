import React from 'react'

const Project = () => {

    const projects = ['sample 1', 'sample 2', 'sample 3', 'sample 4', 'sample 5','sample 1', 'sample 2', 'sample 3', 'sample 4', 'sample 5']

    const card = projects.map(project => (
            <div className="col-md-3 mb-3">
                <img src="https://via.placeholder.com/350x350"  alt={project} className="img-fluid" />
            </div>
        )
    )

    return (
        <div className="row mt-5 text-center">
           {card}
        </div>
    )
}

export default Project