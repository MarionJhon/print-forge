import { getModels } from "../lib/models";
import ModelGrid from "../components/ModelGrid";
import { ModelPageProps } from "../types";
import Form from 'next/form'

export default async function ModelListPage({ searchParams }: ModelPageProps) {
  const query = (await searchParams)?.query?.toLowerCase() || "";
  const models = await getModels({});
  const filteredModel = query
    ? models.filter(
        (obj) =>
          obj.name.toLowerCase().includes(query) ||
          obj.description.toLowerCase().includes(query)
      )
    : models;

  return (
    <>
      <Form action="/3d-models" className="w-full px-5 md:px-0 md:max-w-xl">
        <input type="text" name="query" placeholder="Search" autoComplete="off" defaultValue={query} className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none"/>
      </Form>
      <ModelGrid title="3D Models" models={filteredModel} />
    </>
  );
}
