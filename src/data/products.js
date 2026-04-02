const products = [
  {
    id: "1",
    name: "Teclado Mecánico X-Black",
    price: 899,
    image: require("../../assets/products/teclado-xblack.jpg"),
    description:
      "Teclado mecánico con iluminación RGB, respuesta precisa y diseño futurista para setups hacker.",
    category: "Periféricos",
    featured: true,
  },
  {
    id: "2",
    name: "Mouse Gamer Nebula",
    price: 599,
    image: require("../../assets/products/mouse-nebula.jpg"),
    description:
      "Mouse ergonómico de alta precisión ideal para programación, gaming y productividad avanzada.",
    category: "Periféricos",
    featured: true,
  },
  {
    id: "3",
    name: "USB Linux Toolkit",
    price: 299,
    image: require("../../assets/products/usb-linux-toolkit.jpg"),
    description:
      "Memoria USB preparada para entornos Linux y herramientas técnicas de práctica.",
    category: "Herramientas",
    featured: false,
  },
  {
    id: "4",
    name: "Audífonos CyberWave",
    price: 749,
    image: require("../../assets/products/audifonos-cyberwave.jpg"),
    description:
      "Audífonos con sonido envolvente y estética oscura inspirada en el cosmos.",
    category: "Audio",
    featured: true,
  },
  {
    id: "5",
    name: "Hub USB Nexus",
    price: 459,
    image: require("../../assets/products/hub-usb-nexus.jpg"),
    description:
      "Hub USB para expandir conexiones y mantener tu estación de trabajo organizada.",
    category: "Accesorios",
    featured: false,
  },
];

export default products;