import type { ActionReturn } from 'svelte/action';
interface Attributes {
	newprop?: string;
}
export function lazy(
	node: HTMLImageElement,
	params: { rootMargin: string }
): ActionReturn<{ rootMargin: string }, Attributes> {
	function observation(entries: IntersectionObserverEntry[]) {
		if (!entries[0].isIntersecting) return;
		node.src = node.dataset.src as string;
		observer.unobserve(node);
	}

	const observer = new IntersectionObserver(observation, params);

	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		}
	};
}
