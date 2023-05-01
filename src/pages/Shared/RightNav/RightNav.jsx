import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bgImg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h3>Login With</h3>
            <Button className='mb-2 w-100' variant="outline-primary"><FaGoogle /> Login With Google </Button>
            <Button className='w-100' variant="outline-secondary"><FaGithub /> Login With Github</Button>
            <div className='my-4'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='position-relative'>
                <img src={bgImg} alt="" />
                <div className='text-center text-white position-absolute top-0 start-0 p-4 my-4'>
                    <h3 className='mb-4 fs-1'>Create an Amazing Newspaper</h3>
                    <p className='mb-5 fs-5'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button className='fs-3' variant="danger">Learn More</Button>
                </div>

            </div>
        </div>
    );
};

export default RightNav;