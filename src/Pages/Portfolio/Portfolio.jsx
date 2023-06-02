import React, { useState } from 'react';
import "./Portfolio.scss";


const mockProjects = [
    {
        id: 1,
        title: 'Project Title 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tags: ['React', 'Javascript', 'HTML', 'CSS'],
        preview: "https://images.unsplash.com/photo-1685314627216-600b891897ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        startDate: 'Jan. 2023',
        endDate: 'July 2023'
    },
    {
        id: 2,
        title: 'project title 2',
        description: 'Project 2',
        tags: ['React', 'Javascript', 'HTML', 'CSS'],
        preview: "https://images.unsplash.com/photo-1682685797660-3d847763208e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        startDate: '2023-01-01',
        endDate: '2023-02-15'
    }
    ,
    {
        id: 3,
        title: 'project title 2',
        description: 'Project 2',
        tags: ['React', 'Javascript', 'HTML', 'CSS'],
        preview: "https://images.unsplash.com/photo-1682685797660-3d847763208e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        startDate: '2023-01-01',
        endDate: '2023-02-15'
    }
    ,
    {
        id: 4,
        title: 'project title 2',
        description: 'Project 2',
        tags: ['React', 'Javascript', 'HTML', 'CSS'],
        preview: "https://images.unsplash.com/photo-1682685797660-3d847763208e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        startDate: '2023-01-01',
        endDate: '2023-02-15'
    }
    ,
    {
        id: 5,
        title: 'project title 2',
        description: 'Project 2',
        tags: ['React', 'Javascript', 'HTML', 'CSS'],
        preview: "https://images.unsplash.com/photo-1682685797660-3d847763208e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        startDate: '2023-01-01',
        endDate: '2023-02-15'
    },

];

function Portfolio() {
    const [selectedProject, setSelectedProject] = useState(mockProjects[0]);

    const { id, title, description, tags, preview, startDate, endDate } = selectedProject

    return (
        <section id="portfolio">
            <div className="details">
                <div className="date_of_completion">{`${startDate} - ${endDate}`}</div>
                <div className="title">{title}</div>
                <p className="description">{description}</p>
                <div className="tag_grid">
                    {tags.map((tag, index) => { return <div key={index} className="tag_item">{tag}</div> })}
                </div>
            </div>
            <div className="preview">
                <img src={preview}></img>
            </div>
            <div className="position_tracker">
                {mockProjects.map(project => {
                    return <div key={project.id} className={`indicator ${selectedProject.id === project.id ? 'active' : ''}`}></div>
                })}
            </div>
            <div className={`carousel ${mockProjects.length < 4 ? "center-content" : ''}`}>
                {mockProjects.map(project => {
                    return <div key={project.id} className={`carousel_item ${selectedProject.id === project.id ? 'active' : ''}`} onClick={() => setSelectedProject(project)}>
                        <img src={project.preview} />
                    </div>
                })}
            </div>
        </section>
    );
}

export default Portfolio;
