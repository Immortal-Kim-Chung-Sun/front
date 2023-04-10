import styled from "styled-components";

export const Bar = styled.div`
  height: 100px;
  width: 100%;
  background-color: #1e1f21;

  text-align: center;

  color: white;
  font-size: 70px;
  font-weight: bolder;
  /* position: fixed;
  top: 0;
  right: 0; */

  position: sticky;
  top: 0;
`;

export const Explain = styled.div`
  background-color: #1e1f21;
  text-align: center;

  width: auto;
  height: auto;

  color: white;
  font-size: 25px;

  a {
    font-size: 35px;
  }
`;

export const Game = styled.div`
  width: 100%;
  display: flex;
`;

export const Rank = styled.div`
  width: 30%;
  height: 500px;

  background-color: beige;

  margin: 0px auto 0px auto;

  flex-wrap: wrap;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    height: auto;
    background: #c4c4c4;
    border-radius: 15px;
  }
  ::-webkit-scrollbar-track {
    background: #f4f4f4;
    border-radius: 15px;
  }
`;

export const RankContainer = styled.div`
  width: 100%;
  height: 18px;
  display: flex;

  margin-top: 5px;
  text-align: center;
`;

export const RankInfo = styled.div`
  width: 33%;
  height: 15px;
`;

export const RankText = styled.div`
  width: 100%;
  margin-top: 30px;
  font-size: 30px;
  color: white;
  text-align: center;
  margin-bottom: 5px;
`;
