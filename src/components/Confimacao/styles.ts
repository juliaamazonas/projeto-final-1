import styled from 'styled-components'
import { cores } from '../../styles'

export const ConfirmacaoCOntainer = styled.div`
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

export const ConfirmacaoAside = styled.aside`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 100vh;
  background-color: ${cores.principal};
  color: ${cores.secundaria};
  z-index: 9999;
`
export const ConfirmacaoConteudo = styled.div`
  margin-top: 32px;
  margin-right: 8px;
  margin-left: 8px;

  p {
    margin-top: 16px;
    margin-bottom: 24px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`
