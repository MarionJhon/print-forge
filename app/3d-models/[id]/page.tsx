import type { ModelDetailProps } from "@/app/types";
import { getModelById } from "@/app/lib/models";
import type { Model } from "@/app/types";
import { FaRegHeart } from "react-icons/fa6";
import Pill from "@/app/components/Pill";
import placeHolderImage from "@/public/hero-image-square.png";

export default async function ModelDetailPage({ params }: ModelDetailProps) {
  const { id } = await params;
  const modelId = await getModelById(id);

  return (
    <div className="container max-w-6xl px-4 py-8 mx-auto">
      <article className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <figure className="relative overflow-hidden rounded-lg shadow-lg aspect-square">
          <img src={placeHolderImage.src} alt={`3D model of ${modelId.name}`} />
        </figure>
        <section className="flex flex-col justify-center h-full">
          <div>
            <FaRegHeart className="w-5 h-5 mr-2" aria-hidden="true" />
            <span className="font-light" aria-label={`${modelId.likes} likes`}>
              {modelId.likes}
            </span>
          </div>
          <h1 className="mb-5 text-4xl font-bold">{modelId.name}</h1>
          <Pill className="mb-6 w-fit">{modelId.category}</Pill>
          <div className="mb-6 prose prose-lg max-w-none">
            <p className="leading-relaxed text-gray-700">
              {modelId.description}
            </p>
          </div>
          <footer className="text-sm text-gray-500">
            <time dateTime={modelId.dateAdded}>
              Add on {new Date(modelId.dateAdded).toLocaleDateString()}
            </time>
          </footer>
        </section>
      </article>
    </div>
  );
}
