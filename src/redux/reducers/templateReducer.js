// Basket reducer functions. 
const templateReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_MY_TEMPLATE':
			return action.payload;
		case 'CLEAR_BASKET':
			return [];
		default:
			return state;
	}
};

export default templateReducer