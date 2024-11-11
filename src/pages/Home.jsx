import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fcc760;
`;
const StLogoWrapper = styled.div`
  width: 25%;
  @media (max-width: 1100px) {
    width: 40%;
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
        <StLogo src="src/assets/imgs/Home_Logo.png" alt="no logo" />
      </StLogoWrapper>
      <br />
      <StToDexBtn onClick={onToDexClicked}>도감보기</StToDexBtn>
    </StMain>
  );
};

export default Home;
