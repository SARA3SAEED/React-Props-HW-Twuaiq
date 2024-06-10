import './Footer.css'
import React from 'react'

export default function Footer() {
  return (
    <footer className="footer-info" >
      <div className="footer-details">

      <div>
         <img src="https://tuwaiq.edu.sa/img/logos/logos2.svg"  />
      </div>


      <div className='div-h4'>
        <div className="social-icons">
          <a href="#"><img src="https://tuwaiq.edu.sa/icons/discord-icon.svg" className="icon-info" /></a>
          <a href="#"><img src="https://tuwaiq.edu.sa/icons/twitter-icon.svg" className="icon-info" /></a>
          <a href="#"><img src="https://tuwaiq.edu.sa/icons/youtube-icon.svg"  className="icon-info" /></a>
          <a href="#"><img src="https://tuwaiq.edu.sa/icons/snapchat-icon.svg"  className="icon-info" /></a>
          <a href="#"><img src="https://tuwaiq.edu.sa/icons/linkedin-icon.svg"  className="icon-info" /></a>
        </div>
        <h4>TuwaiqAcademy@</h4>
        </div>

        <nav className="policy">
          <a href="#"><h4>شارك كمدرب</h4></a>
          <a href="about.html"><h4>حول الأكاديمية</h4></a>
        </nav>

        <nav className="policy">
          <a href="#"><h4>الشروط والأحكام</h4></a>
          <a href="#"><h4>سياسة الخصوصية</h4></a>
        </nav>

   


        <div>
            <img src="https://tuwaiq.edu.sa/img/logos/Logos_White-04.png" />
        </div>
      </div>

      <h4>جميع الحقوق محفوظة لأكاديمية طويق 2024</h4>
    </footer>
  )
}
