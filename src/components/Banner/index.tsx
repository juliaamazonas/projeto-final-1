import { Categoria, Imagem, Overlay, Titulo } from './styles'

type BannerProps = {
  categoria: string
  titulo: string
  imagem: string
  styles?: React.CSSProperties
}

const Banner = ({ categoria, titulo, imagem }: BannerProps) => (
  <Imagem style={{ backgroundImage: `url(${imagem})` }}>
    <Overlay />
    <div className="container">
      <Categoria>{categoria}</Categoria>
      <Titulo>{titulo}</Titulo>
    </div>
  </Imagem>
)

export default Banner
