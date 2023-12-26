import React from 'react'
import image from '../assets/febs/Finance_bg2.png'
import './SocietyCard.css'
import logo from '../assets/febs/Febs_logo.png'
import secy from '../assets/febs/secy.png'
import g1 from '../assets/febs/g1.png'
import g2 from '../assets/febs/g2.png'
import g3 from '../assets/febs/g3.png'
import MemberCard from './MemberCard'

function SocietyCard() {
  return (
    <div>
      <div className="bg_img">
        <img id='bg' src={image} alt="" style={{ zIndex: "-10" }} />
        <div className="logo">
          <img id='logo' src={logo} alt="" style={{ zIndex: "1" }} />
          <p className="heading">Society of Finance, Economics and Business</p>
        </div>
      </div>

      <div className="about">
        <p className="about-heading">About Us</p>
        <p className="about-content">
          FEBS is the Finance, Economics, and Business Society at IIT Bhubaneswar, uniting individuals who share a passion for finance, economics, and business. The community is a diverse assembly of enthusiastic members driven by a common goal - promoting financial literacy within the IIT Bhubaneswar campus. Our core mission is to foster the development of financial literacy, economic thinking, and innovative business ideas. We strive to equip everyone with a deeper understanding of economic perspectives and empower them to manage personal finances effectively.
          <br /><br />
          Within our society, members connect through the exchange of diverse ideas, upholding economic principles, and cultivating awareness of financial issues, ultimately nurturing leadership skills. FEBS organizes engaging events, including lectures and talks by esteemed personalities and alumni. Our activities span virtual trading, stock wars, auction wars, stimulating quizzes, and compelling debates. Additionally, we manage an online platform featuring articles on various economic concepts, reviews, financial capacities, and business models.
          <br /><br />
          Looking ahead, our society plans to establish a comprehensive repository of fundamental concepts within our domains. We aspire to provide valuable roadmaps and career guidance for those interested in pursuing careers in supply chain management, product management, finance, consulting, investment banking, and more.
        </p>
        <div className="btn">
        <button className='site_btn'><a href="https://febs-iitbbs.org/" style={{textDecoration:"none"}}>Visit Our Site</a></button>
        </div>
        
      </div>

      <div className="team">
        <p className="team-heading">Meet the Team</p>
      </div>

      <div className="member-cards-content">

        <MemberCard img={secy} name="Kumar Saurabh" title="Secretary" linkIn="https://www.linkedin.com/in/india-kumar-saurabh/" />
        <MemberCard img={g1} name="Amitesh Kumar Singh" title="Governor" linkIn="https://www.linkedin.com/in/amitesh-kumar-singh-057170246/" />
        <MemberCard img={g2} name="Prisha Srinidi" title="Governor" linkIn="https://www.linkedin.com/in/prisha-srinidi-a7432723b/" />
        <MemberCard img={g3} name="Aditya Kshatriya" title="Governor" linkIn="https://www.linkedin.com/in/aditya-kshatriya-100225237/" />

      </div>
      <br></br>
    </div>
  )
}

export default SocietyCard
