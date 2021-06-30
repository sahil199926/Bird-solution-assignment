import React from 'react'
import './Launch.css'
import astro from '../../assets/astro.png'
import graphic from '../../assets/graphic.png'
import banana from '../../assets/banana.png';
import shield from '../../assets/shield.png';
import Astronauthelmet from '../../assets/Astronaut-helmet.png';

import { useState } from 'react'
function Launch() {
    const [active,setActive]=useState('active');
    function Wallets({image}){
        return(
            <div className='wallets'>

            <div style={{ background: "#0E0232", borderRadius: '15px', width: "79px", height: "79px" }}>
                <img style={{ padding: "12px" }} src={image} />
            </div>
            <div className='center' style={{width:"43px"}}>Naut
                Pool</div>
            <div className='center'>
                <p className="zero-margin" style={{fontSize:"28px"}}>0.000</p>
                <p className='sub-head zero-margin'>Naut earned</p>
            </div>
            <div className='center'>
                <p className="zero-margin"  style={{fontSize:"16px"}}>126.51%</p>
                <p className='sub-head zero-margin'>Arp</p>
            </div>
            <div className='center'>
                <p className="zero-margin"  style={{fontSize:"16px"}}>0.00000</p>
                <p className='sub-head zero-margin'>Arp</p>
            </div>
            <div className='sub-head center' style={{fontSize:"15px",lineHeight:"18px"}}>Core</div>
            <div className='sub-head center' style={{fontSize:"15px",lineHeight:"18px"}}>Details</div>

            <button className='unlock-button button center'>Unlock Wallet</button>
        </div>
        )
    }
    return (
        <div className='launch-container'>
            <div>
                <div>
                    <img src={astro} />
                    <p>FIESTA</p>
                    <p style={{paddingLeft:"15px"}}>Stake NAUT to earn new tokens.
                        You can unstake at any time.
                        Rewards are calculated per block.
                    </p>
                </div>
                <div><img src={graphic} /></div>
            </div>
            <div>
                <div style={{width:"55%",margin:"auto",paddingBottom:'25px',paddingTop:"62px"}}><div className='active-inactive'><button style={{background:'none',borderRadius:'100px',border:'none',color:'white'}} onClick={()=>setActive('active')} className={ active=='active'?"button":""}>Active</button><button style={{background:'none',borderRadius:'100px',border:'none',color:'white'}} className={ active=='active'?"":"button"} onClick={()=>setActive('inActive')} >Inactivity</button></div></div>
                <div hidden={active=='active'?false:true}>
                <Wallets image={Astronauthelmet}/>
                <Wallets image={banana}/>
                <Wallets image={shield}/>
                <Wallets image={shield}/>
                </div>
                <div  hidden={active=='active'?true:false} >
                    NOTHING HERE.....!!!!
                </div>
            </div>
        </div>
    )
}

export default Launch
