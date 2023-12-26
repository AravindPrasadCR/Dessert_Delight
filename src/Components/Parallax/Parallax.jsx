import React from 'react';
import { Parallax } from 'react-parallax';
import { Card, Button, Form, Modal } from 'react-bootstrap';
import { useState } from 'react';


import './Parallax.css'

import bg6 from './images/bg-6.jpg'
import bg20 from './images/d4.png'
import home from './images/bg-9.jpg'
import m1 from './images/menu1.jpg'
import card1 from './images/doughnuts.jpg'
import card2 from './images/muffins.jpg'
import card3 from './images/macrons.jpg'
import card4 from './images/pastries.jpg'

function App() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div >
            <div className='about' id='about' style={{textAlign: 'center', margin: '100px 0'}}>
                <Parallax style={{height: '400px', maxwidth: '100%', margin: '150px 0'}} bgImage={home} strength={500} >
                    <div className='about-content' style={{height: 500, width: '500px', fontSize: '20px', margin: '85px 0 0 525px'}}>

                        <p style={{ fontSize: '30px', color: 'rgb(110, 106, 102)', margin: '15px 0 10px 15px', fontFamily: 'Sevillana, cursive' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptate quod. Soluta deserunt necessitatibus excepturi eaque, explicabo</p>
                    </div>
                </Parallax>
            </div>

            <div style={{margin: '200px 50px', overflowX: 'hidden'}} className='items mb-5'>
                <h1 className='text-center'>SPECIAL DESSERTS FOR YOU</h1>
                <div className='mt-5 d-flex justify-content-between w-100'>
                    {/* card1 */}
                    <Card className='cards' style={{width: '310px', height: '25rem'}}>
                        <Card.Img style={{height: '240px', padding: '10px'}} variant="top" src={card1} />
                        <Card.Body>
                            <Card.Title className=' text-center fw-bold'><h3>Doughnuts</h3></Card.Title>
                            <Card.Text className='mt-1 text-center '>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores, laborum porro.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {/* card2 */}
                    <Card className='cards' style={{width: '310px'}}>
                        <Card.Img style={{height: '240px', padding: '10px'}} variant="top" src={card2} />
                        <Card.Body>
                            <Card.Title className=' text-center fw-bold'><h3>Muffins</h3></Card.Title>
                            <Card.Text className='mt-1 text-center'>
                                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores, laborum porro.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {/* card3 */}
                    <Card className='cards' style={{width: '310px'}}>
                        <Card.Img style={{height: '240px', padding: '10px'}} variant="top" src={card3} />
                        <Card.Body>
                            <Card.Title className=' text-center fw-bold'><h3>Macrons</h3></Card.Title>
                            <Card.Text className='mt-1 text-center'>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores, laborum porro.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {/* card4 */}
                    <Card className='cards' style={{width: '310px'}}>
                        <Card.Img style={{height: '240px', padding: '10px'}} variant="top" src={card4} />
                        <Card.Body>
                            <Card.Title className=' text-center fw-bold'><h3>Pastries</h3></Card.Title>
                            <Card.Text className='mt-1 text-center'>
                                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores, laborum porro.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className='login' id='login'>
                <h1 style={{margin: '50px'}} className='p-5 text-center'>Get your Account</h1>
                <Parallax style={{height: '400px'}} bgImage={bg6} strength={300}>

                    <div style={{width: '400px', margin: '30px 250px'}} className=' pt-5'>
                        <Form className='text-center'>                                               <Form.Group className='mb-3' controlId="formBasicEmail">
                            <Form.Control style={{height: '50px'}} type="email" placeholder="Email / Phone number" />
                        </Form.Group>
                            <Form.Group className='mb-3' controlId="formBasicEmail">
                                <Form.Control style={{height: '50px'}} type="password" placeholder="Password" />
                            </Form.Group>
                            <Button style={{height: '50px', width: '70px'}} variant="light" type="submit">
                                Login
                            </Button>
                            <p className='pt-3'>Not a customer yet?<Button variant="primary" onClick={handleShow}>
                                sign up
                            </Button></p>
                        </Form>
                    </div>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}>
                        <Modal.Header closeButton>

                        </Modal.Header>
                        <Modal.Body>
                            <div className=' p-2'>
                                <Form className='text-center'>
                                    <Form.Group className='mb-3' controlId="formBasicEmail">
                                        <Form.Control style={{height: '50px'}} type="text" placeholder="Name" />  </Form.Group>
                                    <Form.Group className='mb-3' controlId="formBasicEmail">
                                        <Form.Control style={{height: '50px'}} type="email" placeholder="Email / Phone number" />
                                    </Form.Group>
                                    <Form.Group className='mb-3' controlId="formBasicEmail">
                                        <Form.Control style={{height: '50px'}} type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Button className='text center' variant="secondary" onClick={handleClose}>
                                        Sign Up
                                    </Button>
                                </Form>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal>
                </Parallax>
            </div>

            <div className='menu' id='menu'>
                <h1 style={{ margin: '50px' }} className='p-5 text-center'>OUR MENU</h1>
                <div style={{ overflowX: 'hidden' }} className='d-flex'>
                    <img style={{height: '500px', width: '510px'}} src={m1} alt=""/>
                    <img style={{height: '500px', width: '510px'}} src={m1} alt=""/>
                    <img style={{height: '500px', width: '510px'}} src={m1} alt=""/>
                </div>
            </div>

            <div className='order' id='order'>
                <h1 style={{margin: '50px'}} className='p-5 text-center'>ORDER NOW</h1>
                <Parallax style={{height: '400px', background: 'rgb(236, 236, 229'}} strength={300} bgImage={bg20} >

                    <div style={{height: 500, width: '400px', margin: '40px 250px', textAlign: 'center'}}>
                        <div className='w-100 p-5 order-box'>
                            <Form>
                                <Form.Group className='mb-3' controlId="formBasicEmail">
                                    <Form.Control style={{height: '50px', borderRadius: '20px'}} type="text" placeholder="Fill the cart" />
                                </Form.Group>
                                <Form.Group className='mb-3' controlId="formBasicEmail">
                                    <Form.Control style={{height: '50px', borderRadius: '20px'}} type="email" placeholder="Choose delivery location" />
                                </Form.Group>
                                <Button style={{height: '50px', textAlign: 'center', borderRadius: '25px'}} variant="light" type="submit">
                                    Place Order
                                </Button>
                            </Form>
                        </div>
                    </div>
                </Parallax>
            </div>
        </div>
    );
}

export default App;