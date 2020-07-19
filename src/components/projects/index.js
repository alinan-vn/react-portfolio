import React from 'react';
import Footer from '../global/footer/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faChrome} from '@fortawesome/free-brands-svg-icons'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

{/* <FontAwesomeIcon onClick={() => this.goToSocial('https://www.youtube.com/watch?v=dQw4w9WgXcQ')} className='social-icons' icon={faFacebook} /> */}

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
                        <div className='projects__btns'>
                        <a href='https://pawns-chess.herokuapp.com/' className='projects__btn' target='_blank'>
                                <FontAwesomeIcon className='projects__icons' icon={faChrome} />
                            </a>
                            <a href='https://github.com/alinan-vn/pawns-fe-react-js' className='projects__btn' target='_blank'>
                                <FontAwesomeIcon className='projects__icons' icon={faGithub} />
                            </a>
                            <a href='https://www.youtube.com/watch?v=LKQC-0p4-E0' target='_blank' className='projects__btn'>
                                <FontAwesomeIcon className='projects__icons' icon={faYoutube} />
                            </a>
                        </div>
                    </div>
                    <div className='projects__item'>
                        <img src={require('../../img/flatnote-icon.png')} alt='My Project' />
                        <div className='projects__btns'>
                            <a href='https://github.com/alinan-vn/flat-note-fe-react-redux' className='projects__btn' target='_blank'>
                                <FontAwesomeIcon className='projects__icons' icon={faGithub} />
                            </a>
                            <a href='https://www.youtube.com/watch?v=2xSs0-aBx4U&t=1s' target='_blank' className='projects__btn'>
                                <FontAwesomeIcon className='projects__icons' icon={faYoutube} />
                            </a>
                        </div>
                    </div>
                    <div className='projects__item'>
                        <img src={require('../../img/music-scales.PNG')} alt='My Project' />
                        <div className='projects__btns'>
                        <a href='https://guitar-scales-v-network.herokuapp.com/' className='projects__btn' target='_blank'>
                                <FontAwesomeIcon className='projects__icons' icon={faChrome} />
                            </a>
                            <a href='https://github.com/alinan-vn/music-scales-practice' className='projects__btn' target='_blank'>
                                <FontAwesomeIcon className='projects__icons' icon={faGithub} />
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
