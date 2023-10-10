import React from 'react'
import 'boxicons'

export default function HeroSection() {
  return (
    <div>
        <section className='hero container slide-left'>
            <div className='intro typewriter '>
                <h2 style={{fontSize : 42 }} >Hi there 👋, i'm <br />  <span style={{backgroundColor : "#EE0103" , borderRadius : 10 , color : "white" , padding : "0 10px" }}>Salim Slama</span>. </h2>    
                <br />
                <p style={{fontSize : "larger"}}>
                  Front-End Developer from Mahdia , Tunisia. I build websites for businesses to help stand out!
                </p>
                <br />
                <div className='social-media' style={{display :"flex" , alignItems:"center" , justifyContent : "flex-start" , gap :10 , marginBottom : 10}}>
                <a href="https://www.facebook.com/salim.slama.94"><box-icon type='logo' name='facebook-circle'></box-icon></a>
                <a href="https://www.instagram.com/slama.selim/"><box-icon type='logo' name='instagram'></box-icon></a>
                <a href="https://discord.com/channels/@me"><box-icon name='discord-alt' type='logo' ></box-icon></a>
                <a href="https://github.com/Salimdevv1"><box-icon name='github' type='logo' ></box-icon></a>
                <a href="https://www.linkedin.com/in/salim-slama-66b445281/"><box-icon type='logo' name='linkedin'></box-icon></a>
                </div>
               <a href="https://www.instagram.com/slama.selim/"><button className='hire-btn'>Contact</button>     </a>      
            </div>
            <center><div className='img'>
                <img src="/assets/hero-png.png" alt="" style={{borderRadius : 15 }}/>
            </div></center>
        </section>
    </div>
  )
}
