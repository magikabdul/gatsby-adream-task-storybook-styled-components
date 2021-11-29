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

const Container = styled.div`
  margin: 140px 175px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 28px;
`;

const OfferSection = () => {
  const data = useStaticQuery(query);
  const nodes = data.allFile.nodes;
  console.log({ nodes });
  return (
    <Container name='offer-section'>
      {nodes.map((node, i) => (
        <Card
          key={i}
          variant={officeData[i].variant}
          title={officeData[i].title}
          info={officeData[i].info}
          image={node.childrenImageSharp[0].gatsbyImageData}
        />
      ))}
    </Container>
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
          gatsbyImageData(layout: FIXED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default OfferSection;
