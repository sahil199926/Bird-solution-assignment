import React from 'react'
import './Footer.css'
import footImg from '../../assets/footerimg.png'
import twitter from '../../assets/twitter.png'
import telegram from '../../assets/telegrm.png'
import sq from '../../assets/sq.png'
import ww from '../../assets/ww.png'
import discord from '../../assets/discord.png'
function Footer() {
    return (
        <div className='footer-container' >
            <div>
                <img src={footImg}/>
                </div>
           <div className="footer-container-main">
               <div className="footer-container-main-1" >
                <div>
                <p className='footer-sub-heading'>Support</p>

                <p>Whitepaper</p>
                <p>Team</p>
                <p>News</p>
               </div>

               <div >
               <p className='footer-sub-heading'>About</p>
               <p>Docs</p>
               <p>FAQ</p>
               <p>Privacy</p>
               </div>
               </div>
               <div className="footer-container-main-2">
                   

                <div style={{fontStyle:"normal",fontWeight:"bold",fontSize:'26px',lineHeight:"31px"}}>
                Stay Updated
                </div>

                <div>
                <div ><img src={twitter}/></div>
                <div><img src={telegram}/></div>
                <div><img src={discord}/></div>
                <div><img src={sq}/></div>
                <div><img src={ww}/></div>
                </div>
                <div style={{fontStyle:'normal',fontWeight:"normal",fontSize:"24px",lineHeight:'29px'}}>
                Powered by the Binance Smart Chain
                </div>
               </div>
           </div>
        </div>
    )
}

export default Footer
