const productos = [
    {
        id: "1",
        title: "Conjunto deportivo de dama color azul",
        talle: "xxl",
        category: "conjuntos deportivos",
        price: 16000,
        stock: 5,
    },
    {
        id: "2",
        title: "Conjunto deportivo de dama color rojo",
        talle: "l",
        category: "conjuntos deportivos",
        price: 14000,
        stock: 10,
    },
    {
        id: "3",
        title: "Conjunto deportivo de dama color blanco y negro",
        talle: "xxs",
        category: "conjuntos deportivos",
        price: 13000,
        stock: 15,
    },
    {
        id: "4",
        title: "slim fit color negra",
        category: "calzas",
        talle: "m",
        price: 10000,
        stock: 20,
    },
    {
        id: "5",
        title: "slim fit color azul y blanca ",
        talle: "s",
        category: "calzas",
        price: 12000,
        stock: 25,
    },
    {
        id: "6",
        title: "buzo largo tela antitranspirante color rojo",
        talle: "l",
        category: "buzos",
        price: 18000,
        stock: 30,
    },
    {
        id: "7",
        title: "buzo largo tela antitranspirante color azul",
        talle: "m",
        category: "buzos",
        price: 13000,
        stock: 35,
    },
    {
        id: "8",
        title: "buzo largo tela antitranspirante color beige",
        talle: "xxl",
        category: "tops",
        price: 16000,
        stock: 40,
    },
];

export const getFetch = new Promise((resolve, reject) => {
    // acciones

    let condition = true;
    if (condition) {
        setTimeout(() => {
            resolve(productos);
        }, 3000);
    } else {
        reject("400 - not found");
    }
});

