import Head from 'next/head';
import NavBar from './NavBar';
const Layout = (props) => {
     return (
          <>
               <Head>
                    <title>Dummy App</title>
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                         name="viewport"
                         content="initial-scale=1.0, width=device-width"
                    />
                    <link
                         rel="stylesheet"
                         href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
                    />
               </Head>
               <NavBar />
               {props.children}
          </>
     );
};
export default Layout;
