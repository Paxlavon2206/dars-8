import {getData} from "@/service/todo";
import { Card } from "../components/card";

export default async function Home() {
  const data = await getData();
  return (
  <div className="grid grid-cols-4 gap-5 p-5 ">
    {data.map((todo) => (
      <Card key={todo.id} {...todo} />
    ))}
  </div>
  );
}
