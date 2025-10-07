import { getAllModels } from "../lib/models";
import { Model } from "../types";


export default async function ModelListPage() {
  const listData = await getAllModels();

  return (
    <div>
        <ul>
            {listData.map((list:Model) => 
            <li key={list.id}>{list.name}</li>
            )}
        </ul>
    </div>
  )
}
