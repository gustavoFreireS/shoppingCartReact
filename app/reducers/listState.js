import Apple from '../images/apple.png';
import Orange from '../images/orange.png';
import Watermelon from '../images/watermelon.png';
import Banana from '../images/banana.png';
import Lemon from '../images/lemon.png';
import Grapes from '../images/grape.png';
export default(state = [], payload) => {
    switch (payload.type) {
        default:
        let products = [
          {
            name: 'Apple',
            image: Apple
          },
          {
            name: 'Orange',
            image: Orange
          },
          {
            name: 'Watermelon',
            image: Watermelon
          },
          {
            name: 'Banana',
            image: Banana
          },
          {
            name: 'Lemon',
            image: Lemon
          },
          {
            name: 'Grapes',
            image: Grapes
          }
        ];
        return products;
      };


    }
