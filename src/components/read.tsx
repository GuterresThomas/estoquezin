'use client'
import { useState, useEffect } from "react";

export default function Read() {
    const [storageItem, setStorageItem] = useState([])

    const fetchItem = async () => {
        const response = await fetch('http://localhost:3030/items');
        const data = await response.json();
        setStorageItem(data)
        console.log(data)
    }

    const deleteItem =async (id) => {
        const response = await fetch(`http://localhost:3030/items/${id}`,{
            headers: {
                'Origin': 'http://localhost:3002',
            },
            method: 'DELETE'
    });

    if (response.ok) {
        alert('Succsess in delete item!')
        // Se a exclusão for bem-sucedida, atualize a lista de itens
        fetchItem();
    } else {
        console.error('failed action');
    }
    }


    useEffect(() => {
        fetchItem()
    }, [])
    

    return (
        <div className="bg-slate-100 p-10 m-3 rounded-xl shadow-md">
            <h1 className="text-lg font-bold text-center uppercase">Storage</h1>
            <div className="">
                <ul>
                    {storageItem.map((item) => (
                        <li key={item.id}>
                            <p className="text-sm font-medium m-2">Name</p>
                            <div className="text-sm m-2">{item.name}</div>
                            <p className="text-sm font-medium m-2">Amount</p>
                            <div className="text-sm m-2">{item.amount}</div>
                            <p className="text-sm font-medium m-2">Price</p>
                            <div className="text-sm m-2">{item.price}</div>
                            <button onClick={() => deleteItem(item.id)} className="bg-slate-50 shadow-md mt-4 rounded-lg p-2 uppercase font-bold hover:text-slate-700 hover:bg-slate-200">Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
