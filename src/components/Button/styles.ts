import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  background-color: ${cores.secundaria};
  font-weight: 700;
  font-size: 14px;
  padding: 4px 80px;
  color: ${cores.principal};
`
export const ButtonLink = styled(Link)`
  background-color: ${cores.secundaria};
  font-weight: 700;
  font-size: 14px;
  padding: 4px 80px;
  color: ${cores.principal};
`
