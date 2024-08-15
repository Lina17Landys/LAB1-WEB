import React from 'react';
import './footer.css';

function Footer() {
    return (
       <footer>

<section className='columnas'>
<div className='linea-1'>
<h1>WHO ARE WE</h1>
<p>Gamer Supps is the leader in gaming energy & nutrition.</p>
<p>contact@gamersupps.gg</p>
</div>

<div className='linea-2'>
    <h1>Useful Links</h1>
    <p>Why GG?</p>
    <p>Reviews</p>
    <p>Get In Touch</p>
    <p>Military Discount</p>
    <p>Shipping & Returns</p>
</div>

<div className='linea-3'>
    <p>Our Ingredients</p>
    <p>Partnerships</p>
    <p>FAQ's</p>
    <p>Privacy Policy</p>
    <p>Terms of Service</p>

</div>

<div className='linea-4'>
    <h1>IMPORTANT NOTICE</h1>
    <p>*These statements have not been evaluated by the Food and Drug Administration. 
        These products are not intended to diagnose, treat, cure, or prevent any disease.</p>
</div>
</section>
       </footer>
    );
}

export default Footer;
