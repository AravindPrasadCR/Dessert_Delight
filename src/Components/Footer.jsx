import React from 'react';

function App() {

    return (

        <div style={{margin:'50px 100px'}} className='w-90 '>
        <div className="footer-content d-flex justify-content-between gap-5">
            <div style={{width: '400px'}} className="title">
                <h3 className='d-flex'>Dessert Delight</h3>
                <p style={{textAlign: 'justify'}}>W7P4+5J6, P T Jacob Rd <br /> Cherthala,Alappuzha<br /> Kerala 68855</p> 
            </div>

            <div className="guides d-flex flex-column">
                <h3>Links</h3>
                <a style={{color: 'black'}} className='text-decoration-none' href="" >Services</a>
                <a style={{color: 'black'}} className='text-decoration-none' href="">Policy</a>
                <a style={{color: 'black'}} className='text-decoration-none' href="">Rewards</a>
                <a style={{color: 'black'}} className='text-decoration-none' href="">More</a>
            </div>
            <div style={{ color: 'black' }} className="icons d-flex flex-column">
                        <h3>Follow Us</h3>
                        <div className='d-flex gap-2 justify-content-between'>
                            <a href=""><i style={{height: '50px', color: 'black' }} class="fa-solid fa-envelope fa-2x"></i></a>
                            <a href=""><i style={{height: '50px', color: 'black' }} class="fa-brands fa-twitter fa-2x"></i></a>
                            <a href=""><i style={{height: '50px', color: 'black' }} class="fa-brands fa-github fa-2x"></i></a>
                            <a href=""><i style={{height: '50px', color: 'black' }} class="fa-brands fa-facebook fa-2x"></i></a>
                            <a href=""><i style={{height: '50px', color: 'black' }} class="fa-brands fa-instagram fa-2x"></i></a>
                        </div>
                    </div>

                    <div className="contact">
                        <h3>Contact Us</h3>
                        <div className="d-flex">
                            <input placeholder='Enter your mail' type="text" className='form-control' />
                            <button className='btn btn-dark ms-2'><i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>

                </div>
                <p className='pt-4 text-center'>Copyright &copy; 2023. Built with React</p>
            </div>

    )
}
export default App;