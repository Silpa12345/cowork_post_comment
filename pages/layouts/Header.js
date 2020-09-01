import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import Link from 'next/link';

const Div = styled.div`
     background: black;
`;

const Header = () => {
     return (
          <Div>
               <Nav activeKey="/home">
                    <Nav.Item>
                         <Nav.Link href="#">COWORK</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                         <Link href="../posts/[id]" as={`/posts/posts`}>
                              <a>Posts</a>
                         </Link>
                    </Nav.Item>
               </Nav>
          </Div>
     );
};

export default Header;
