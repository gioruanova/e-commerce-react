import gabinete from '../images/products/gabinete.JPG'
import ssd from '../images/products/ssd.jpg'
import rtx from '../images/products/rtx.JPG'
import teclado from '../images/products/teclado.JPG'
import monitor from '../images/products/monitor.JPG'


export const Products = [
    {
        id: 1,
        name: "Gabinete",
        specs: "Gabinete Corsair 80cm",
        price: 23000,
        stock: true,
        units: 5,
        picture: gabinete
    },
    {
        id: 2,
        name: "SSD 2TB",
        specs: "Disco Solido Kingston 2TB",
        price: 40000,
        stock: true,
        units: 22,
        picture: ssd
    },
    {
        id: 3,
        name: "Placa Grafica RTX 2090",
        specs: "MSI RTX 2090",
        price: 180000,
        stock: true,
        units: 10,
        picture: rtx
    },
    {
        id: 4,
        name: "Teclado Gamer",
        specs: "Teclado Gamer Redragon V 4500",
        price: 19500,
        stock: false,
        units: 4,
        picture: teclado
    },
    {
        id: 5,
        name: "Monitor Wide 32''",
        specs: "Monitor Wide 32'' Gamer",
        price: 83000,
        stock: true,
        units: 7,
        picture: monitor
    },

]