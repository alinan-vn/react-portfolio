import React from 'react';
import Footer from '../global/footer/index';

class About extends React.Component{
    render(){
        return (
            <section className='about'>
                <div className='about__bio-image'>
                    <div className='about__bio'>
                        <h2 className='text-secondary'>BIO</h2>
                        <p>Lead Software Developer, graduate of Flatiron School’s Software Engineering program, working on fullstack applications built on React, Rails, and Wordpress.Project and people manager, collaborating with UX/UI Design team on ethical and accessibility practices. </p>
                        <p>Studying guitar, piano, and drums made me disciplined in learning and practicing skills. Composing music within a band honed my communication and team building skills. Cross country running has proved that maintenance is just as important as creating.</p>
                    </div>
                </div>

                <div className='jobs'>
                    <div className='jobs__job'>
                        <h2 className='text-secondary'>2020 - Current</h2>
                        <h3>City of Wind Design</h3>
                        <h6>Software Developer</h6>
                        <p>The Software Lead for In House projects.</p>
                        <p>Currently in the beta test stage of launching the official website. Frontend: React, Backend: Wordpress </p>
                        <p>Currently in the ideate and backend stage of our first e-commerce website! Frontend: React (with Redux), Backend: Ruby on Rails </p>
                    </div>
                    <div className='jobs__job'>
                        <h2 className='text-secondary'>2019 - Current</h2>
                        <h3>Software Engineer</h3>
                        <h6>Full Stack Developer</h6>
                        <p>Flatiron School Grad! Experienced in React.js and Ruby on Rails. Also knowledgeable in HTML and CSS. Has also used Semantic UI, Bulma, and Sass.</p>
                    </div>
                    <div className='jobs__job'>
                        <h2 className='text-secondary'>2018 - 2019</h2>
                        <h3>Student at Harold Washington Community College</h3>
                        <h6>Associates in Science</h6>
                        <p>Fulfilled the rest of my credits required for an Associates Degree while exploring different career paths and deciding which one to take.</p>
                    </div>
                    <div className='jobs__job'>
                        <h2 className='text-secondary'>2016 - 2018</h2>
                        <h3>Attending University of Illinois at Urbana Champaign</h3>
                        <h6>Completed coursework towards Bachelors in Aerospace Engineering</h6>
                        <p>Took the general two year math and science classes required for an engineering major. I also took a few Aerospace classes but ultimately it wasn't for me.</p>
                    </div>
                </div>
                

                <Footer />
            </section>
        )
    }
}

export default About
