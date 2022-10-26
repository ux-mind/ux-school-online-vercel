const reviewsHandler = {
    name: "reviews",
    priority: 11,
    pattern: "/reviews/",
    func: async ({ link, params, state, libraries }) => {
      console.log("PARAMS:", params);
      const { slug } = params;
  
      // Fetch the menu data from the endpoint
      const response = await libraries.source.api.get({
        endpoint: `/wp/v2/reviews`,
      });
  
      // Parse the JSON to get the object
      const reviewsData = await response.json();
  
      // Add the menu items to source.data
      const reviews = state.source.data[link];
      Object.assign(reviews, {
        items: reviewsData,
        isReviews: true,
      });
    },
  };
  
  export default reviewsHandler;