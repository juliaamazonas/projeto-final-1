class Pratos {
  description: string
  image: string
  title: string
  id: number

  constructor(id: number, description: string, image: string, title: string) {
    this.id = id
    this.description = description
    this.image = image
    this.title = title

    //o que está no this é a classe e após o igual é o construtor
  }
}

export default Pratos
