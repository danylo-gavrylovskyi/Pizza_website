import { Item } from '../@types/generalTypes';

export const orderTotalCalc = (cartItems: Item[]) => {
  const items = cartItems.reduce((sum: number, item: Item) => sum + item.price * item.count, 0);
  return items;
};

export const quantityCalc = (cartItems: Item[]) => {
  const items = cartItems.reduce((sum: number, item: Item) => sum + item.count, 0);
  return items;
};
