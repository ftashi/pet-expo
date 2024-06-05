import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body {
    width: 100%;
    min-height: 100vh;
    background-color: white;
    color: black;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 8%;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
  position: relative;
  display: inline-block;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    width: 50%;
    height: 3px;
    background-color: #333;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    transition: background-color 0.3s ease;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #333;
    color: white;

    ${Title}::after {
      background-color: white;
    }
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px;
  transition: color 0.3s ease;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 18px;
  color: white;
  background-color: #333;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #555;
    transform: translateY(-3px);
  }
`;

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);

  const handleLearnMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Content>
          <Title>About Us</Title>
          <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Paragraph>
          <Paragraph>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula magna at eros facilisis, nec tincidunt nunc placerat. Integer pretium justo sit amet sapien posuere, eget dapibus arcu ullamcorper. Suspendisse potenti.
          </Paragraph>
          {showMore && (
            <Paragraph>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32
            </Paragraph>
          )}
          <Button onClick={handleLearnMoreClick}>
            {showMore ? 'Show Less' : 'Learn More'}
          </Button>
        </Content>
      </Container>
    </>
  );
};

export default AboutUs;
