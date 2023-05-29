import { deleteCustomerAction } from '$lib/server/customersCommonActions.js';

/** @type {import('./$types').Actions} */
export const actions = {
	deleteCustomer: async ({ request }) => {
		await deleteCustomerAction(request);
	}
};
