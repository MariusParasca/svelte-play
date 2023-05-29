import { myAxios } from '$lib/myAxios';
import { redirect } from '@sveltejs/kit';

export const deleteCustomerAction = async (request: Request) => {
	const formData = await request.formData();
	// TODO validation

	await myAxios.delete(`customers/${formData.get('id')}`);

	throw redirect(303, '/customers');
};
