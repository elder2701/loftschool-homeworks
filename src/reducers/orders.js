import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.

function ArrayCompare(array1, array2) {
  return (
    array1.length === array2.length && array1.every((v, i) => v === array2[i])
  );
}

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_ORDER: {
      return [
        ...state,
        {
          id: action.payload.id,
          recipe: action.payload.recipe,
          ingredients: [],
          position: 'clients'
        }
      ];
    }

    case MOVE_ORDER_NEXT: {
      const currentReservation = {
        ...state.find(order => order.id === action.payload)
      };
      const recipe = currentReservation.recipe;
      const ingred = currentReservation.ingredients;
      if (currentReservation.position === 'clients') {
        currentReservation.position = 'conveyor_1';
      } else if (currentReservation.position === 'conveyor_4') {
        if (ArrayCompare(recipe, ingred)) {
          currentReservation.position = 'finish';
        } else {
          return state;
        }
      } else {
        const position = currentReservation.position;
        let convNumber = +position.slice(position.indexOf('_') + 1);
        currentReservation.position = `conveyor_${convNumber + 1}`;
      }

      return state.map(order =>
        order.id === currentReservation.id ? currentReservation : order
      );
    }

    case MOVE_ORDER_BACK: {
      const currentReservation = {
        ...state.find(order => order.id === action.payload)
      };
      if (currentReservation.position === 'conveyor_1') {
        return state;
      }
      const position = currentReservation.position;
      let convNumber = +position.slice(position.indexOf('_') + 1);
      currentReservation.position = `conveyor_${convNumber - 1}`;
      return state.map(order =>
        order.id === currentReservation.id ? currentReservation : order
      );
    }
    case ADD_INGREDIENT: {
      const { ingredient, from } = action.payload;
      let currentReservation = {
        ...state.find(order => order.position === from)
      };
      console.log(currentReservation);
      if (!Object.keys(currentReservation).length) {
        return state;
      }
      const recipe = currentReservation.recipe;
      if (recipe.indexOf(ingredient) === -1) {
        return state;
      }
      if (currentReservation.ingredients.indexOf(ingredient) === -1) {
        currentReservation.ingredients = [
          ...currentReservation.ingredients,
          ingredient
        ];
      } else {
        return state;
      }

      if (
        currentReservation.ingredients.length ===
        currentReservation.recipe.length
      ) {
        currentReservation.ingredients = [...currentReservation.recipe];
      }
      return state.map(order =>
        order.id === currentReservation.id ? currentReservation : order
      );
    }
    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);
