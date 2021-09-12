import Flix from "./home-page/offers/Flix";

import {ImLocation} from 'react-icons/im';
import {MdEmail} from 'react-icons/md';
import {FaPhoneAlt,FaFacebook,FaLinkedin,FaTwitter} from 'react-icons/fa';
import classes from './Footer.module.css';


const iconProps = {size: '1rem',
                    color:'#f12d15',
                    style: {padding: '0 10px'}};


const Footer = () => {

    return (
        <Flix className={classes.footer}>
            <div>
                <ul>
                    <li><ImLocation {...iconProps}/>Some street 12345,floor 3</li>
                    <li><MdEmail {...iconProps} />info@info.com</li>
                    <li><FaPhoneAlt {...iconProps}/>+123456789 | +123456789 | +123456789</li>
                </ul>
                <Flix className={classes.social}>
                    <a href='#'><FaFacebook/></a>
                    <a href='#'><FaLinkedin/></a>
                    <a href='#'><FaTwitter/></a>
                </Flix>
            </div>

            <div>
            <h2 className={classes.logo}><span>S</span>oon</h2>
            <p className={classes.rights}>All Rights Reserved © 2019 - 2021 <span>SOON</span></p>
            </div>
        </Flix>
    )
};

export default Footer;