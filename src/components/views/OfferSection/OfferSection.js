import React from 'react';
import styled from 'styled-components';
import Card from 'src/components/molecules/Card/Card';
import { graphql, useStaticQuery } from 'gatsby';

const officeData = [
  { title: 'Biuro', info: 'od 1000 zł/msc', variant: 'big' },
  { title: 'Lorem\nipsum', info: 'od 500 zł/msc', variant: 'big' },
  { title: 'Biuro\nlorem', info: 'od 100 zł/h', variant: 'small' },
  { title: 'Biuro lorem ipsum\nLorem', info: 'od 100 zł/h', variant: 'small' },
];

const SectionOfferWrapper = styled.section`
  display: grid;
  grid-gap: 28px;
  margin: 16px auto;

  @media only screen and (min-width: 1920px) {
    margin: 140px 175px 0;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const OfferSection = () => {
  const data = useStaticQuery(query);
  const nodes = data.allFile.nodes;

  return (
    <SectionOfferWrapper name='offer-section'>
      {nodes.map((node, i) => (
        <Card
          key={i}
          variant={officeData[i].variant}
          title={officeData[i].title}
          info={officeData[i].info}
          image={node.childrenImageSharp[0].gatsbyImageData}
        />
      ))}
    </SectionOfferWrapper>
  );
};

const query = graphql`
  {
    allFile(
      sort: { fields: name, order: ASC }
      filter: { name: { regex: "/^card/" } }
    ) {
      totalCount
      nodes {
        childrenImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default OfferSection;
