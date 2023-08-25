import React from 'react';
import {BsGithub,BsInstagram} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href="https://www.instagram.com/Shakxzodbee" target="_blank "><BsInstagram /></a>
            <a href="https://github.com/Shakxzodbee" target="_blank "><BsGithub /></a>
            <a href="https://t.me/Shakxzodbee" target="_blank "><FaTelegramPlane /></a>
        </div>
    )
}

export default HeaderSocials