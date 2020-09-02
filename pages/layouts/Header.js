import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import Link from 'next/link';

const Div = styled.div``;

const Header = () => {
     return (
          <Div>
               <Nav activeKey="/home" as="ul">
                    <Nav.Item>
                         <Nav.Link href="#">COWORK</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                         <Nav.Link href="../posts/post">Posts</Nav.Link>
                    </Nav.Item>
               </Nav>
          </Div>
     );
};

export default Header;
