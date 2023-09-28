import { useState, useEffect } from "react";

export default function Read() {
    const [item, setItem] = useState([])

    const fetchProducts = async () => {
        const response = await fetch('127.0.0.1/items');
        const data = await response.json();
        setItem(data)
        console.log(data)
    }

    
}