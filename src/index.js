import { f } from './module';
import { createStore } from 'redux';

const INC_ACTION = 'inc';
const DEC_ACTION = 'dec';

let store = createStore((state = 0, action) => {
	switch (action.type) {
		case INC_ACTION:
			return state + 1;
		case DEC_ACTION:
			return state - 1;
		default:
			return state;
	}
});

store.subscribe(() => console.log(store.getState()));

store.dispatch({type: INC_ACTION});
store.dispatch({type: INC_ACTION});
store.dispatch({type: INC_ACTION});
store.dispatch({type: DEC_ACTION});


console.log(f(3));