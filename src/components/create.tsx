import { useState, useEffect } from "react";

export default function Create() {
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
        const response = await fetch('localhost:3030/items', {
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
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createItem();
        alert('Item adicionado');
        window.location.reload()
    }

    useEffect(() => {
        fetchItem()
    }, [])
    
    
}