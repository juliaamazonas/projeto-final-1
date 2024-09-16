import styled from 'styled-components'
import { cores } from '../../styles'
import bannerImg from '../../assets/images/banner-italiana.png'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bannerImg});
`

export const Titulo = styled.h2`
  font-size: 32px;
  color: ${cores.branca};
  font-weight: 900;
`
export const Categoria = styled.p`
  font-size: 32px;
  color: ${cores.branca};
  font-weight: 100;
  padding-top: 24px;
  padding-bottom: 160px;
`
