export const prerender = true;
export function load({ url }: { url: URL }) {
	return {
		url: url.href
	};
}
