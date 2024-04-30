<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.LogosCarouselSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <Bounded as="section" class="bg-white">
    <div class="grid gap-12">
      <Heading
        v-if="$prismic.asText(slice.primary.eyebrowheadline)"
        class="text-center"
      >
        {{ $prismic.asText(slice.primary.eyebrowheadline) }}
      </Heading>
      <ul class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <li
          v-for="item in slice.items"
          :key="item.image.url ?? undefined"
          class="grid gap-8"
        >
          <!-- <div
            v-if="item.image.url"
            class="bg-gray-100"
          >
            <PrismicImage
              :field="item.image"
            />
          </div> -->
          <div v-if="item.link && ('id' in item.link || 'url' in item.link)">
            <PrismicLink :field="item.link" class="font-semibold">
              <PrismicImage :field="item.image" />
            </PrismicLink>
          </div>
        </li>
      </ul>
    </div>
  </Bounded>
</template>
