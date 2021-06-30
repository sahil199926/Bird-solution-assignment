import React, {useState} from 'react'
import './DIO.css'
import astronaut from '../../assets/astronaut.png'
import bicoin from '../../assets/bitcoin.png'
import binance from '../../assets/binance.png'
import arrow from '../../assets/Arrow.png'
function DIO() {
    const [step,setStep]=useState('swap')
    return (
        <div className='main-container'>
            <div>
                <div >
                    <p>IAO: Initial Ape Offerings</p>
                    <p>Buy new tokens by staking NAUT-LP. </p>
                </div>
                <div  className='main-center-tab'>
                    <div  >
                        <p>“Who is the biggest boi”</p>
                        <p>Trading competition</p>
                        <p>Buy new tokens by staking NAUT-LP</p>
                    </div>
                    <div >
                        <div><img style={{ width: "60px" }} src={astronaut} /></div>
                        <div> <img style={{ width: "52px" }} src={astronaut} /></div>
                        <div> <img style={{ width: "44px" }} src={astronaut} /></div>
                    </div>
                </div>
                <div  className='main-center-button'>
                    <button  className={step=='swap'? 'button':""} onClick={()=>setStep('swap')}>Swap</button>
                    <button className={step=='liqidity'? 'button':""} onClick={()=>setStep('liqidity')} >Liquidity</button>
                    <button className={step=='Bridge'? 'button':""}  onClick={()=>setStep('Bridge')}>Bridge</button>
                </div>
                <div hidden={step=='liqidity'?false:true} className={step=='liqidity'?'main-footer':''}  >
                    <div>
                        <div hidden={true}>Liquidity</div>
                        <div>Add liquidity to receive LP tokens</div>
                        <div><button className='active-button'>Add Liquidity</button></div>
                    </div>
                    <hr></hr>
                    <div>
                        <div>Your Liquidity</div>
                        <div>Connect to a wallet to view your liquidity</div>
                        <div><p>Don't see a pool you joined? Import it.</p>
                            <p>Or, if you staked your APE-LP tokens in a farm,</p>
                            <p> unstake them to see them here.t to view your liquidity.</p>
                        </div>
                    </div>

                </div>
                <div hidden={step=='swap'? false:true} className={step=='swap'?'main-footer-2':''}>
                    <img className='left-img' style={{ height: '193px' }} src={binance} />
                    <div>
                        <div style={{display:'flex',columnGap:'69px'}}>
                            <p>Exchange</p>
                            <p style={{fontSize:"12px",lineHeight:"14px",color:"#2A76AD"}}>Trade tokens in an instant</p>
                        </div>
                        <div className='exchange-container' >
                            <div><p>From</p><div className='inputs'><input /><select id="cars">
                            <option value="volvo">BNB</option>
                                <option value="saab">INR</option>
                                <option value="opel">GBP</option>
                                <option value="audi">DRA</option>
                            </select></div></div>
                            <div style={{margin:"16px",paddingTop:"44px"}}><img src={arrow}/></div>
                            <div ><p>To</p><div className='inputs'><input /><select id="cars">
                                <option value="volvo">BNB</option>
                                <option value="saab">INR</option>
                                <option value="opel">GBP</option>
                                <option value="audi">DRA</option>
                            </select></div></div>
                        </div>
                        <div  style={{display:'flex',columnGap:'49px'}}>
                            <p>Slippage Tolerance</p><p>2.9%</p>
                        </div>

                        <div>

                        </div>
                    </div>
                    <img div className='right-img' style={{ height: '193px' }} src={bicoin} />
                </div>
                <div hidden={step=='Bridge'?false:true}>
                NOTHING HERE.....!!!!
                </div>
            </div>
        </div>
    )
}

export default DIO;
