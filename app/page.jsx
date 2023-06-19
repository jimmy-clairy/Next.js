'use client'
import { useState } from 'react'
import styles from './page.module.css'
import Box from './box.jsx'
import Square from './square.jsx'

export default function Home() {

  const [items, setItems] = useState([
    {id:1,
      brand: "Samsung",
      model: "Galaxy S10",
      color: "Black",
      price: 699.99
    },{
      id:2,
      brand: "Samsung",
      model: "Galaxy A40",
      color: "Blue",
      price: 799.99
    },{
      id:3,
      brand: "Samsung",
      model: "Galaxy A53",
      color: "Blue",
      price: 799.99
    },{
      id:4,
      brand: "Samsung",
      model: "Galaxy S21",
      color: "White",
      price: 649.99
    },{
      id:5,
      brand: "Samsung",
      model: "Galaxy S10",
      color: "Red",
      price: 679.99
    }
  ]);

  function removeItem(id) {
    const result = items.filter(item => item.id !== id)
    setItems(result)
  }

  function Heading({name, children}) {
    return (
      <div>
        <h1 id='title' className={styles.heading}>Bonjour {name}</h1>
        <p>{children}</p>
      </div>
    ) 
  }

  return (
    <header>
      <Heading name="Jimmy">Bonjour tout le monde</Heading>
      <div className={styles.boxContainer}>
        {items.map((item) => <Box 
        key={item.id}
        id={item.id}
        marque={item.brand} 
        model={item.model}
        price={item.price}
        color={item.color}
        removeItem={removeItem}
        />)}
      </div>
          <Square/>
    </header>
  )
}