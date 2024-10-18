import styled from 'styled-components'
import { cores } from '../../styles'

export const EntregaConainter = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  z-index: 9999;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  z-index: 9998;
`

export const EntregaAside = styled.aside`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 100vh;
  background-color: ${cores.principal};
  color: ${cores.secundaria};
  z-index: 9999;
`
export const ConteudoEntrega = styled.div`
  margin-top: 32px;
  margin-right: 8px;
  margin-left: 8px;
`

export const Form = styled.form`
  margin-top: 16px;
  margin-bottom: 24px;

  }

`

export const FormItens = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
  }

  input {
    height: 32px;
    border: none;
    margin: 8px 0;
    background-color: ${cores.secundaria};
  }

  .form-numbers {
    display: flex;
    justify-content: space-between;

    div {
      flex: 1;
      margin-right: 8px;

      &:last-child {
        margin-right: 0;
      }

      input {
        width: 100%;
      }
    }
  }
`
