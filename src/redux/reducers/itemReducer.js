// Basket reducer functions. 
const itemReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TO_MY_DASHBOARD':
			return [...state, action.payload]
		case 'CLEAR_BASKET':
			return [];
		default:
			return state;
	}
};

export default itemReducer