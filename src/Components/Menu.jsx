import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Menu = () => {
    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/home">UserApp</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/usuarios">Usuarios</Nav.Link>
                        <Nav.Link href="/contato">Contato</Nav.Link>
                    </Nav>
                    <Button className="justify-content-end" variant="link" type='Submit'>
                        <Link to={'/login'}>
                            Login
                        </Link>
                    </Button>
                </Container>
            </Navbar>
        </div>
    )
}
