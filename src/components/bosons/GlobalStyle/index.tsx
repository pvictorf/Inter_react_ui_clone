// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    vertical-align: baseline;
    list-style: none;
  }
  html, body {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  body {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
  }
`;
 
