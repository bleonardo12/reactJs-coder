const productos = [
    {
        id: "1",
        title: "Conjunto deportivo de dama color azul",
        category: "Deportiva",
        price: 16000,
        stock: 5,
    },
    {
        id: "2",
        title: "Conjunto deportivo de dama color azul",
        category: "Deportiva",
        price: 14000,
        stock: 10,
    },
    {
        id: "3",
        title: "Conjunto deportivo de dama color azul",
        category: "Deportiva",
        price: 13000,
        stock: 15,
    },
    {
        id: "4",
        title: "Conjunto deportivo de dama color azul",
        category: "Deportiva",
        price: 10000,
        stock: 20,
    },
    {
        id: "5",
        title: "Conjunto deportivo de dama color azul",
        category: "Deportiva",
        price: 12000,
        stock: 25,
    },
    {
        id: "6",
        title: "Conjunto deportivo de dama color azul",
        category: "Deportiva",
        price: 18000,
        stock: 30,
    },
    {
        id: "7",
        title: "Conjunto deportivo de dama color azul",
        category: "Deportiva",
        price: 13000,
        stock: 35,
    },
    {
        id: "8",
        title: "Conjunto deportivo de dama color azul",
        category: "Deportiva",
        price: 16000,
        stock: 40,
    },
];

export const getFetch = new Promise((resolve, reject) => {
    let condition = true;

    if (condition) {
        setTimeout(() => {
            resolve(productos);
        }, 3000);
    } else {
        reject("400 - not found");
    }
});
