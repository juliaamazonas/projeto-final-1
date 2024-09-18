import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  backgroud-color: ${cores.principal};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: 700;
  padding: ${(props) => (props.size === 'big' ? '4px 6px' : '6px 8px')};
`
