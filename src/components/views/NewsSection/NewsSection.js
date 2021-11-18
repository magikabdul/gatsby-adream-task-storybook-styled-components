import React from 'react';
import styled from 'styled-components';
import PostCard from 'src/components/molecules/PostCard/PostCard';
import { StaticImage } from 'gatsby-plugin-image';

const news = [
  {
    image: (
      <StaticImage
        src='../../../assets/images/post-image-1.png'
        alt='news image'
        placeholder='blurred'
      />
    ),
    date: '01.01.2021',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: (
      <StaticImage
        src='../../../assets/images/post-image-2.png'
        alt='news image'
        placeholder='blurred'
      />
    ),
    date: '01.01.2021',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: (
      <StaticImage
        src='../../../assets/images/post-image-3.png'
        alt='news image'
        placeholder='blurred'
      />
    ),
    date: '01.01.2021',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const Container = styled.div`
  margin-top: 991px;
`;

const Title = styled.h1`
  text-align: center;
`;

const NewsBox = styled.div`
  margin: 103px 175px 0;
  display: grid;
  grid-gap: 110px;
  grid-template-columns: repeat(3, 1fr);
`;

const NewsSection = () => (
  <Container>
    <Title>Aktualności</Title>
    <NewsBox>
      {news.map((n, i) => (
        <PostCard
          key={i}
          image={n.image}
          date={n.date}
          description={n.description}
        />
      ))}
    </NewsBox>
  </Container>
);

export default NewsSection;
