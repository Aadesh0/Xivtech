import React, { useEffect, useRef, useState } from 'react'
import './Main.css'

import arrow from '../../images/Arrow-black.svg'
import SecImg from './SecImg'
import SecImg2 from './SecImg2'

function Section(props) {
    const section = useRef()
    const [change, setChange] = useState(false);
    const [ar, setAr] = useState(false);

    const arrowfunc = () => {
        if (ar === true) {
            setAr(false)
        } else {
            setAr(true)
        }
    }

    useEffect(() => {
        setChange(true)
    }, [])

    return (
        <div className={change ? 'section fade-in-up already-on-page' : 'section not-on-page'} ref={section}>
          
            <div className='secol1'>
                <div className='secol11'>
                  
                    <div className='secolbw'>
                        <p>{props.head}</p>
                    </div>

                    <div className='shownow'>
                        
                        <div className='secolsw'>
                            <p>{props.body}</p>
                        </div>

                       
                        <div className='secolbtn' onMouseOver={arrowfunc}>
                            <p>{props.btn}</p>
                            <img src={arrow} alt='' className={ar ? 'arrow arrow-move' : 'arrow'}></img>
                        </div>

                    </div>


                </div>


            </div>

            {props.check ?
                <SecImg2 img={props.img} />
                : <SecImg img={props.img} />
            }


          
            <div className='showlater'>
              
                <div className='secolsw'>
                    <p>{props.body}</p>
                </div>

            
                <div className='secolbtn' onMouseOver={arrowfunc}>
                    <p>{props.btn}</p>
                    <img src={arrow} alt='' className='arrow'></img>
                </div>
            </div>


        </div>
    )
}

export default Section