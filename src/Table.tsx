import { useEffect, useState } from "react"
import React from "react"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  function Tablee() {
    useEffect(()=>{
        getData();
    },[]);
    const [products,setProducts]=useState([]);

    const getData= async ()=>{
        try{
            let result = await fetch(`http://localhost:5000/getproduct`);
            result = await result.json();
            setProducts(result);
            console.warn(result);
        }
        catch(e){
            console.log(e);
        }
    }

    return (
        <div>
         <Table>
        <TableCaption>List of your products</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Category</TableHead>
            <TableHead >Sale</TableHead>
            <TableHead className="text-right">Profit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {
                products.map((item,index)=>
                <TableRow>
                <TableCell className="font-medium">{100}</TableCell>
                <TableCell>Book</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell className="text-right"></TableCell>
              </TableRow>
                )
            }
        </TableBody>
      </Table>
      </div>
  )
}

export default Tablee

