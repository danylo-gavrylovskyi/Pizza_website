export type Item = {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
  ingredients: string;
  count: number;
  activeTypeIndex: number;
  activeSizeIndex?: number;
  props?: string;
};
