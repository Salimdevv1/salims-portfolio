import React from 'react'

export default function SectionComp() {
  return (
    <div>
        <h2 style={{textAlign :"center" , marginTop :70 , textDecoration : "underline" , textUnderlineOffset : 10}}>
            Projects
    </h2>        
    <center><section class="skills" id="skills">        
    <div class="skills-container">
        <div class="bars">
            <div class="bars-box">
                <h3>Graphic Design</h3>
                <span>95%</span>
                <div class="light-bar"></div>
                <div class="percent-bar html-bar"></div>
            </div>
            <div class="bars-box">
                <h3>HTML</h3>
                <span>84%</span>
                <div class="light-bar"></div>
                <div class="percent-bar css-bar"></div>
            </div>
            <div class="bars-box">
                <h3>CSS</h3>
                <span>74%</span>
                <div class="light-bar"></div>
                <div class="percent-bar js-bar"></div>
            </div>
            <div class="bars-box">
                <h3>JavaScript</h3>
                <span>40%</span>
                <div class="light-bar"></div>
                <div class="percent-bar react-bar"></div>
            </div>
        </div>
    </div>
</section></center>
    </div>
  )
}
