"use client"

import { useParams } from "next/navigation"


// this code do js code

// export default function ProductId(){
//     const {productId}=useParams()
//     console.log("productID",productId);
    
//     return(
//         <div>

// <h1>Product Id: {productId}</h1>

//         </div>
//     )
// }



// this is typescript code


export default function ProductId({ params }: { params: { productId: string } }) {
    const { productId } = params;

    
    return (
        <div>
            <h1>Product Id: {productId}</h1>
        </div>
    );
}