import React from 'react';
import styled from 'styled-components';

import AnimatedBlob from '../../atoms/AnimatedBlob';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  max-width: 2500px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  width: 70%;
  min-width: 990px;
  max-width: 2000px;
`;

const BlobContainer = styled.div`
  position: relative;
  transform: scale(1.3);
`;

const TextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding-left: 35vh;
`;

const Title = styled.h1`
  color: #F5ECEC;
  font-family: Crimson Pro;
  font-size: 180px;
  margin: 0;
`;

const Text = styled.p`
  color: #E6DADA;
  font-family: Crimson Pro;
  font-size: 20px;
  font-weight: 600;
  margin: -8px 0 0 -14vh;
  max-width: 740px;
`;

const Intro = () => {
  return (
    <Container>
      <TitleContainer>
        <BlobContainer>
          <AnimatedBlob />
        </BlobContainer>
        <TextContainer>
          <Title>ff record</Title>
          <Text>
            Cardiff based website development and design taken very unseriously,
            because the internet should be fun, right?
          </Text>
        </TextContainer>
      </TitleContainer>
    </Container>
  );
}

export default Intro;
