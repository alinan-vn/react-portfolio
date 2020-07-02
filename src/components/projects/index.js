import React from 'react';
import Footer from '../global/footer/index';

class Projects extends React.Component{
    render(){
        return (
            <section className='projects'>
                <div className='projects__bio-image'>
                    <h1 className='text-secondary'>My Projects</h1>
                </div>

                <div className='projects__items'>
                    <div className='projects__item'>
                        <img src={require('../../img/pawns-icon.png')} alt='My Project' />
                        <div className='projects__btn'>
                            <a href='https://github.com/alinan-vn/pawns-fe-react-js' className='projects__btn' target='_blank'>
                                {/* <i class="fab fa-github"></i>  */}
                                Github
                            </a>
                            <a href='https://www.youtube.com/watch?v=LKQC-0p4-E0' target='_blank' className='projects__btn'>
                                {/* <i class="fas fa-video"></i>  */}
                                Video Demo
                            </a>
                        </div>
                    </div>
                    <div className='projects__item'>
                        <img src={require('../../img/flatnote-icon.png')} alt='My Project' />
                        <div className='projects__btn'>
                            <a href='https://github.com/alinan-vn/flat-note-fe-react-redux' className='projects__btn' target='_blank'>
                                {/* <i class="fab fa-github"></i>  */}
                                Github
                            </a>
                            <a href='https://www.youtube.com/watch?v=2xSs0-aBx4U&t=1s' target='_blank' className='projects__btn'>
                                {/* <i class="fas fa-video"></i>  */}
                                Video Demo
                            </a>
                        </div>
                    </div>
                </div>

                <Footer />
            </section>
        )
    }
}

export default Projects
