// eslint-disable-next-line import/prefer-default-export
export async function useFetchPosts(url, posts = [], page = 1) {
  const resp = await fetch(url);
  const data = await resp.json();

  const allPosts = [...posts, ...data.data.children];

  if (!data.data.after || page === 5) {
    return allPosts;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useFetchPosts(data.after, allPosts, page + 1);
}
