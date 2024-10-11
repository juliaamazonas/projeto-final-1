import styled from 'styled-components'
import { cores } from '../../styles'

export const ModalFundo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1;

  &.visivel {
    display: flex;
  }
`

export const ModalContainer = styled.div`
  width: 1024px;
  height: 344px;
  background-color: ${cores.principal};
  color: ${cores.branca};
  padding: 32px;
  display: flex;
  position: relative;

  img {
    width: 280px;
    height: 280px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
  }
`

export const ModalInfo = styled.div`
  display: block;
  margin-left: 24px;

  h3 {
    font-size: 18px;
    line-height: 21px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    margin-bottom: 16px;
  }
`
