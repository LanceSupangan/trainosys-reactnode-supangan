import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {

  const products = [
    {
      name: 'Meow 1',
      price: 48_00,
      image: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
    },
    {
      name: 'Meow 2',
      price: 35_00,
      image: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
    },
    {
      name: 'Meow 3',
      price: 89_00,
      image:'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
    },
    {
      name: 'Meow 4',
      price: 35_00,
      image: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
    },
    {
      name: 'Meow 5',
      price: 64_00,
      image:'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
    },
    {
      name: 'Meow 6',
      price: 39_00,
      image: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
    },
    {
      name: 'Meow 7',
      price: 50_00,
      image: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
    },
    {
      name: 'Meow 8',
      price: 32_00,
      image: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
    },
  ];

  return (
    <>
      <form>
        <h2>Form</h2>
        <label>
          <p>First Name: </p>
          <input type = "text" name = "firstName" />
        </label>
        <br />

        <label>
          <p>Last Name: </p>
          <input type = "text" name = "lastName" />
        </label>
        <br />
        
        <label>
          <p>Email:</p> 
          <input type = "text" name = "email" />
        </label>
        <br />
        
        <label>
          <p>Password:</p> 
          <input type = "password" name = "password" />
        </label>
        <br />
        <br />
        
        <button type = "submit" value = "Submit">Submit</button>
      </form>

      <div id="productDisplay">
        {products.map(product => (
          <div id="itemList">
            <h4>{product.name}</h4>
            <h5>Price: {product.price}</h5>
            <img src={product.image} alt={product.name}/>
          </div>
        ))}
      </div>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
