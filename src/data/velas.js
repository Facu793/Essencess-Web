// Importaciones de imágenes de velas
import ArbolNavidad from '../image/Velas/ArbolNavidad.jpeg'
import Arcoíris from '../image/Velas/Arcoíris.jpeg'
import BearBouquet from '../image/Velas/Bear & Bouquet.jpeg'
import Bear from '../image/Velas/Bear.jpeg'
import BearBouquet2 from '../image/Velas/BearBouquet.jpeg'
import Buddha from '../image/Velas/Buddha.jpeg'
import Butterfly from '../image/Velas/Butterfly.jpeg'
import Butterfly2 from '../image/Velas/Butterfly2.jpeg'
import Cafe from '../image/Velas/Cafe.jpeg'
import Cerveza from '../image/Velas/Cerveza.jpeg'
import Cloud from '../image/Velas/Cloud.jpeg'
import CuencoMargarita from '../image/Velas/Cuenco&Margarita.jpeg'
import CuencoMariposa from '../image/Velas/Cuenco&Mariposa.jpeg'
import Cuenco from '../image/Velas/Cuenco.jpeg'
import CuencoYMargarita from '../image/Velas/CuencoYMargarita.jpeg'
import Familia from '../image/Velas/Familia.jpeg'
import Globe from '../image/Velas/Globe .jpeg'
import GlobeHearts from '../image/Velas/GlobeHearts.jpeg'
import Gnomo from '../image/Velas/Gnomo.jpeg'
import Jirafa from '../image/Velas/Jirafa.jpeg'
import Lion from '../image/Velas/Lion.jpeg'
import Margarita from '../image/Velas/Margarita.jpeg'
import MasitasJengibre from '../image/Velas/MasitasJengibre.jpeg'
import Maze from '../image/Velas/Maze .jpeg'
import MiniGlobe from '../image/Velas/MiniGlobe.jpeg'
import MiniPeonias from '../image/Velas/MiniPeonias.jpeg'
import MiniRamo from '../image/Velas/MiniRamo.jpeg'
import Moon from '../image/Velas/Moon.jpeg'
import PeoniaWoodBase from '../image/Velas/Peonia&Wood Base .jpeg'
import Peonias from '../image/Velas/Peonias .jpeg'
import Pino from '../image/Velas/Pino.jpeg'
import RamoMargaritas from '../image/Velas/Ramo Margaritas.jpeg'
import RamoPeonias from '../image/Velas/Ramo Peonias .jpeg'
import RomanColumn from '../image/Velas/Roman Column.jpeg'
import RoseSphere from '../image/Velas/RoseSphere.jpeg'
import RowHearts from '../image/Velas/Row Hearts.jpeg'
import SmallBuddha from '../image/Velas/Small Buddha.jpeg'
import SmallBuddha2 from '../image/Velas/SmallBuddha2.jpeg'
import VelaTarjeton from '../image/Velas/Vela&Tarjetón.jpeg'
import VelasNocheBasic from '../image/Velas/VelasNocheBasic.jpeg'
import VelasNocheSpecials from '../image/Velas/VelasNocheSpecials.jpeg'
import VelonBasic from '../image/Velas/VelonBasic .jpeg'
import VelonClassic from '../image/Velas/VelonClassic .jpeg'
import VelonSpecials from '../image/Velas/VelonSpecials.jpeg'
import VelonTurned from '../image/Velas/VelonTurned.jpeg'

export const velas = [
  // Velas con Buda
  {
    id: 1,
    nombre: "Vela Buda",
    descripcion: "Vela aromática con diseño de Buda. Perfecta para crear un ambiente de paz y relajación en tu espacio.",
    precio: 32.99,
    imagen: Buddha
  },
  {
    id: 2,
    nombre: "Vela Buda Pequeño",
    descripcion: "Vela aromática con diseño de Buda pequeño. Ideal para espacios pequeños y crear un ambiente sereno.",
    precio: 24.99,
    imagen: SmallBuddha
  },
  {
    id: 3,
    nombre: "Vela Buda Pequeño 2",
    descripcion: "Vela aromática con diseño de Buda pequeño, variante 2. Perfecta para decorar y aromatizar.",
    precio: 24.99,
    imagen: SmallBuddha2
  },
  
  // Velas con Animales
  {
    id: 4,
    nombre: "Vela Oso",
    descripcion: "Adorable vela aromática con diseño de oso. Perfecta para decorar y crear un ambiente acogedor.",
    precio: 28.99,
    imagen: Bear
  },
  {
    id: 5,
    nombre: "Vela Oso con Ramo",
    descripcion: "Vela aromática con diseño de oso y ramo de flores. Ideal para regalos y decoración.",
    precio: 35.99,
    imagen: BearBouquet
  },
  {
    id: 6,
    nombre: "Vela Oso y Ramo",
    descripcion: "Vela aromática con diseño de oso sosteniendo un ramo. Perfecta para ocasiones especiales.",
    precio: 35.99,
    imagen: BearBouquet2
  },
  {
    id: 7,
    nombre: "Vela Mariposa",
    descripcion: "Elegante vela aromática con diseño de mariposa. Añade un toque delicado y natural a tu espacio.",
    precio: 29.99,
    imagen: Butterfly
  },
  {
    id: 8,
    nombre: "Vela Mariposa 2",
    descripcion: "Vela aromática con diseño de mariposa, variante 2. Perfecta para decorar espacios femeninos.",
    precio: 29.99,
    imagen: Butterfly2
  },
  {
    id: 9,
    nombre: "Vela Jirafa",
    descripcion: "Divertida vela aromática con diseño de jirafa. Ideal para decorar habitaciones infantiles.",
    precio: 27.99,
    imagen: Jirafa
  },
  {
    id: 10,
    nombre: "Vela León",
    descripcion: "Vela aromática con diseño de león. Perfecta para crear un ambiente fuerte y elegante.",
    precio: 30.99,
    imagen: Lion
  },
  {
    id: 11,
    nombre: "Vela Gnomo",
    descripcion: "Vela aromática con diseño de gnomo. Ideal para decorar y crear un ambiente mágico y acogedor.",
    precio: 26.99,
    imagen: Gnomo
  },
  
  // Velas con Flores
  {
    id: 12,
    nombre: "Vela Margarita",
    descripcion: "Delicada vela aromática con diseño de margarita. Perfecta para espacios frescos y naturales.",
    precio: 28.99,
    imagen: Margarita
  },
  {
    id: 13,
    nombre: "Vela Peonias",
    descripcion: "Elegante vela aromática con diseño de peonias. Añade sofisticación y elegancia a tu decoración.",
    precio: 32.99,
    imagen: Peonias
  },
  {
    id: 14,
    nombre: "Vela Mini Peonias",
    descripcion: "Pequeña vela aromática con diseño de peonias. Ideal para espacios pequeños y detalles decorativos.",
    precio: 22.99,
    imagen: MiniPeonias
  },
  {
    id: 15,
    nombre: "Vela Ramo de Margaritas",
    descripcion: "Vela aromática con diseño de ramo de margaritas. Perfecta para crear un ambiente fresco y natural.",
    precio: 34.99,
    imagen: RamoMargaritas
  },
  {
    id: 16,
    nombre: "Vela Ramo de Peonias",
    descripcion: "Vela aromática con diseño de ramo de peonias. Ideal para ocasiones especiales y regalos.",
    precio: 36.99,
    imagen: RamoPeonias
  },
  {
    id: 17,
    nombre: "Vela Mini Ramo",
    descripcion: "Pequeña vela aromática con diseño de ramo. Perfecta para decorar y aromatizar espacios pequeños.",
    precio: 23.99,
    imagen: MiniRamo
  },
  {
    id: 18,
    nombre: "Vela Cuenco con Margarita",
    descripcion: "Vela aromática en cuenco con diseño de margarita. Combinación elegante de forma y diseño.",
    precio: 31.99,
    imagen: CuencoMargarita
  },
  {
    id: 19,
    nombre: "Vela Cuenco con Mariposa",
    descripcion: "Vela aromática en cuenco con diseño de mariposa. Perfecta para decorar y crear ambiente.",
    precio: 31.99,
    imagen: CuencoMariposa
  },
  {
    id: 20,
    nombre: "Vela Cuenco y Margarita",
    descripcion: "Vela aromática en cuenco con margarita. Diseño natural y elegante para tu hogar.",
    precio: 31.99,
    imagen: CuencoYMargarita
  },
  {
    id: 21,
    nombre: "Vela Peonia con Base de Madera",
    descripcion: "Vela aromática con diseño de peonia y base de madera. Combinación natural y elegante.",
    precio: 38.99,
    imagen: PeoniaWoodBase
  },
  {
    id: 22,
    nombre: "Vela Esfera de Rosas",
    descripcion: "Vela aromática con diseño de esfera de rosas. Perfecta para crear un ambiente romántico.",
    precio: 33.99,
    imagen: RoseSphere
  },
  
  // Velas con Globos
  {
    id: 23,
    nombre: "Vela Globo",
    descripcion: "Vela aromática en forma de globo. Diseño moderno y minimalista para espacios contemporáneos.",
    precio: 27.99,
    imagen: Globe
  },
  {
    id: 24,
    nombre: "Vela Globo con Corazones",
    descripcion: "Vela aromática en forma de globo con diseño de corazones. Ideal para ocasiones románticas.",
    precio: 29.99,
    imagen: GlobeHearts
  },
  {
    id: 25,
    nombre: "Vela Mini Globo",
    descripcion: "Pequeña vela aromática en forma de globo. Perfecta para decorar y aromatizar espacios pequeños.",
    precio: 21.99,
    imagen: MiniGlobe
  },
  
  // Velas en Cuencos
  {
    id: 26,
    nombre: "Vela Cuenco",
    descripcion: "Vela aromática en cuenco. Diseño clásico y funcional, perfecta para cualquier espacio.",
    precio: 25.99,
    imagen: Cuenco
  },
  
  // Velas Temáticas
  {
    id: 27,
    nombre: "Vela Árbol de Navidad",
    descripcion: "Vela aromática con diseño de árbol de Navidad. Perfecta para decorar durante las fiestas navideñas.",
    precio: 30.99,
    imagen: ArbolNavidad
  },
  {
    id: 28,
    nombre: "Vela Arcoíris",
    descripcion: "Colorida vela aromática con diseño de arcoíris. Añade alegría y color a tu espacio.",
    precio: 28.99,
    imagen: Arcoíris
  },
  {
    id: 29,
    nombre: "Vela Café",
    descripcion: "Vela aromática con diseño de café. Perfecta para amantes del café y crear un ambiente acogedor.",
    precio: 27.99,
    imagen: Cafe
  },
  {
    id: 30,
    nombre: "Vela Cerveza",
    descripcion: "Vela aromática con diseño de cerveza. Ideal para espacios de entretenimiento y relajación.",
    precio: 27.99,
    imagen: Cerveza
  },
  {
    id: 31,
    nombre: "Vela Nube",
    descripcion: "Vela aromática con diseño de nube. Perfecta para crear un ambiente suave y relajante.",
    precio: 26.99,
    imagen: Cloud
  },
  {
    id: 32,
    nombre: "Vela Familia",
    descripcion: "Vela aromática con diseño familiar. Ideal para crear un ambiente cálido y acogedor en el hogar.",
    precio: 31.99,
    imagen: Familia
  },
  {
    id: 33,
    nombre: "Vela Galletas de Jengibre",
    descripcion: "Vela aromática con diseño de galletas de jengibre. Perfecta para la temporada navideña.",
    precio: 29.99,
    imagen: MasitasJengibre
  },
  {
    id: 34,
    nombre: "Vela Laberinto",
    descripcion: "Vela aromática con diseño de laberinto. Diseño único y moderno para decorar tu espacio.",
    precio: 28.99,
    imagen: Maze
  },
  {
    id: 35,
    nombre: "Vela Luna",
    descripcion: "Vela aromática con diseño de luna. Perfecta para crear un ambiente mágico y relajante.",
    precio: 29.99,
    imagen: Moon
  },
  {
    id: 36,
    nombre: "Vela Pino",
    descripcion: "Vela aromática con diseño de pino. Ideal para la temporada navideña y crear ambiente festivo.",
    precio: 30.99,
    imagen: Pino
  },
  {
    id: 37,
    nombre: "Vela Columna Romana",
    descripcion: "Vela aromática con diseño de columna romana. Añade elegancia clásica a tu decoración.",
    precio: 32.99,
    imagen: RomanColumn
  },
  {
    id: 38,
    nombre: "Vela Corazones en Fila",
    descripcion: "Vela aromática con diseño de corazones en fila. Perfecta para ocasiones románticas y especiales.",
    precio: 28.99,
    imagen: RowHearts
  },
  
  // Velas con Tarjetón
  {
    id: 39,
    nombre: "Vela con Tarjetón",
    descripcion: "Vela aromática con tarjetón personalizable. Ideal para regalos y ocasiones especiales.",
    precio: 26.99,
    imagen: VelaTarjeton
  },
  
  // Velas de Noche
  {
    id: 40,
    nombre: "Velas Noche Basic",
    descripcion: "Set de velas aromáticas básicas para la noche. Perfectas para crear un ambiente íntimo y relajante.\n Set de 6 velas.\n",
    precio: 45.99,
    imagen: VelasNocheBasic
  },
  {
    id: 41,
    nombre: "Velas Noche Specials",
    descripcion: "Set de velas aromáticas especiales para la noche. Diseños únicos para ocasiones especiales.\n Set de 5 velas.\n",
    precio: 52.99,
    imagen: VelasNocheSpecials
  },
  
  // Velones
  {
    id: 42,
    nombre: "Velón Básico",
    descripcion: "Velón aromático básico. Duración prolongada, perfecto para aromatizar espacios grandes.",
    precio: 22.99,
    imagen: VelonBasic
  },
  {
    id: 43,
    nombre: "Velón Clásico",
    descripcion: "Velón aromático clásico. Diseño tradicional y elegancia atemporal para tu hogar.",
    precio: 24.99,
    imagen: VelonClassic
  },
  {
    id: 44,
    nombre: "Velón Especial",
    descripcion: "Velón aromático especial. Diseño único y fragancia de larga duración.",
    precio: 27.99,
    imagen: VelonSpecials
  },
  {
    id: 45,
    nombre: "Velón Girado",
    descripcion: "Velón aromático con diseño girado. Estilo moderno y contemporáneo para decorar.",
    precio: 26.99,
    imagen: VelonTurned
  }
];
