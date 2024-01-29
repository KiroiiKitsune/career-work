import { createGlobalStyle } from 'styled-components';

import bg_app from './bg_app.jpg';

export const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  border: none;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  font-family: 'DM Sans', sans-serif;
  display: flex;
  flex-direction: column;
  
}

html,
body {
  font-size: 16px;
}

@media screen and (max-width: 1024px) {
  html,
  body {
    font-size: 14px;
  }
}

@media screen and (max-width: 768px) {
  html,
  body {
    font-size: 13px;
  }
}

#root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url('${bg_app}');
  background-size: cover;
  background-repeat: repeat;
  background-attachment: fixed;
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
  @media screen and (max-width: 1280px) {
    padding-left: calc(50% - 500px);
    padding-right: calc(50% - 500px);
  }
  @media screen and (max-width: 1200px) {
    padding-left: calc(50% - 450px);
    padding-right: calc(50% - 450px);
  }
  @media screen and (max-width: 1024px) {
    padding-left: calc(50% - 360px);
    padding-right: calc(50% - 360px);
  }
  @media screen and (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
}

a,
a:link,
a:visited {
  text-decoration: none;
}

a:hover {
  color: inherit;
  text-decoration: none;
}

aside,
nav,
footer,
header,
section,
main {
  display: block;
}

ul,
ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

img,
svg {
  max-width: 100%;
  height: auto;
}

address {
  font-style: normal;
}

/* Form */

input,
textarea,
button,
select {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background-color: transparent;
}

input::-ms-clear {
  display: none;
}

label {
  cursor: pointer;
}

legend {
  display: block;
}

button,
input[type='submit'] {
  display: inline-block;
  box-shadow: none;
  background-color: transparent;
  cursor: pointer;
}

input:focus,
input:active,
button:focus,
button:active {
  outline: none;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

:root {
  --white: #fff;
  --purple: #5c62ec;
  --id-word: #012169;
  --accent: #5c62ec;

  --nav-bg: #000;
  --nav-border: #777;
  --nav-text: #fff;

  --header-bg: #000;
  --header-text: #fff;

  --footer-bg: #2a2a2a;
  --footer-text: #d6d6d6;
}

  :root[data-theme='light'] {
  --page-bg: #dedede; 
  --page-bg-tab: #eee; 
  --text-color: #555; 
  --title-1: #555;
  --bg-card: #d5d5d5;
}

:root[data-theme='dark'] {
  --page-bg: #252526;
  --page-bg-tab: #333;
  --text-color: #ccc;
  --title-1: #ccc;
  --id-word: #c8102e;
  --bg-card: #081420;
}
`;