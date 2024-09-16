import { styled, createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  fundo: '#FFF8F2',
  principal: '#e66767',
  secundaria: '#FFEBD9'
}

export const GlobalCSS = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Roboto, sans-serif;
      list-style: none;
    }

    body {
      background-color: ${cores.fundo};
      color: ${cores.principal}
    }

    .container {
       max-width: 1024px;
      width: 100%;
      margin: 0 auto;
    }
`