// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from "vue";
import { defineSliceZoneComponents } from "@prismicio/vue";

export const components = defineSliceZoneComponents({
  contact_form: defineAsyncComponent(() => import("./ContactForm/index.vue")),
  feature_description: defineAsyncComponent(
    () => import("./FeatureDescription/index.vue"),
  ),
  hero: defineAsyncComponent(() => import("./Hero/index.vue")),
  image: defineAsyncComponent(() => import("./Image/index.vue")),
  image_cards: defineAsyncComponent(() => import("./ImageCards/index.vue")),
  logos_carousel: defineAsyncComponent(
    () => import("./LogosCarousel/index.vue"),
  ),
  product_list: defineAsyncComponent(() => import("./ProductList/index.vue")),
  quote: defineAsyncComponent(() => import("./Quote/index.vue")),
  text: defineAsyncComponent(() => import("./Text/index.vue")),
  text_with_image: defineAsyncComponent(
    () => import("./TextWithImage/index.vue"),
  ),
});
