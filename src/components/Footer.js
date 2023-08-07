import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import RefreshLink from './RefreshLink';
const handleClick = () => {
  // Perform any additional actions if needed before refreshing the page
  window.location.reload();
};

function Footer() {
  return (
    <div className='footer-container bottom-0'>

      <div class='footer-links flex gap-16'>
        <div className='footer-link-wrapper flex gap-16'>
          <div className='text-white flex flex-col gap-3'>
            <a href='/about' >
              <h2 className='text-[#ff5f13]'>Бидний тухай</h2>
            </a>
            <a href='/activity'>Үйл ажиллагаа</a>
            <a href='/workdone'>Гүйцэтгэсэн ажил</a>
            <a href='/contact'>Холбоо барих</a>
          </div>
          <div className='text-white flex flex-col gap-3'>
            <a href='contact'>
              <h2 className='text-[#ff5f13]'>Холбоо барих</h2>
            </a>
            <a href='/contact'>Утас: (+976) 8888-8888</a>
            <a href='/contact'>Email: autozam@gmail.com</a>
            <a href='/contact'>Факс: ---------</a>
          </div>
        </div>
        <div className='footer-link-wrapper flex gap-16'>
          <div className='text-white flex flex-col gap-3'>
            <a href='contact'>
              <h2 className='text-[#ff5f13]'>Хаяг</h2>
            </a>
            <a href='/contact'>Улаанбаатар хот</a>
            <a href='/contact'>Баян зүрх дүүрэг</a>
            <a href='/contact'>Somang Plaza</a>
            <a href='/contact'>6 давхар 601 тоот</a>
          </div>
          <div className='text-white flex flex-col gap-3'>
            <h2 className='text-[#ff5f13]'>Social Media</h2>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              Youtube
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap '>
          <div class='footer-logo'>
            <a href='/' className=' text-[#ff5f13] text-[24px]'>
              АвтоЗам ХХК
            </a>
          </div>
          <small class='website-rights'>Бүх эрх хуулиар хамгаалагдсан </small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div >
  );
}

export default Footer;
