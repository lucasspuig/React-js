import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";



const productos = [
    {
        
        name: "Air jordan 1 Mid",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam praesentium vel, doloribus sequi ipsa esse commodi earum tempora inventore quaerat, reprehenderit doloremque iusto assumenda expedita dolores dignissimos soluta quam animi!",
        stock: 100,
        price: 2000,
        image: "/img/jordanbrand-retropreview-sp24-aj1hiog-bq4422-161-a.jpg",
        category: "jordan 1"
    },
    {
        
        name: "Air jordan 1 Mid",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam praesentium vel, doloribus sequi ipsa esse commodi earum tempora inventore quaerat, reprehenderit doloremque iusto assumenda expedita dolores dignissimos soluta quam animi!",
        stock: 20,
        price: 2000,
        image: "/img/jordanbrand-retropreview-sp24-aj1hiog-dz5485-010-a.jpg",
        category: "jordan 1"
    },
    {
        
        name: "Air jordan 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam praesentium vel, doloribus sequi ipsa esse commodi earum tempora inventore quaerat, reprehenderit doloremque iusto assumenda expedita dolores dignissimos soluta quam animi!",
        stock: 50,
        price: 2500,
        image: "/img/jordanbrand-retropreview-sp24-aj5-dd0587-308-a.jpg",
        category: "jordan retro 5"
    },
    {
        
        name: "Air jordan 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam praesentium vel, doloribus sequi ipsa esse commodi earum tempora inventore quaerat, reprehenderit doloremque iusto assumenda expedita dolores dignissimos soluta quam animi!",
        stock: 30,
        price: 2500,
        image: "/img/jordanbrand-retropreview-sp24-aj4reimagined-fv5029-006-a.jpg",
        category: "jordan retro 5"
    },
    {
        
        name: "Air Jordan 13 Retro",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam praesentium vel, doloribus sequi ipsa esse commodi earum tempora inventore quaerat, reprehenderit doloremque iusto assumenda expedita dolores dignissimos soluta quam animi!",
        stock: 30,
        price: 3000,
        image: "/img/jordanbrand-retropreview-sp24-aj13-414571-170-a.jpg",
        category: "Air Jordan 13"
    },
    {
        
        name: "Air Jordan 13 Retro",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam praesentium vel, doloribus sequi ipsa esse commodi earum tempora inventore quaerat, reprehenderit doloremque iusto assumenda expedita dolores dignissimos soluta quam animi!",
        stock: 30,
        price: 3000,
        image: "/img/jordanbrand-retropreview-sp24-womensaj14-dh4121-300-a.jpg",
        category: "Air Jordan 13"
    }
]


const seedProductos = () => {
    const productoRef = collection(db, "producto")
    productos.map(( { id, ...dataProductos } )=> {
        addDoc(productoRef, dataProductos)
    })
    console.log("productos subidos")
    return
    }
seedProductos()




