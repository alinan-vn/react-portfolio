import React from 'react';
import Footer from '../global/footer/index';

class Contact extends React.Component {
    render(){
        return (
            <section className="contact">
                <h2>Contact Me..</h2>

                <div className="contact__list">
                    <div className="contact__email">
                        {/* <i className="fas fa-envelope"></i> Email */}
                        <div className="text-secondary">jandrolinan@gmail.com</div>
                    </div>
                    <div className="contact__phone">
                        {/* <i className="fas fa-mobile-alt"></i> Phone */}
                        <div className="text-secondary">+1 (312) 888 - 1838</div>
                    </div>
                    <div className="contact__address">
                        {/* <i className="fas fa-city"></i> Local At */}
                        <div className="text-secondary">Chicago, IL</div>
                    </div>
                </div>

                <Footer />
            </section>
        )
    }
}

export default Contact