import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

type ButtonProps = {
  variant: 'add' | 'more'
}

export const ButtonContainer = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.variant === 'add' ? cores.secundaria : cores.principal};
  color: ${(props) =>
    props.variant === 'add' ? cores.principal : cores.secundaria};
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  padding: ${(props) => (props.variant === 'add' ? '8px 16px' : '4px 12px')};
  width: ${(props) => (props.variant === 'add' ? '300px' : '100px')};
  border: none;
  cursor: pointer;

  &.button-cart {
    width: 344px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ButtonLink = styled(Link)<ButtonProps>`
  display: inline-block;
  padding: ${(props) => (props.variant === 'add' ? '8px 16px' : '4px 12px')};
  margin-bottom: 8px;
  width: ${(props) => (props.variant === 'add' ? '300px' : '100px')};
  background-color: ${(props) =>
    props.variant === 'add' ? cores.secundaria : cores.principal};
  color: ${(props) =>
    props.variant === 'add' ? cores.principal : cores.secundaria};
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
`
