import React, { Component } from 'react';


export default class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="storybox">
                    <p className="title">My story</p>
                    <p className="story">I grew up playing Lacrosse and Football. I love to wakeboard, waterski and snowboard. I graduated high-school in 2014 and moved to Utah to attend school at Utah Valley University.</p>

                    <p className="story">At UVU I studied History, Physics and spent most of my time as an Aviation Science major. I left UVU after I kept getting the run around from UVU and FAA. On the suggestion from a friend I went to Helio Training to become a web developer. I have always had a fascination with computer science and I wanted to get the skills necessary to get a job as a developer.</p>

                    <p className="story">I absolutly love to read, which is what drove me to create this website for myself. I have always wanted to have an enormous library in my home and this will help me track which ones I have. My favorite books are The Lord of the Rings by J.R.R. Tolkien. And the Saga of the Forgotten Warrior by Larry Correia.</p>

                    <p className="story">Fantasy books are my favorite as they allow me to escape reality and get pulled into another world. J.R.R. Tolkien, Larry Correia, George R.R. Martin and J.K. Rowling are some of my favorites.</p>

                    <p className="story">In March of 2019 I moved from Salt Lake City to Virginia to take a job as a software developer at Yona-Brixtel. Here we use Angular 7+ with PrimeNg to build the FAA a new site from scratch. Here I have built on the skills I acquired as well as learned tons more. I feel my skills as a developer have grown much quicker and faster since arriving at Yona-Brixtel. I am excited to see where I land next.</p>

                    <p>Here are links to my:</p>

                        <div className="external-links">
                            <a href="https://github.com/davecalderwood"
                                target="_blank" 
                                rel="noopener noreferrer"><div className="github">GitHub</div>
                            </a>
                            <a href="https://www.linkedin.com/in/david-calderwood/" 
                                target="_blank" 
                                rel="noopener noreferrer"><div className="linkedin">Linkedin</div>
                            </a>
                        </div>
                </div>
            </div>
        );
    }
}