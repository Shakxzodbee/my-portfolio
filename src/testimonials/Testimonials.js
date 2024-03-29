
import "./testimonials.css"
import AVTR1 from '../assets/img/man15.jpg'
import AVTR2 from '../assets/img/man16.jpg'

// import Swiper core and required modules
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React, { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

const data = [
  {
  avatar:AVTR1,
  name:'Екатерина',
  review:`Здравствуйте, меня зовут Екатерина
  Я создал сайт вместе с Шахзодбеком и считаю, что проведенное время было интересным и полезным. производительность отличная )`
  },
  {
    avatar:AVTR2,
    name:'Коля',
    review:`Привет
    Мое личное мнение таково, что сайт легко и идеально создается с использованием React.js.`
  },

]
const Testimonials = () => {
  useEffect(() => {
    AOS.init();
  })
  return (
    <section id='testimonials'>
        <h5   data-aos="fade-up" data-aos-duration="1000">Review feom clients</h5>
        <h2  data-aos="fade-up" data-aos-duration="1000">Testimonials</h2>

        <Swiper  data-aos="fade-up" data-aos-duration="1000" className="container testimonials_container" modules={[ Pagination]} spaceBetween={40} slidesPerView={1} pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review} , index) =>{
            return(
              <SwiperSlide key={index} className="testimonials">
              <div className="client_avatar">
               <img src={avatar} alt="_securety" />
               
              </div>
              <h5 className='client_name'>{name}</h5>
               <small className='_review'>
                {review}
               </small>
            </SwiperSlide>
         
            )
          })
        }
        </Swiper>
    </section>
  )
}

export default Testimonials