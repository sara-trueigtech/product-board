export const getProductFilterControls = (categories = []) => {
  return [
    {
      name: "search",
      type: "input",
      inputType: "text",
      placeholder: "Search products...",
    },
    {
      name: "category",
      type: "select",
      options: categories.map((c) => ({
        label: c,
        value: c,
      })),
    },
  ];
};