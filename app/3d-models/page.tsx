import { getModels } from "../lib/models";
import ModelGrid from "../components/ModelGrid";

export default async function ModelListPage() {
  const models = await getModels({});

  return <ModelGrid title="3D Models" models={models} />
}
