import productReducer from './productReducer';
import basketReducer from './basketReducer';
import filterReducer from './filterReducer';
import templateReducer from './templateReducer';
import itemReducer from './itemReducer';
import sidebarReducer from './sidebarReducer'

// Creating the rootReducer
function rootReducer(state = {}, action) {
	return {
		basket: basketReducer(state.basket, action),
		product: productReducer(state.product, action),
		filter: filterReducer(state.filter, action),
		template: templateReducer(state.template, action),
		item: itemReducer(state.item, action),
		sidebar: sidebarReducer(state.sidebar, action)
	}
}

export default rootReducer;
