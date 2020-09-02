import { Nav } from 'react-bootstrap';
import styled from 'styled-components';

const Div = styled.div``;

const NavBar = () => {
     return (
          <Div>
               <Nav>
                    <Nav.Item>
                         <Nav.Link href="../index">COWORK</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                         <Nav.Link href="../posts/post">Posts</Nav.Link>
                    </Nav.Item>
               </Nav>
          </Div>
     );
};

export default NavBar;
