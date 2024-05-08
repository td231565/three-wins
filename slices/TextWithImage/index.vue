<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to \`getSliceComponentProps\` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TextWithImageSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <Bounded as="section" class="bg-white">
    <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      <div>
        <PrismicRichText :field="slice.primary.text" />
        <PrismicLink
          v-if="
            'buttonLink' in slice.primary &&
            slice.primary.buttonLink &&
            ('id' in slice.primary.buttonLink ||
              'url' in slice.primary.buttonLink)
          "
          :field="slice.primary.buttonLink"
          class="bg-[#1A42BC]/[0.6] bg-gradient-to-tr from-transparent to-[#1A42BC] rounded-full px-5 py-3 font-medium text-white"
        >
          {{ slice.primary.buttonText }}
        </PrismicLink>
      </div>
      <div>
        <div v-if="slice.primary.image.url" class="bg-gray-100">
          <PrismicImage :field="slice.primary.image" />
        </div>
      </div>
    </div>
  </Bounded>
</template>
