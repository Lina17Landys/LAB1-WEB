import React from 'react';
import './footer.css';

function Footer() {
    return (
       <footer>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>

           <section className='footer-content'>
                <div className='footer-column'>
                    <h1>WHO ARE WE</h1>
                    <p>Gamer Supps is the leader in gaming energy & nutrition.</p>
                    <p>contact@gamersupps.gg</p>
                </div>

                <div className='footer-column'>
                    <h1>Useful Links</h1>
                    <p>Why GG?</p>
                    <p>Reviews</p>
                    <p>Get In Touch</p>
                    <p>Military Discount</p>
                    <p>Shipping & Returns</p>
                </div>

                <div className='footer-column'>
                    <p>Our Ingredients</p>
                    <p>Partnerships</p>
                    <p>FAQ's</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>

                <div className='footer-column'>
                    <h1>IMPORTANT NOTICE</h1>
                    <p>*These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease.</p>
                </div>
           </section>


           <div className='image-container'>
                    <img className='imagen-judge' src='./src/img/judge-me.png' alt='Judge Me' />
                </div>       
                
                <div className='social-icons'>
                    <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-twitter'></i>
                    </a>
                    <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-instagram'></i>
                    </a>
                    <a href='https://www.youtube.com' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-youtube'></i>
                    </a>
                    <a href='https://www.tiktok.com' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-tiktok'></i>
                    </a>
                    <a href='https://www.snapchat.com' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-snapchat-ghost'></i>
                    </a>
                </div>

                
                </footer>
    );
}

export default Footer;
