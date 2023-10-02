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
        <div className="p-10 m-3  bg-slate-100 rounded-xl shadow-md">
            <form onSubmit={handleSubmit}  className="flex flex-col space-y-2">
                <label className="font-medium text-sm uppercase m-2" htmlFor="name">Name</label>
                <input className="rounded-xl p-1 bg-slate-50 hover:bg-slate-200 shadow-md"
                type="text"
                id="name"
                name="name"
                value={newStorageItem.name}
                onChange={(e) =>
                    setNewStorageItem({ ...newStorageItem, name: e.target.value })
                }
                required
                />

                <label className="font-medium text-sm uppercase m-2" htmlFor="amount">Amount</label>
                <input className="rounded-xl p-1 bg-slate-50 hover:bg-slate-200 shadow-md"
                type="text"
                id="amount"
                name="amount"
                value={newStorageItem.amount}
                onChange={(e) =>
                    setNewStorageItem({ ...newStorageItem, amount: e.target.value })
                }
                required
                />

                <label className="font-medium text-sm uppercase m-2" htmlFor="price">Price</label>
                <input className="rounded-xl p-1 bg-slate-50 hover:bg-slate-200 shadow-md"
                type="text"
                id="price"
                name="price"
                value={newStorageItem.price}
                onChange={(e) =>
                    setNewStorageItem({ ...newStorageItem, price: e.target.value })
                }
                required
                />

                <button type="submit" className="bg-slate-50 shadow-md mt-4 rounded-lg p-2 uppercase font-bold hover:text-slate-700 hover:bg-slate-200">Create Item</button>
            </form>
        </div>
    )
    
}