import { myAxios } from '../../lib/myAxios';

/** @type {import('./$types').PageLoad} */
export async function load() {
	const { data: customers } = await myAxios.get('customers');

	return {
		customers
	};
}
