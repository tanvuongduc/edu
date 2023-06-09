'use client'
import React from "react";
import styles from './page.module.css';
import { useState } from "react";



export function Button(props:any){
    return(
        <button onClick={props.onClick}>
            {props.title}
        </button>
    )
}

export function ButtonCreate(props:any) {
    return(
        <button onClick={props.onClick}>
            {props.title}
        </button>
    )
}
export default function UserList1 ({items}:{items:{id:number;
    name:string;
    gender:Boolean;
    roleId:number}}) {

        function handleClickDelete(index:number) {
            let [newItems,setNewItems] = useState([items]); 
                setNewItems(newItems.splice(index,1));
                console.log('11111111111',newItems);
                
            
        }
    return(
       <Button ></Button>
    )
}