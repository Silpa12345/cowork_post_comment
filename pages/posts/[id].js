import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import styled from 'styled-components';
import Link from 'next/link';
import Header from '../layouts/Header';
import fetcher from '../../lib/fetcher';
import { useRouter } from 'next/router';

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

// This also gets called at build time
export async function getStaticProps({ params }) {
     // params contains the post `id`.
     // If the route is like /posts/1, then params.id is 1
     const res = await fetch(`${postEndpoint}/${params.id}`);
     const post = await res.json();

     // Pass post data to the page via props
     return { props: { post } };
}

const CommentData = ({ post }) => {
     // const postId = 2;

     //const [comments, setComments] = useState();
     //const { data } = useSWR(commentEndpoint, fetcher);

     const router = useRouter();
     const { id } = router.query;

     return (
          <>
               <Header />
               <div>Post</div>
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
          </>
     );
};

export default CommentData;
