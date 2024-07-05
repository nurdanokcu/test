interface ResponseSitemapData {
  status: string;
  data: Array<{
    id: number;
    slug: {
      en: string;
      de: string;
    };
  }>;
}

export default defineSitemapEventHandler(async () => {
  const links = [];
  const config = useRuntimeConfig();
  const endpoint = config.public.baseURL + '/api/v1/posts-site-map';
  const response = await $fetch<ResponseSitemapData>(endpoint, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    method: 'GET',
  });
  const englishLinks = response.data.map((blog) => {
    return {
      loc: `/en/blog/${blog.id}-${blog.slug.en}`,
      lang: 'en',
    };
  });
  const germanLinks = response.data.map((blog) => {
    return {
      loc: `/de/blog/${blog.id}-${blog.slug.de}`,
      lang: 'de',
    };
  });
  links.push(...englishLinks);
  links.push(...germanLinks);
  return links;
});
