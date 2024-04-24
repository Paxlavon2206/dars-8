"use client"
import { TodoData } from '@/types/todo'
import React from 'react'
import {deleteData} from "@/service/todo"

export const Card: React.FC<TodoData> = ({ description, id, title }) => {
    const deleteItems = () => {
        deleteData(id).then((res) => console.log(res))
    }

    return (
        <div className='border border-blue-600 text-center '>
            <h1 className='mb-4'>{title.length > 20 ? title.slice(0, 20) + '...' : title}</h1>
            <button className='text-red-600 bg-[#fad9d9] w-full' onClick={deleteItems}>Delete</button>
        </div>
    )
}
