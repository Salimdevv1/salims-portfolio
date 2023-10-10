import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Example({show , setShow , click , visible}) {

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

        {visible ? (
                 <Modal show={visible} onHide={handleClose}>
                 <Modal.Header closeButton onClick={click}>
                   <h2 style={{color  : "red"}}>Menu</h2>
                 </Modal.Header>
                 <Modal.Body>
                     <center><AnchorLink href='#about' style={{textDecoration :"none" , color : "black" , fontWeight :"bold" , fontSize : 20 }} onClick={click} >About</AnchorLink></center>
                     
                     <center><AnchorLink href='#hire'  style={{textDecoration :"none" , color : "black" , fontWeight :"bold" , fontSize : 20}} onClick={click}>Contact</AnchorLink></center>
                 </Modal.Body>
                 <Modal.Footer>
         
                   <button onClick={click} className='handleClose'>
                     Close
                   </button>
                 </Modal.Footer>
               </Modal>
        ) :null}
 
    </>
  );
}

export default Example;