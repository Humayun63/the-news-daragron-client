import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(result => console.log('done'))
        .catch(err => console.log(err))
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='mx-2 text-decoration-none text-secondary fw-bold' to="/">Home</Link>
                            <Link className='mx-2 text-decoration-none text-secondary fw-bold' to="/about">About</Link>
                            <Link className='mx-2 text-decoration-none text-secondary fw-bold' to="/career">Career</Link>

                        </Nav>
                        <Nav>
                            <span className='mx-2'>
                                <FaUserCircle style={{ fontSize: '2rem' }} />
                            </span>
                            {
                                !user ? <Link to='/login'><Button variant="secondary">Login</Button></Link> :
                                    <Button variant="secondary" onClick={handleLogOut}>Log Out</Button>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;