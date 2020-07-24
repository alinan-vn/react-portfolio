import React from 'react';
import Footer from '../global/footer/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons'

class Contact extends React.Component {
    render(){
        return (
            <section className="contact">
                <h2>Contact Me..</h2>

                <div className="contact__list">
                    <div>
                        <FontAwesomeIcon className='contact__item' icon={faEnvelope} />
                        <div className="contact__text">jandrolinan@gmail.com</div>
                    </div>
                    <div>
                        <FontAwesomeIcon className='contact__item' icon={faMobile} />
                        <div className="contact__text">+1 (312) 888 - 1838</div>
                    </div>
                    <div>
                        <a href='https://www.linkedin.com/in/alejandro-linan-b4a146166/' target='_blank'>
                            <FontAwesomeIcon className='contact__item social-icon' icon={faLinkedin} />
                        </a>
                        <div className="contact__text">My LinkedIn!</div>
                    </div>
                    <div>
                        <a href='https://wordpress.com/home/alejandrolinan.home.blog' target='_blank'>
                            <FontAwesomeIcon className='contact__item social-icon' icon={faWordpress} />
                        </a>
                        <div className="contact__text">My Blog!</div>
                    </div>
                </div>

                <Footer />
            </section>
        )
    }
}

export default Contact