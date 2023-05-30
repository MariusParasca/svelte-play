import { myAxios } from '$lib/myAxios.js';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	createCustomer: async ({ request }) => {
		const formData = await request.formData();
		const body = {
			email: formData.get('email'),
			name: formData.get('name'),
			balance: formData.get('balance')
		};

		await myAxios.post('customers', body);

		throw redirect(303, '/customers');
	}
};
