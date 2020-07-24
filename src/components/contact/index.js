import React from 'react';
import Footer from '../global/footer/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,  } from '@fortawesome/free-regular-svg-icons';
import { faMobile, faCity } from '@fortawesome/free-solid-svg-icons'

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
                        <FontAwesomeIcon className='contact__item' icon={faCity} />
                        <div className="contact__text">Chicago, IL</div>
                    </div>
                </div>

                <Footer />
            </section>
        )
    }
}

export default Contact