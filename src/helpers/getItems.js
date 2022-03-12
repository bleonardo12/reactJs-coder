const itemList = [
    {
        id: "1",
        title: "Camiseta de Racing Titular",
        category: "Deportiva",
        price: 16000,
        stock: 5,
    },
    {
        id: "2",
        title: "Camiseta de River Titular",
        category: "Deportiva",
        price: 14000,
        stock: 10,
    },
    {
        id: "3",
        title: "Camiseta de Boca Titular",
        category: "Deportiva",
        price: 13000,
        stock: 15,
    },
    {
        id: "4",
        title: "Camiseta de Sarmiento Titular",
        category: "Deportiva",
        price: 10000,
        stock: 20,
    },
    {
        id: "5",
        title: "Camiseta de Central Titular",
        category: "Deportiva",
        price: 12000,
        stock: 25,
    },
    {
        id: "6",
        title: "Camiseta de Argentina Titular",
        category: "Deportiva",
        price: 18000,
        stock: 30,
    },
    {
        id: "7",
        title: "Camiseta de Holanda Titular",
        category: "Deportiva",
        price: 13000,
        stock: 35,
    },
    {
        id: "8",
        title: "Camiseta de Bélgica Titular",
        category: "Deportiva",
        price: 16000,
        stock: 40,
    },
];

const getItems = new Promise((res, rej) => {
    let condition = true;

    if (condition) {
        setTimeout(() => {
            res(itemList);
        }, 3000);
    } else {
        rej(/*Manejo de error*/);
    }
});

export default getItems;
