import lang from './lang';
import * as types from '../constants/BasicTypes';
import { expect } from 'chai';

describe('lang reducer', () => {

	it('expect to handle initial state', () => {
		const obj = lang(undefined, {});
		expect(obj).to.be.an('object');
		expect(obj).to.deep.equal(
			{code: 'ES'}
		)
	});

	it('expect to handle CHANGE_LANGUAGE', () => {
		const obj = lang(undefined, {
			type: types.CHANGE_LANGUAGE,
			code: 'EN'
		});
		expect(obj).to.be.an('object');
		expect(obj).to.deep.equal(
			{ code: 'EN' }
		)
	});
});