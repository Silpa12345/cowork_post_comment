import useSWR from 'swr';
import styled from 'styled-components';

import fetcher from '../../lib/fetcher';
import { useRouter } from 'next/router';
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
     const res = await fetch(commentEndpoint);
     const data = await res.json();

     return { props: { data } };
}

const CommentData = (props) => {
     const initialData = props.data;
     const { data } = useSWR(commentEndpoint, fetcher, { initialData });

     const router = useRouter();
     const { id } = router.query;

     return (
          <Layout>
               <h4>Comment</h4>
               <div>
                    {data &&
                         data
                              .filter((post) => post.postId == id)
                              .map((po) => (
                                   <PostStyle key={po.id}>
                                        <Content>CommentID:{po.id}</Content>

                                        <Content>PostID:{po.postId}</Content>

                                        <Content>Name:{po.name}</Content>

                                        <Content>Email:{po.email}</Content>

                                        <Content>
                                             <a>Content:{po.body}</a>
                                        </Content>
                                   </PostStyle>
                              ))}
               </div>
          </Layout>
     );
};

export default CommentData;
