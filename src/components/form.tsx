"use client"
import React from 'react'
import { useForm } from 'react-hook-form'


interface inputs{
    title?: string,
    description?: string
}



export const Form: React.FC = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<inputs>();
    const submit =  () =>{

    }

  return (
    <form onSubmit={handleSubmit(submit)} className="mb-4">
      <div>
        <input className="border border-blue-400" name="title" type="text" />
      </div>
      <div>
        <input
          className="border border-blue-400"
          name="description"
          type="text"
        />
      </div>
      <button className="px-5 py-2 bg-blue-400" type="submit">
        send
      </button>
    </form>
  )
}
