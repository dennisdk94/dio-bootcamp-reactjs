import { createGlobalStyle } from 'styled-components';
import CovidImage from '../../assets/images/covid.jpg';

const globalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    display: flex;
    width: 100%;
    min-height: 100%;
  }

  #root {
    background: url(${CovidImage});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
  }

  .mb-2 {
    margin-bottom: 16px;
  }

  .pt-2 {
    padding-top: 16px;
  }

  .cursor {
    cursor: pointer;
  }
`

export default globalStyle;