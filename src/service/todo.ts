"use server";
import { TodoData } from "@/types/todo";
import { revalidateTag } from "next/cache";

const getData = async (): Promise<TodoData[]> => {
  try {
    const response = await fetch('http://localhost:3600/todos', {
      next:{
        tags: ["todos"]
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

const deleteData = async (id: number): Promise<{}> => {
  try {
    const response = await fetch(`http://localhost:3600/todos/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    revalidateTag("todos")
    return data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}


export  { getData, deleteData };
