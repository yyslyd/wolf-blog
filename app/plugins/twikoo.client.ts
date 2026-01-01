import twikoo from "twikoo";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      twikoo,
    },
  };
});
