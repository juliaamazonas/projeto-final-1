import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerFooter = styled.div`
  background-color: ${cores.secundaria};

  .container {
    display: block;
    text-align: center;
  }
`

export const ContainerLogo = styled.div`
  img {
    margin-bottom: 32px;
    margin-top: 40px;
  }
`

export const ContatosList = styled.ul`
  display: flex;
  justify-content: center;
`

export const ContatosItens = styled.li`
  padding: 4px;
`
export const Texto = styled.p`
  font-size: 10px;
  padding-bottom: 40px;
  margin-top: 80px;
`
