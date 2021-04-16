import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    border: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    outline: none;
   
  }
  *,
  *:before,
  *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  :focus,
  :active {
    outline: none;
  }
  a:focus,
  a:active {
    outline: none;
  }
  
  nav,
  footer,
  header,
  aside {
    display: block;
  }
  
  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 100%;
    line-height: 1;
    font-size: 18px;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    
  }
  input,
  button,
  textarea {
    font-family: inherit;
  }
  
  input::-ms-clear {
    display: none;
  }
  button {
    cursor: pointer;
  }
  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  a,
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  ul li {
    list-style: none;
  }
  nav li{
    list-style: none;
  }
  img {
    vertical-align: top;
  }
  #root{
      margin: 0 auto;
  }
  h2{
      font-size:30px;
      color:white;
    
    }
`;
