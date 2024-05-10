<script setup lang="ts">
import {
  type Content,
  type HTMLRichTextMapSerializer,
} from "@prismicio/client";

// The array passed to \`getSliceComponentProps\` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.HeroSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
const prismic = usePrismic();

const serializer: HTMLRichTextMapSerializer = {
  ...prismic.options.richTextSerializer,
  heading1: ({ children }) =>
    /* html */ `<h2 class="font-semibold leading-tight tracking-tight text-4xl sm:text-5xl mb-4 last:mb-0 sm:tracking-wide">${children}</h2>`,
};
</script>

<template>
  <section class="relative text-white">
    <figure class="absolute inset-0">
      <PrismicImage
        v-if="slice.primary.backgroundImage.url"
        :field="slice.primary.backgroundImage"
        class="pointer-events-none select-none object-cover opacity-90 h-full w-full block"
        style="clip-path: polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0)"
      />
    </figure>
    <Bounded y-padding="lg" class="relative">
      <div class="space-y-8 max-w-[610px] mx-auto">
        <PrismicRichText
          :field="slice.primary.caption"
          :html-serializer="serializer"
          wrapper="div"
        />
        <PrismicRichText
          :field="slice.primary.text"
          :html-serializer="serializer"
          wrapper="div"
        />
        <div class="w-full text-center">
          <PrismicLink
            v-if="
              slice.primary.buttonLink &&
              ('id' in slice.primary.buttonLink ||
                'url' in slice.primary.buttonLink)
            "
            :field="slice.primary.buttonLink"
            class="rounded-full bg-white px-14 py-3 font-medium inline-block"
          >
            <span
              class="inline-block bg-clip-text text-transparent bg-[#1A42BC]/[0.6] bg-gradient-to-tr from-transparent to-[#1A42BC] text-xl tracking-wider"
              >{{ slice.primary.buttonText }}</span
            >
          </PrismicLink>
        </div>
      </div>
    </Bounded>
  </section>
</template>
