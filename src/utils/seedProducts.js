import db from "../db/db.js"
import {collection, addDoc} from "firebase/firestore"

const products = [
    {
      id: "610360",
      name: "Samsung Galaxy Book 3 Core i7",
      price: 1249000,
      stock: 2,
      image: "/img/notebook-s-1.jpg",
      category: "notebooks",
      description: "Color: Silver. Procesador: Intel Core i7-1355U (Hasta 4.6 GHz, 10 núcleos 12 subprocesos). Memoria: 16 GB LPDDR4x. Almacenamiento Primario: 512 GB SSD M.2. Gráfica: Intel Iris X Graphics. Teclado: Inglés. Pantalla: 15.6 Full HD 1920 x 1080p LED."
    },
    {
      id: "218455",
      name: "HP Victus Ryzen 5 7535HS",
      price: 1166990,
      stock: 10,
      image: "/img/notebook-hp-1.jpg",
      category: "notebooks",
      description: "Color: Mica Silver. Procesador: AMD Ryzen 5 7535HS (Hasta 4.55 GHz, 6 núcleos 12 hilos). Memoria: 32GB RAM DDR5. Almacenamiento Primario: 512GB SSD. Gráfica: Radeon RX 6550M 4096MB. Teclado: Inglés Retroiluminado. Pantalla: 15.6 FHD (1920x1080) 144Hz."
    },
    {
      id: "189331",
      name: "Acer Aspire 3 Intel Core i7",
      price: 971990,
      stock: 8,
      image: "/img/notebook-a-1.jpg",
      category: "notebooks",
      description: "Color: Pure Silver. Procesador: Intel Core i7 1165G7 (hasta 4,70 GHz, 4 núcleos 8 subprocesos). Memoria: 40GB DDR4. Almacenamiento Primario: 512GB PCIe NVMe SSD. Gráfica: Intel Iris Xe Graphics. Teclado: Inglés. Pantalla: 15,6 Full HD (1920x1080) Comfyview LED LCD."
    },
    {
      id: "356876",
      name: "Dell Latitude 3420 Core i5",
      price: 823990,
      stock: 9,
      image: "/img/notebook-d-1.jpg",
      category: "notebooks",
      description: "Color: Black. Procesador: Intel Core i5 1135G7 (Hasta 4.20 GHz, 4 núcleos 8 subprocesos). Memoria: 16 GB DDR4. Almacenamiento 256 GB. Gráfica: Intel Iris X Graphics. Teclado: español, con Ñ Física. Pantalla: 14 FHD (1920 x 1080)."
    },
    {
      id: "169950",
      name: "PC Gama Entrada Hogar",
      price: 264990,
      stock: 5,
      image: "/img/pc-e-1.jpg",
      category: "pc",
      description: "Características: Procesador Athlon 3000G. Gabinete Mid Tower. Motherboard A520M-K ASUS PRIME. Memoria 8GB DDR4. Disco Sólido 240gb. NVME Video Radeon Vega 3. Incluye teclado y mouse!"
    },
    {
      id: "901828",
      name: "PC Gama Media",
      price: 464990,
      stock: 20,
      image: "/img/pc-m-1.jpg",
      category: "pc",
      description: "Características: Procesador Intel Core i5 12400. Gabinete Mid Tower ATX. Motherboard H610. Memoria 8GB DDR4. Disco Sólido 240GB NVME. Gráficos UHD Intel 630."
    },
    {
      id: "379074",
      name: "PC Gamer Inicial",
      price: 509990,
      stock: 15,
      image: "/img/pc-ge-1.jpg",
      category: "pc",
      description: "Características: Procesador AMD Ryzen 5 5700g. Gabinete Mid Tower. Motherboard A520. Memoria Ram 8GB DDR4. Gráficos Radeon Graphics Integrados. Disco Sólido 240gb."
    },
    {
      id: "830094",
      name: "PC Gamer Extrema",
      price: 1599999,
      stock: 7,
      image: "/img/pc-gm-1.webp",
      category: "pc",
      description: "Procesador AMD Ryzen 7 7700X. Ram DDR5 32GB Adata 5600Mhz. Motherboard MSI PRO A620M-E AM5. Disco SSD M.2 Hiksemi 1024Gg. GPU Radeon XFX 6800 SWFT. Water Cooling Solarmax 360. Fuente 1050W Gamemax 85 Plus Silver GM-1050. Gabinete Thermaltake 270 TG."
    },
    {
      id: "844537",
      name: "Disco Solido WD Green 480GB",
      price: 49990,
      stock: 20,
      image: "/img/componentes-ds-1.jpg",
      category: "componentes",
      description: "Capacidad: 240 GB. Interfaz: SATA III. Dimensiones (largo, ancho y alto): 3.96 x 2.75 x 0.28. Rendimiento de lectura secuencial: 545MB/s"
    },
    {
      id: "521279",
      name: "Memoria Ram 8gb 3200Mhz Kingston",
      price: 26990,
      stock: 5,
      image: "/img/componentes-r-1.jpg",
      category: "componentes",
      description: "Línea: Fury Beast DDR4. Fabricante: Kingston. Formato: UDIMM. Módulos de memoria: 1. Tecnología de la memoria: DDR4 SDRAM. Modelo: KF432C16BB/8-tw. Cantidad de pines: 288. Velocidad: 3200 MHz. Voltaje de alimentación: 1.35V. Capacidad total: 8 GB. Tasa de transferencia: 25600 MB/s."
    },
    {
      id: "474544",
      name: "Fuente Gamer Redragon 500W 80+",
      price: 64990,
      stock: 9,
      image: "/img/componentes-f-1.jpg",
      category: "componentes",
      description: "Dimensiones: 160 x 150 x 86 mm (L x W x H) Color: Negro Tamaño del ventilador: 140 mm a rulemanes Largo del cable de alimentación: 500 mm Conectores internos: 24P(20+4) x1, Molex x2, SATA x6, PCI-E 8P(6+2) x2, CPU 8P(4+4) x1 ATX Version: ATX 12V 2.30 Voltaje de entrada: 100-240 V Corriente de entrada: 6.0A Max. Eficiencia: 80Plus Bronce"
    },
    {
      id: "191474",
      name: "Motherboard Asus Prime H610M-K",
      price: 129990,
      stock: 10,
      image: "/img/componentes-m-1.jpg",
      category: "componentes",
      description: "Tarjeta madre Intel H610 (LGA 1700) mic-ATX con DDR4, PCIe 4.0, puerto M.2, Realtek 1 Gb Ethernet, HDMI, D-Sub, puertos USB 3.2 Gen 1, SATA 6 Gbps, puerto COM y puerto RGB"
    },
    {
      id: "455818",
      name: "Joystick Redragon Harrow",
      price: 37990,
      stock: 9,
      image: "/img/perifericos-j-1.jpg",
      category: "perifericos",
      description: "Modelo : Harrow G 808. Tipo de conexión : Inalambrica 2.4 Ghz. Plataformas soportadas : PC, PlayStation® 3. Interfaz : Dongle USB 2.0. Botones : 8 + 2 Sticks Bumpers L1/R1 : 2 tipo botón Triggers LT/RT : 2, sensitivos"
    },
    {
      id: "204918",
      name: "Auriculares Corsair HS35 V2 Carbon",
      price: 79820,
      stock: 11,
      image: "/img/perifericos-a-1.jpg",
      category: "perifericos",
      description: "Disfrute de un sonido que cambia las reglas del juego, y en todas las plataformas. Conecte los auriculares para juegos HS35 v2 a prácticamente cualquier sistema o consola mediante una conexión universal de 3,5 mm. Detecte todos los matices sonoros del juego gracias a los transductores de neodimio de 50 mm con ajuste personalizado que generan una potente y amplia gama de sonido."
    },
    {
      id: "366214",
      name: "Mouse Redragon King PRO M916",
      price: 41990,
      stock: 25,
      image: "/img/perifericos-m-1.jpg",
      category: "perifericos",
      description: "100% enfocado en el rendimiento, el K1ng Pro es nuestro ratón tope de gama para los jugadores más competitivos. Ultra liviano, pequeño y ergonómico. Doble conexión inalámbrica, más cable de paracord. Sensor premium Pixart 3395. Switches súper resistentes: 50 millones de clics."
    },
    {
      id: "538297",
      name: "Teclado Mecanico Razer BlackWidow V3",
      price: 103980,
      stock: 3,
      image: "/img/perifericos-t-1.jpg",
      category: "perifericos",
      description: "El mejor desempeño en un formado más delgado, te presentamos el Razer BlackWidow V3 Tenkeyless. Continuando con un legado icónico, este teclado gamer compacto viene armado con los Switches Mecánicos Razer™ de renombre mundial y equipado con Razer Chroma™ RGB, para que tengas el nivel de precisión y personalización que tanto aprecian los gamers de todo el mundo."
    }
  ]

 const seedProducts = async() =>{
    try {
        const productsRef = collection(db, "products")
        products.map( async( { id, ...dataProduct }) =>{
           await addDoc(productsRef, dataProduct)
        })
        console.log("productos subidos correctamente!")
    } catch (error) {
        console.log(error)
    }
 } 

 seedProducts() 