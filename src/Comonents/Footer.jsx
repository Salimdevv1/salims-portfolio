import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer style={{marginTop : 50 }}>
        <div style={{display :"flex" , justifyContent:"center" , gap :5}}>
            <box-icon name='copyright' type='solid' ></box-icon> 
            <p style={{fontWeight :"bold"}}> 2023</p>
            <p style={{fontWeight :"bold"}}>SalimDev | All Rights Reserved</p>
        </div>
        <div style={{display :"flex" , justifyContent :"center" , alignItems :"center" , }}>
            Made With 	&hearts; By <a href="https://www.instagram.com/slama.selim/" style={{marginLeft :5 , textDecoration :"none"}}>Me</a>
        </div>
        </footer>
    </div>
  )
}
