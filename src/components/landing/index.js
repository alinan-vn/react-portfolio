import React from 'react';

class Landing extends React.Component{
    render(){
        return (
            <main>
                <section className='home'>
                    <h2>Hi! My Name is</h2>
                    <h1 className='home__name'>
                        Alejandro <span className='home__name--last'>Linan</span>
                    </h1>
                    <h2>
                        Web Developer, Designer, Programer
                    </h2>
                </section>
            </main>
        )
    }
}

export default Landing
