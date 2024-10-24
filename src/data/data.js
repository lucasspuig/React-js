const productos = [
    {
        id:"dfe2aa22",
        name: "Air jordan 1 Mid",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam praesentium vel, doloribus sequi ipsa esse commodi earum tempora inventore quaerat, reprehenderit doloremque iusto assumenda expedita dolores dignissimos soluta quam animi!",
        stock: 10,
        price: 2000,
        image: "/img/jordanbrand-retropreview-sp24-aj1hiog-bq4422-161-a.jpg",
        category: "jordan 1"
    },
    {
        id:"dfe2bb22",
        name: "Air jordan 1 Mid",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam praesentium vel, doloribus sequi ipsa esse commodi earum tempora inventore quaerat, reprehenderit doloremque iusto assumenda expedita dolores dignissimos soluta quam animi!",
        stock: 2,
        price: 2000,
        image: "/img/jordanbrand-retropreview-sp24-aj1hiog-dz5485-010-a.jpg",
        category: "jordan 1"
    },
    {
        id:"dfe2cc22",
        name: "Air jordan 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam praesentium vel, doloribus sequi ipsa esse commodi earum tempora inventore quaerat, reprehenderit doloremque iusto assumenda expedita dolores dignissimos soluta quam animi!",
        stock: 3,
        price: 2000,
        image: "/img/jordanbrand-retropreview-sp24-aj5-dd0587-308-a.jpg",
        category: "jordan retro 5"
    },
    {
        id:"dfe2dd22",
        name: "Air jordan 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam praesentium vel, doloribus sequi ipsa esse commodi earum tempora inventore quaerat, reprehenderit doloremque iusto assumenda expedita dolores dignissimos soluta quam animi!",
        stock: 3,
        price: 2000,
        image: "/img/jordanbrand-retropreview-sp24-aj4reimagined-fv5029-006-a.jpg",
        category: "jordan retro 5"
    },
    {
        id:"dfe2ee22",
        name: "Air Jordan 13 Retro",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam praesentium vel, doloribus sequi ipsa esse commodi earum tempora inventore quaerat, reprehenderit doloremque iusto assumenda expedita dolores dignissimos soluta quam animi!",
        stock: 3,
        price: 2000,
        image: "/img/jordanbrand-retropreview-sp24-aj13-414571-170-a.jpg",
        category: "Air Jordan 13"
    },
    {
        id:"dfe2ff22",
        name: "Air Jordan 13 Retro",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam praesentium vel, doloribus sequi ipsa esse commodi earum tempora inventore quaerat, reprehenderit doloremque iusto assumenda expedita dolores dignissimos soluta quam animi!",
        stock: 3,
        price: 2000,
        image: "/img/jordanbrand-retropreview-sp24-womensaj14-dh4121-300-a.jpg",
        category: "Air Jordan 13"
    }
]

    /*
    const promesa = new Promise((resolve, reject) => {
        if (condicion) {
            resolve("se resolvio")
        } else{
            reject("se rechazo")
        }
    })
    */


const getproductos = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    })
}



export{ getproductos }