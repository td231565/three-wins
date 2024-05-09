export const useProducts = () => {
  const prismic = usePrismic();
  return useAsyncData("$products", () =>
    prismic.client.getByType("page", {
      filters: [prismic.filter.at("my.page.category", "product")],
    })
  ).data;
};
