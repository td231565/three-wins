<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ProductListSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const products = useProducts();
const list = computed(() => products.value?.results);

console.log(list);
</script>

<template>
  <Bounded as="section" class="bg-white">
    <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      <a
        v-for="item in list"
        :key="item.uid"
        :href="item.url ?? undefined"
        class="border p-4 cursor-pointer"
      >
        <img
          :src="item.data.og_image?.url ?? undefined"
          :alt="item.data.og_image?.alt ?? undefined"
        />
        <h3 class="mt-3">{{ item.data.title[0]?.text }}</h3>
      </a>
    </div>
  </Bounded>
</template>
