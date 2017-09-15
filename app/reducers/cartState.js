export default(state = [], payload) => {
    switch (payload.type) {
        case 'add':
        let list = state.cart || [];
        list.push(payload.cart)
            return {
                cart: list,
              };
        default:
            return state;
        case 'remove':
        return {
            cart: [],
          };
    }
};
