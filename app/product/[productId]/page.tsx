"use client"

import { useParams } from "next/navigation"

export default function ProductId(){
    const {productId}=useParams()
    console.log("productID",productId);
    
    return(
        <div>
            
<h1>Product Id: {productId}</h1>

        </div>
    )
}