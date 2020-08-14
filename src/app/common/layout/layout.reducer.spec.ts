import * as layout from './layout.actions';
import * as reducer from './layout.reducer';


describe(`layout reducer`, () => {
	const NUMBER_LAYOUT_ACTIONS = 2;
	const OPEN_MODAL = "[Layout] Open modal"
	const CLOSE_MODAL = "[Layout] Close modal"
	const MODAL_NAME = 'MODAL_NAME';

	const layoutActionOpen= new layout.OpenModalAction(MODAL_NAME);
	const layoutActionClose= new layout.CloseModalAction(MODAL_NAME);
	it(`sets the model name correctly`, () => {
		let layoutState = reducer.reducer(null, layoutActionOpen)
		expect(layoutState.openedModalName).toBe(MODAL_NAME);
	});
	it(`removes the modal name correctly`, () => {
		let layoutState = reducer.reducer(null, layoutActionClose)
		expect(layoutState.openedModalName).toBe(null);
	});
	it(`modal name selector works correctly`, () => {
		let layoutState = reducer.reducer(null, layoutActionOpen)
		expect(reducer.getOpenedModalName(layoutState)).toBe(MODAL_NAME);
	});
});
