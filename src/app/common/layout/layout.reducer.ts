import * as layout from "./layout.actions";

export interface State {
	openedModalName: string;
}

const initialState: State = {
	openedModalName: null
};

export const reducer = (state = initialState, action: layout.LayoutActions): State => {
	switch (action.type) {
		/*
		  Modal cases
		 */
		case layout.LayoutActionTypes.OPEN_MODAL: {
			const name = action.payload;
			return Object.assign({}, state, {
				openedModalName: name
			});
		}
		
		case layout.LayoutActionTypes.CLOSE_MODAL: {
			return Object.assign({}, state, {
				openedModalName: null
			});
		}
		default:
			return state;
	}
}

// Simple selector
export const getOpenedModalName = (state: State) => state.openedModalName;
