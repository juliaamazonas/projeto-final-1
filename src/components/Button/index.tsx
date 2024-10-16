import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children?: string
  variant?: 'add' | 'more'
  className?: string
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'add',
  className
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        variant={variant}
        type="button"
        title={title}
        onClick={onClick}
        className={className}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink variant={variant} to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}
export default Button
