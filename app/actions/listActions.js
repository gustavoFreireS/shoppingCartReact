export const addToCart = (cart) => {
  console.log(cart);
  return {
      type: 'add',
      cart
  };
}
export const removeAll = () => {
  return {
      type: 'remove',
  };
}
