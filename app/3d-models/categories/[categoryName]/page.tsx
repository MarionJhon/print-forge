import { getCategoriesBySlug } from "@/app/lib/categories";
import type { Category, CategoryPageProps, Model } from "@/app/types";
import { getModels } from "@/app/lib/models";
import ModelGrid from "@/app/components/ModelGrid";
export default async function CategoryNamePage({ params }: CategoryPageProps) {
  const { categoryName } = await params;
  const category: Category = getCategoriesBySlug(categoryName);
  const models: Model[] = await getModels({ category: categoryName });
  return <ModelGrid title={category.displayName} models={models} />;
}
