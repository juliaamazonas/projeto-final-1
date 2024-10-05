class Restaurantes {
  category: string
  description: string
  image: string
  infos: string[]
  title: string
  avaliacao: string
  destaque: string
  id: number

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    title: string,
    avaliacao: string,
    destaque: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.avaliacao = avaliacao
    this.destaque = destaque
    //o que está no this é a classe e após o igual é o construtor
  }
}

export default Restaurantes
