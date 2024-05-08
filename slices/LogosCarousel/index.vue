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
    <Heading
      v-if="$prismic.asText(slice.primary.eyebrowheadline)"
      class="text-center mb-10"
    >
      {{ $prismic.asText(slice.primary.eyebrowheadline) }}
    </Heading>
    <div class="slider">
      <ul class="slider__track">
        <li
          v-for="item in slice.items"
          :key="item.image.url ?? undefined"
          class="slider__track__item"
        >
          <PrismicLink
            v-if="item.link"
            :field="item.link"
            class="font-semibold"
          >
            <PrismicImage :field="item.image" />
          </PrismicLink>
          <PrismicImage v-else :field="item.image" />
        </li>
      </ul>
    </div>
  </Bounded>
</template>

<style scoped lang="scss">
.slider {
  @apply w-full sm:w-[80%] max-w-[900px] mx-auto overflow-hidden relative;
  &::before,
  &::after {
    @apply absolute top-0 h-full z-10;
    width: 10rem;
    content: "";
  }
  &::before {
    @apply left-0 bg-gradient-to-r from-white to-transparent;
  }
  &::after {
    @apply right-0 bg-gradient-to-l from-white to-transparent;
  }
  &__track {
    @apply flex gap-x-3 items-center;
    &__item {
      @apply flex-1 h-full;
      animation: scrolling 12s linear infinite;
    }
  }
}

@keyframes scrolling {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-1 * 80vw * 3));
  }
}
</style>
