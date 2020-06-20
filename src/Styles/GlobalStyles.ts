import reset from "styled-reset"
import { createGlobalStyle } from "styled-components"

export default createGlobalStyle `
  ${reset};
  * {
      box-sizing:border-box;
  }
`