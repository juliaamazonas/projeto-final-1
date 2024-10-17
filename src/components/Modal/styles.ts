import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

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
  z-index: 10;

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

  @media (max-width: ${breakpoints.desktop}) {
    width: 90%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    text-align: center;
    padding: 8px;
    height: 35%;
    display: block;
  }

  img {
    width: 280px;
    height: 280px;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 50%;
      max-height: 50%;
    }

    @media (max-width: ${breakpoints.tablet}) {
      width: 60%;
      height: auto;
    }
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

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 16px;

      line-height: 16px;
    }
  }

  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    margin-bottom: 16px;

    @media (max-width: ${breakpoints.tablet}) {
      line-height: 16px;
      margin-bottom: 8px;
    }
  }
`
