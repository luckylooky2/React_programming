import { addNumber } from "./utils";

it('add two number', () => {
	const result = addNumber(1, 2);
	expect(result).toBe(3);
})