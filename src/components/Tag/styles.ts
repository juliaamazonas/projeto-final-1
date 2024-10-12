import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  height: 26px;
  display: inline-block;
  white-space: nowrap;
  background-color: ${cores.principal};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  color: ${cores.secundaria};
  font-weight: 700;
  text-transform: capitalize;
  padding: ${(props) => (props.size === 'big' ? '4px 6px' : '6px 8px')};
`
