import styled from "styled-components";

const StSelectionToggleBtn = styled.button`
  background-color: ${({ style }) => (style.btnColor) ? style.btnColor : '#ffc012'};
  width: ${({ style }) => (style.width) ? style.width : 'auto'};
  height: ${({ style }) => (style.height) ? style.height : 'auto'};
  font-size: ${({ style }) => (style.fontSize) ? style.fontSize : 'auto'};;
  &:hover{
     background-color: ${({ style }) => (style.hoverColor) ? style.hoverColor : '#f7ae02'};
  }
`;

const StyledBtn = ({ style, onClickHandler, children})=>{
    return (
        <StSelectionToggleBtn style={style} onClick={onClickHandler}>{children}</StSelectionToggleBtn>
    );
};

export default StyledBtn;