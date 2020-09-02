import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';

import Layout from '../components/layout';

const PostStyle = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: flex-start;
     align-items: center;
     margin: 5px;
     padding: 10px;
     border: 2px solid black;
`;
const Content = styled(PostStyle)`
     padding: 2px;
     border: none;
`;

const postEndpoint = 'https://jsonplaceholder.typicode.com/posts';
const commentEndpoint = 'https://jsonplaceholder.typicode.com/comments';

export async function getStaticPaths() {
     const res = await fetch(postEndpoint);
     const posts = await res.json();

     const paths = posts.map((post) => ({
          params: { id: post.id.toString() },
     }));

     return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
     const res = await fetch(`${postEndpoint}/${params.id}`);
     const post = await res.json();

     return { props: { post } };
}

const CommentData = ({ post }) => {
     return (
          <Layout>
               <Head>
                    <title>{post.title}</title>
                    <meta charSet="utf-8" />
                    <meta
                         name="viewport"
                         content="initial-scale=1.0, width=device-width"
                    />
               </Head>
               <h4>Post</h4>
               <div>
                    {post && (
                         <PostStyle key={post.id}>
                              <Content>ID:{post.id}</Content>

                              <Content>UserID:{post.id}</Content>

                              <Content>
                                   Title:
                                   <Link
                                        href="../comments/[id]"
                                        as={`/comments/${post.id}`}
                                   >
                                        <a>{post.title}</a>
                                   </Link>
                              </Content>

                              <Content>Body:{post.body}</Content>
                         </PostStyle>
                    )}
               </div>
          </Layout>
     );
};

export default CommentData;
