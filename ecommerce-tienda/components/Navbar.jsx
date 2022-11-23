import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsCart2 } from "react-icons/bs";


const CustomNavbar = ()=>{
    return(
        <header>
              <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Tienda</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Categoria 1</Nav.Link>
            <Nav.Link href="#features">Categoria 2</Nav.Link>
            <Nav.Link href="#pricing">Categoria 3</Nav.Link>
            
           
          </Nav>
         
        </Container>
      </Navbar>

      <BsCart2/>

      
      

      
    
   
        </header>
        

    )
};

export default CustomNavbar;