import styled from 'styled-components';
import NavBar from './components/NavBar';
import Layout from './components/layout';

const Welcome = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     padding: 50px;
     margin: 100px;
`;

export default function Home() {
     return (
          <Layout>
               <Welcome>
                    <h1>Welcome to COWORK</h1>
                    <p>Post your thoughts here!!!</p>
               </Welcome>
          </Layout>
     );
}
