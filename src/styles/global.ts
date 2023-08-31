import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }

body {
  background-color: ${(props) => props.theme['gray-900']} ;
  color: ${(props) => props.theme['gray-300']};
  -webkit-font-smoothing: antialiased
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400;
}


::-webkit-scrollbar {
  width: 5px;               /* width of the entire scrollbar */
  height: 5px;
}

::-webkit-scrollbar-track {
  background: transparent;        /* color of the tracking area */
}

::-webkit-scrollbar-thumb {
  background-color: ${(props) =>
    props.theme['gray-500']};    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
}
`
