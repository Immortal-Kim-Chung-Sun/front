import React, { useEffect, useState } from "react";
import Unity, { UnityContext, useUnityContext } from "react-unity-webgl";
import styled from "styled-components";
import Footer from "./Footer";
import * as A from "./App.style";
import axios from "axios";
import config from "./config/config.json";

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #1e1f21;
`;

const unityContext = new UnityContext({
  loaderUrl: "Build/ImmortalKimChungSun.loader.js",
  dataUrl: "Build/ImmortalKimChungSun.data",
  frameworkUrl: "Build/ImmortalKimChungSun.framework.js",
  codeUrl: "Build/ImmortalKimChungSun.wasm",
});

const RankTitle = () => {
  return (
    <div style={{ position: "sticky", top: 0, backgroundColor: "beige" }}>
      <A.RankContainer>
        <A.RankInfo>순위</A.RankInfo>
        <A.RankInfo>닉네임</A.RankInfo>
        <A.RankInfo>점수</A.RankInfo>
      </A.RankContainer>
    </div>
  );
};

function App() {
  const [Rank, setRank] = useState([]);

  const MakeRank = Rank.map((Rank) => (
    <A.RankContainer>
      <A.RankInfo>{Rank.rank}</A.RankInfo>
      <A.RankInfo>{Rank.name}</A.RankInfo>
      <A.RankInfo>{Rank.point}</A.RankInfo>
    </A.RankContainer>
  ));

  useEffect(() => {
    setRank(
      Rank.sort(function (a, b) {
        return a.Score + b.Score;
      })
    );
  }, []);

  useEffect(() => {
    const time = setInterval(() => {
      axios
        .get(`${config.config}/all/rank`)
        .then((response) => setRank(response.data))
        .catch(() => setRank(null));
    }, 10000);
  }, []);

  return (
    <Container>
      <A.Bar>불멸의 김충선</A.Bar>

      <Unity
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "65%",
          aspectRatio: "8/5",
          margin: "50px auto",
        }}
        unityContext={unityContext}
      />

      <A.Explain>
        <a>
          게임 설명
          <br />
          <br />
        </a>
        일본인이었지만 조선을 사랑했던 김충선은 조선으로 넘어오지만 그곳은
        전쟁으로 혼란스러웠다.
        <br />
        이를 해결하기 위해 김충선은 직접 전쟁에 나서게 되는데...
      </A.Explain>

      <A.RankText>랭킹</A.RankText>
      <A.Rank>
        <RankTitle />
        {MakeRank}
      </A.Rank>

      <Footer />
    </Container>
  );
}

export default App;
