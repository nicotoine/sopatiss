import { getPosts } from "../../utils/postUtils";

export async function load() {
    const posts = await getPosts();
    return { posts };
}
