import categories from "../data/categories.json";
import type { Category } from "../types";

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategoriesBySlug(slug: string): Category {
  const category = categories.find((cat) => cat.slug === slug);

  if (!category) {
    throw new Error(`Category with slug ${slug} not found`);
  }

  return category;
}

export function getDisplayNameFromSlug(slug: string): string {
  const category = getCategoriesBySlug(slug);
  return category.displayName;
}   
