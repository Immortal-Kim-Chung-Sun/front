import React from "react";
import styled from "styled-components";

const Main = styled.footer`
  display: flex;
  width: 100%;
  height: 80px;
  margin-top: 50px;
  background-color: #1e1f21;
`;

const TextContainer = styled.div`
  display: flex;
  margin: auto;
`;

const Text = styled.span`
  font-size: 15px;
  color: white;
  margin: 10px;
`;

function Footer() {
  return (
    <Main>
      {/* <Text>제작자</Text> */}
      <TextContainer>
        <Text>류지훈</Text>
        <Text>고용빈</Text>
        <Text>박현우</Text>
        <Text>박지건</Text>
      </TextContainer>
    </Main>
  );
}

export default Footer;
