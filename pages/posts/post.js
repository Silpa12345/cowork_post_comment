import styled from 'styled-components';
import Link from 'next/link';
import Layout from '../components/layout';
import fetcher from '../../lib/fetcher';

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

export async function getStaticProps() {
     return {
          props: {
               data: await fetcher(postEndpoint),
          },
     };
}

const PostData = ({ data }) => {
     //const { data } = useSWR(postEndpoint, fetcher);

     return (
          <Layout>
               <h1>POSTS</h1>
               <div>
                    {data &&
                         data.map((post) => (
                              <PostStyle key={post.id}>
                                   <Content>{post.id}</Content>

                                   <Content>
                                        <Link
                                             href="../posts/[id]"
                                             as={`/posts/${post.id}`}
                                        >
                                             <a>{post.title}</a>
                                        </Link>
                                   </Content>
                              </PostStyle>
                         ))}
               </div>
          </Layout>
     );
};

export default PostData;
