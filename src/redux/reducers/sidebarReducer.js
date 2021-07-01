// Basket reducer functions. 
const sidebarReducer = (state = {click: false}, action) => {
	switch (action.type) {
		case 'MY_SIDEBAR':
			return action.payload;
		default:
			return state;
	}
};

export default sidebarReducer