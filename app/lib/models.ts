import modelsData from "../data/models.json";
import type { Model, GetModelParams } from "../types";

export async function getModels({
  category,
}: GetModelParams): Promise<Model[]> {
  let filterModels = [...modelsData];

  if (category) {
    filterModels = modelsData.filter(
      (model: Model) => model.category === category
    );
  }
  return filterModels;
}

export async function getModelById(id: string | number): Promise<Model> {
  const foundModel = modelsData.find(
    (model: Model) => model.id.toString() === id.toString()
  );

  if (!foundModel) {
    throw new Error(`Model with id ${id} not found`);
  }

  return foundModel;
}
