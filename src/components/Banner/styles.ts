import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`

export const Titulo = styled.h2`
  font-size: 32px;
  color: ${cores.branca};
  font-weight: 900;
  position: relative;
  z-index: 2;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
  }
`
export const Categoria = styled.p`
  font-size: 32px;
  color: ${cores.branca};
  font-weight: 100;
  text-transform: capitalize;
  padding-top: 24px;
  padding-bottom: 160px;
  position: relative;
  z-index: 2;
`
