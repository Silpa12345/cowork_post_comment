import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import styled from 'styled-components';
import Link from 'next/link';
import Header from '../layouts/Header';
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

const PostData = (props, fetcherData) => {
     // const postId = 2;

     //const [comments, setComments] = useState();
     const { data } = useSWR(postEndpoint, fetcher);
     console.log('hi');

     return (
          <div>
               {data &&
                    data.map((post) => (
                         <PostStyle key={post.id}>
                              <Content>{post.id}</Content>
                              <Content>{post.userId}</Content>
                              <Content>
                                   <Link
                                        href="/comments/[id]"
                                        as={`/comments/${post.id}`}
                                   >
                                        <a>{post.title}</a>
                                   </Link>
                              </Content>
                              <Content>{post.body}</Content>
                         </PostStyle>
                    ))}
          </div>
     );
};

export default PostData;
