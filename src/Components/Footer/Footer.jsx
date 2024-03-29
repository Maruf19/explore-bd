import React, { useEffect } from 'react'
import './footer.css'
import video2 from '../../Assets/video2.mp4'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  //create a react hook to add a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className='footer'>

      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>Keep In Touch</small>
            <h2>Travel With Us</h2>
          </div>

         
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="/" className='logo flex'>
                <MdOutlineTravelExplore className='icon' />  Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
            Legally, we cannot advise on policy-specific details. You will need to direct all questions and clarifications to the insurance plan directly. This is not a recommendation to use RoamRight, Travel Safe, Travel Insured or any specific travel insurer over another. We may receive a commission if you purchase a travel insurance policy through our links at no additional cost to you. 
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiOutlineInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* group 01 */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                Our Agency
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Payment
              </li>
            </div>

            {/* group 02 */}
            <div data-aos="fade-up" data-aos-duration="6000" className="linkGroup">
              <span className="groupTitle">
                Partners
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                RentCars
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Home Stay
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                TripAdvisor
              </li>
            </div>

            {/* group 03 */}
            <div data-aos="fade-up" data-aos-duration="9000" className="linkGroup">
              <span className="groupTitle">
                Last Minute
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                London
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                California
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Indonesia
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Europe
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small> &#169; Copyright Reserved by Travel_BD</small>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Footer