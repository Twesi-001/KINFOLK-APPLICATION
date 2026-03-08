import React from 'react'
import './Footer.css'
import Logo from '../../assets/treelogo.png'

function Footer() {
    return (
        <section className="footer">
            <div className="footer-content">
                <img src={Logo} alt="familyroots logo" className='footer-logo' />
                <p className='footer-text'>
                    Connect generations, preserve memories, and enable Ugandans to record, view, and preserve their lineage trees.

                </p>
            </div>
            <p className="copyright">Copyright &copy; {new Date().getFullYear()} Kinfolk...team. All Rights Reserved</p>
        </section>
    )
}

export default Footer
