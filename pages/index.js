import Head from 'next/head';
//import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import Header from './layouts/Header';
//import Navigate from './layouts/Navigate';

//import PostData from './api/Postfetch';

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
          <div>
               <Head>
                    <title>Dummy App</title>
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                         name="viewport"
                         content="initial-scale=1.0, width=device-width"
                    />
               </Head>
               <Header />
               <Welcome>
                    <h1>Welcome to COWORK</h1>
                    <p>Post your thoughts here!!!</p>
               </Welcome>
          </div>
     );
}
