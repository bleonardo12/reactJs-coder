const itemList = [
    {
        id: "1",
        title: "Camiseta de Racing Titular",
        category: "Deportiva",
        Price: 16000,
    },
    {
        id: "2",
        title: "Camiseta de River Titular",
        category: "Deportiva",
        Price: 14000,
    },
    {
        id: "3",
        title: "Camiseta de Boca Titular",
        category: "Deportiva",
        Price: 13000,
    },
    {
        id: "4",
        title: "Camiseta de Sarmiento Titular",
        category: "Deportiva",
        Price: 10000,
    },
    {
        id: "5",
        title: "Camiseta de Central Titular",
        category: "Deportiva",
        Price: 12000,
    },
    {
        id: "6",
        title: "Camiseta de Argentina Titular",
        category: "Deportiva",
        Price: 18000,
    },
    {
        id: "7",
        title: "Camiseta de Holanda Titular",
        category: "Deportiva",
        Price: 13000,
    },
    {
        id: "8",
        title: "Camiseta de Bélgica Titular",
        category: "Deportiva",
        Price: 16000,
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
