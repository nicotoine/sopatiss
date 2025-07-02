import { getPosts } from "../utils/postUtils";

/** @type {import('./$types').PageLoad} */
export async function load() {
    const allPosts = await getPosts();
    
    // On ne prend que les 4 articles les plus récents pour le carrousel
    const posts = allPosts.slice(0, 4);

    return { posts };
}
