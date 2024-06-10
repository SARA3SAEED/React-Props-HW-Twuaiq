
import './Card.css'
import React from 'react'

export default function Card(props) {

  const getBorderColor = () => {
    const currentDate = new Date();
    const cardDate = new Date(props.date.split('-').reverse().join('-'));

    if (cardDate < currentDate) {
      return 'gray';
    }

    switch (props.title) {
      case 'معسكر':
        return '#4e3797'; 
      case 'لقاء':
        return '#8e367f';
      case 'برنامج':
        return 'green';
      default:
        return '#ddd';
    }
  };


  return (
    <div className='card' style={{ borderRightColor: getBorderColor() }}>
      <p>{props.title}</p>
      <h4> {props.topic}</h4>


      <div className='div-card-details'>
      
        <div className='div-btn'>
          <button herf='#'>التفاصيل</button>
        </div>


        <div className='icons'>
          <div className='icon1'> 
            <p>{props.duration}</p>
            <img src="https://tuwaiq.edu.sa/icons/weeks-icon.svg" />
            </div>
                
          <div className='icon2'> 
            <p>{props.location}</p>
            <img src="https://tuwaiq.edu.sa/icons/location_icon.svg" />
            </div>

          <div className='icon3'> 
            <p>{props.date} يبدأ</p>
            <img src="https://tuwaiq.edu.sa/icons/caleander2_icon.svg" />
            </div>


        </div>

      </div>
    </div>
  )
}
