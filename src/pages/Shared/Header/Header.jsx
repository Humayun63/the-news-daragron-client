import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container,  } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


const Header = () => {
    
    return (
        <Container className='my-4'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-dark bg-opacity-25 rounded-2 my-4 p-2'>
                <Button variant="danger">Latest</Button>
                <Marquee pauseOnHover speed={50} className='text-danger'>
                    I can be a React component, multiple React components, or just some text.... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, odit! ...
                </Marquee>
            </div>
           
        </Container>
    );
};

export default Header;