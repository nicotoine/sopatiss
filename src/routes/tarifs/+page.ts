import type { PageLoad } from './$types';
import tarifsData from '/src/lib/tarifs/tarifs.json';

export const load: PageLoad = () => {
	return {
		categories: tarifsData.categories
	};
};
