import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HomeLogo from "../assets/imgs/Home_Logo.png"

const StMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fcc760;
`;
const StLogoWrapper = styled.div`
  width: 380px;
  @media (max-width: 1100px) {
    width: 300px;
  }
  @media (max-width: 600px) {
    width: 250px;
  }
`;
const StLogo = styled.img`
  width: 100%;
`;
const StToDexBtn = styled.button`
  width: 120px;
  height: 40px;
  font-size: 17px;
  color: #2a2826;
  background-color: #e44727;
  &:hover {
    background-color: #e32b06;
  }
`;

const Home = () => {
  const navigateTo = useNavigate();
  const onToDexClicked = () => {
    navigateTo("/dex");
  };

  return (
    <StMain>
      <StLogoWrapper>
        <StLogo src={HomeLogo} alt="no logo" />
      </StLogoWrapper>
      <br />
      <StToDexBtn onClick={onToDexClicked}>도감보기</StToDexBtn>
    </StMain>
  );
};

export default Home;
