import { myAxios } from '$lib/myAxios';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const { data } = await myAxios.get(`customers/${params.slug}`);

	return {
		customer: data
	};
}
