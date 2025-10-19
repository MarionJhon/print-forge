import { Model, ModelGridProps } from "../types";
import ModelCard from "./ModelCard";

export default function ModelGrid({ title, models }: ModelGridProps) {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">{title}</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {models.map((model: Model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </div>
  );
}
