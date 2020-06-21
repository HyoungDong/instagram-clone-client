import reset from "styled-reset"
import { createGlobalStyle } from "styled-components"

export default createGlobalStyle `
${reset};
* {
    box-sizing:border-box;
  }
  body {
    background-color:#FAFAFA;
    color:#262626;
  } 
  input:focus{
    outline:none;
  }
`;