import type { ReactNode } from "react";

//Page type
export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export type Model = {
  id: number;
  name: string;
  description: string;
  likes: number;
  image: string;
  category: string;
  dateAdded: string;
};

export type ModelGridProps = {
  title: string;
  models: Model[];
};

export type GetModelParams = {
  category?: string;
};

export type ModelDetailProps = {
  params: Promise<{
    id: string;
  }>;
};

export type ModelCardProps = {
  model: Model;
};

export type ModelPageProps = {
  searchParams: Promise<{
    query?: string
  }>
};

export type PillProps = {
  children: ReactNode;
  className?: string;
};

export type Category = {
  displayName: string;
  slug: string;
};

export type CategoriesData = {
  categories: Category[];
};

export type CategoryPageProps = {
  params: Promise<{
    categoryName: string;
  }>;
};

export type NavLinkProps = {
  href: string;
  children: ReactNode;
  isActive?: boolean;
};
