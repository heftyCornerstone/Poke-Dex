import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        background-color: #fff5e3;
    }
    button {
        border: none;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
    }
`;

export default GlobalStyle;