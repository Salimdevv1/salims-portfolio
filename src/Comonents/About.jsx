import React from 'react'

export default function About() {
  return (
    <div className='slide-left'>
        <div>
        <h2 style={{textAlign :"center" , marginTop :70 , textDecoration : "underline" , textUnderlineOffset : 10}}>
            About
        </h2>
        <div className='container informations'>
        <div className='introduction '>
            <p >Hello, I'm Salim, a 17-year-old web developer . 
                I have a passion for crafting immersive online experiences through code. 
                Proficient in languages like HTML, CSS, and JavaScript, I specialize in building dynamic 
                and user-friendly websites. What sets me apart is my proficiency in React, a powerful framework that enables 
                me to create responsive and interactive web applications that leave a lasting impression. I'm excited to showcase my skills 
                and share my journey in the world of web development through this portfolio.</p>
                
                <div class="info-box">
                    <i class='bx bxs-envelope'></i>
                    <a href="mailto:slam.salim2006@gmail.com" style={{textDecoration :"none"}}><span style={{marginLeft :5 , textDecoration : "underline" , textUnderlineOffset : 5 , fontWeight : "bold"}}>slam.salim2006@gmail.com</span></a>
                </div>
     </div>

        <div className='my-image'>
            <img src="https://miro.medium.com/v2/resize:fit:1360/1*zVnWJtyGOX_kUIDm6ccCfQ.gif" alt="" style={{width : 400 , borderRadius : 10}} />
        </div>
        </div>
        </div>
    </div>
  )
}
