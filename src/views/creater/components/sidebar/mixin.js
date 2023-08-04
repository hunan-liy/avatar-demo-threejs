export default {
  methods: {
    onConfigButton (category, item) {
      const descriptor = {
        Category: category,
        Item: item
      };
      emitUIInteraction(descriptor);
      console.log(descriptor);
    }
  }
};
