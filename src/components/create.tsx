'use client'
import { useState, useEffect } from "react";

export default function Create() {
    const [storageItem, setStorageItem] = useState([])
    const [newStorageItem, setNewStorageItem] = useState({
        id: 0,
        name: '',
        amount: '',
        price: '',
    })

   
    const fetchItem = async () => {
        const response = await fetch('http://localhost:3030/items');
        const data = await response.json();
        setStorageItem(data)
        console.log(data)
    }

    const createItem =async () => {
        const response = await fetch('http://localhost:3030/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStorageItem),
    })
        if (response.status === 201) {
            setNewStorageItem({
                id: 0,
                name: '',
                amount: '',
                price: '',
            })
            fetchItem()
            window.location.reload()
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createItem();
        alert('Item adicionado');
    }

    useEffect(() => {
        fetchItem()
    }, [])
    
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={newStorageItem.name}
          onChange={(e) =>
            setNewStorageItem({ ...newStorageItem, name: e.target.value })
          }
          required
        />

        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          id="amount"
          name="amount"
          value={newStorageItem.amount}
          onChange={(e) =>
            setNewStorageItem({ ...newStorageItem, amount: e.target.value })
          }
          required
        />

        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          name="price"
          value={newStorageItem.price}
          onChange={(e) =>
            setNewStorageItem({ ...newStorageItem, price: e.target.value })
          }
          required
        />

        <button type="submit">Create Item</button>
      </form>

    )
    
}