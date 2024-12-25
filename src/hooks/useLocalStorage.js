import { useEffect, useState } from "react";

export default function useLocalStorage() {
    const [storageItem, setStorageItem] = useState(() => JSON.parse(localStorage.getItem("favourites") || "[]"));

    useEffect(()=>{
        console.log('rerendred');
    },[storageItem])
    
    return {storageItem, setStorageItem};
    
}