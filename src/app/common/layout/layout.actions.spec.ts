import * as layout from "./layout.actions";

describe('layout', () => {
	const NUMBER_LAYOUT_ACTIONS = 2;
	const OPEN_MODAL = "[Layout] Open modal"
	const CLOSE_MODAL = "[Layout] Close modal"
	const MODAL_NAME = 'MODAL_NAME';
	
	describe(`layout action types`, () => {
		describe(`number of keys in the layout action types object`, () => {
			it(` is two layout action types`, () => {
				expect(Object.keys(layout.LayoutActionTypes).length).toBe(NUMBER_LAYOUT_ACTIONS);
			});
		});
		describe(`OPEN_MODAL action type`, () => {
			it(`is present`, () => {
				expect('OPEN_MODAL' in layout.LayoutActionTypes).toBe(true);
			});
			it(`   and is equal to "[Layout] Open modal"`, () => {
				expect(layout.LayoutActionTypes.OPEN_MODAL).toBe(OPEN_MODAL);
			});
		})
		describe(`CLOSE_MODAL action type `, () => {
			it(`is presentL`, () => {
				expect('CLOSE_MODAL' in layout.LayoutActionTypes).toBe(true);
			})
			it(` and is equal to "[Layout] Close modal"`, () => {
				expect(layout.LayoutActionTypes.CLOSE_MODAL).toBe(CLOSE_MODAL);
			});
		});
	});
	describe(`OPEN_MODAL action`, () => {
		const layoutAction = new layout.OpenModalAction(MODAL_NAME);
		it(`has type equal to OPEN_MODAL`, () => {
			expect(layoutAction.type).toBe(OPEN_MODAL);
		});
		it(`has correct payload`, () => {
			expect(layoutAction.payload).toBe(MODAL_NAME);
		});
	});
	describe(`CLOSE_MODAL action`, () => {
		const layoutAction = new layout.CloseModalAction(MODAL_NAME);
		it(`has type equal to CLOSE_MODAL`, () => {
			expect(layoutAction.type).toBe(CLOSE_MODAL);
		});
		it(`has correct payload`, () => {
			expect(layoutAction.payload).toBe(MODAL_NAME);
		});
	});
});
