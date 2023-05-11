import React from 'react'
import Section from './Section'
import './Main.css'
import pic1 from '../../images/rp2.jpg'
import pic2 from '../../images/p1.png'
import pic3 from '../../images/p2.jpg'
import pic4 from '../../images/p3.jpg'

function Main() {
  const check = true;
  const noCheck = false;
  const head1 = 'AI + RPA is what we do';
  const body1 = 'Future-Proof your business. Drive efficiency, profitability and deliver on customer experience';
  const btn1 = 'AI + RPA Automation';

  const head2 = 'Make Bolder Choices';
  const body2 = 'Digital focused strategies to realize market-changing ideas';
  const btn2 = 'Build Better Apps';

  const head3 = 'Innovate with Speed';
  const body3 = 'Create higher quality software, deliver on customer expectations and business goals';
  const btn3 = 'DevOps';

  const head4 = 'Embrace Cloud';
  const body4 = 'With Cloud-First accelerate innovation and optimize performance';
  const btn4 = 'Cloud Services';
  return (
    <div className='main_container'>
      <div className='mainp'>
        <h1>Lets Colaborate</h1>
      </div>

      <div className='main'>
        <Section className="box" head={head1} body={body1} btn={btn1} img={pic1} check={noCheck} />
        <br/>
        <Section head={head2} body={body2} btn={btn2} img={pic2} check={noCheck} />
        <br/>
        <Section head={head3} body={body3} btn={btn3} img={pic3} check={noCheck} />
        <br/>
        <Section head={head4} body={body4} btn={btn4} img={pic4} check={check} />
      </div>

    </div>
  )
}

export default Main