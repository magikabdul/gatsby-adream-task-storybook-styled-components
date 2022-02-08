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
        style={{
          width: '100%',
          height: '100%',
        }}
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
        style={{
          width: '100%',
          height: '100%',
        }}
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
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    ),
    date: '01.01.2021',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const SectionNewsWrapper = styled.section`
  margin: 48px auto 0;
  
  @media only screen and (min-width: 1920px) {
    margin-top: 991px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.m};

  @media only screen and (min-width: 1920px) {
    font-size: ${({ theme }) => theme.font.size.xl};
  }
`;

const NewsBox = styled.div`
  display: grid;
  margin: 48px auto 0;

  @media only screen and (min-width: 1920px) {
    margin: 103px 175px 0;
    grid-gap: 110px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const NewsSection = () => (
  <SectionNewsWrapper>
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
  </SectionNewsWrapper>
);

export default NewsSection;
