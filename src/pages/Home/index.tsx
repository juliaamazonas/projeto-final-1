import Hero from '../../components/Hero'
import ProductsList from '../../components/RestaurantList'
import Restaurantes from '../../models/Restaurantes'
import japonesa from '../../assets/images/japonesa.png'
import italiana from '../../assets/images/italiana.png'

const catalogo: Restaurantes[] = [
  {
    id: 1,
    category: 'Japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: japonesa,
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    avaliacao: '4.9',
    destaque: ''
  },
  {
    id: 2,
    category: 'Japonesa',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    avaliacao: '4.6',
    destaque: ''
  },
  {
    id: 3,
    category: 'Japonesa',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    avaliacao: '4.6',
    destaque: ''
  },
  {
    id: 4,
    category: 'Japonesa',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    avaliacao: '4.6',
    destaque: ''
  },
  {
    id: 5,
    category: 'Japonesa',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    avaliacao: '4.6',
    destaque: ''
  },
  {
    id: 6,
    category: 'Japonesa',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    avaliacao: '4.6',
    destaque: ''
  }
]

const Home = () => (
  <>
    <Hero />
    <ProductsList restaurantes={catalogo} />
  </>
)

export default Home
