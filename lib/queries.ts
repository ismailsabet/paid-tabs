// Usually I would obviously take params for revalidation time and the tags, but the mock API will probably not get updated.

const fetcher = async (path: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com${path}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getPosts = async () => {
  return await fetcher("/posts");
};

export const getPost = async (id: string) => {
  return await fetcher(`/posts/${id}`);
};

export const getComments = async (id: string) => {
  return await fetcher(`/posts/${id}/comments`);
};
