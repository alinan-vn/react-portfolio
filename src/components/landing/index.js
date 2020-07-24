import React from 'react';
import Footer from '../global/footer/index';

class Landing extends React.Component{
    render(){
        return (
            <section className='home'>
                <h2>Hi! My Name is</h2>
                <h1 className='home__name'>
                    Alejandro <span className='home__name--last'>Linan</span>
                </h1>
                <h2>
                    Software Engineer, Fullstack Developer, Programmer
                </h2>

                <Footer />
            </section>
        )
    }
}

export default Landing
