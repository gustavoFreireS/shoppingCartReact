export default(state = [], payload) => {
    switch (payload.type) {
        case 'add':
        let list = state.cart || [];
        let newItem = {
          name: payload.cart.name,
          image:  payload.cart.image,
          id: state.cart ? state.cart.length + 1 : 1
        }
        list.push(newItem);
            return {
                cart: list,
              };
        default:
            return state;
        case 'remove':
        return {
            cart: [],
          };
          case 'delete':
          let cartList = state.cart;
          let listRemoved = cartList.filter(function(el) {
            return el.id !== payload.item.id;
          });
          return {
              cart: listRemoved
            };
    }
};
