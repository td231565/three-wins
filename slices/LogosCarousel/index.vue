<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.LogosCarouselSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const displayCount = 3;
const sliderItems = computed(() => [
  ...props.slice.items,
  ...props.slice.items.slice(0, displayCount),
]);

const sliderRef = ref();
onMounted(() => {
  sliderRef.value.style.setProperty("--items-count", props.slice.items.length);
  sliderRef.value.style.setProperty("--item-displayed", displayCount);
});
</script>

<template>
  <Bounded as="section" class="bg-white">
    <Heading
      v-if="$prismic.asText(slice.primary.eyebrowheadline)"
      class="text-center mb-10"
    >
      {{ $prismic.asText(slice.primary.eyebrowheadline) }}
    </Heading>
    <div ref="sliderRef" class="slider">
      <ul class="slider__track">
        <li
          v-for="item in sliderItems"
          :key="item.image.url ?? undefined"
          class="slider__track__item"
        >
          <PrismicLink v-if="item.link" :field="item.link" class="block">
            <PrismicImage :field="item.image" class="block w-full" />
          </PrismicLink>
          <PrismicImage v-else :field="item.image" />
        </li>
      </ul>
    </div>
  </Bounded>
</template>

<style scoped lang="scss">
.slider {
  --slider-width: 80vw;
  // --items-count: define by js
  // --item-displayed: 3;
  --item-width: calc(var(--slider-width) / var(--item-displayed));
  --animation-duration: calc(var(--items-count) * 3s);

  width: var(--slider-width);
  @apply mx-auto overflow-hidden relative;

  &::before,
  &::after {
    @apply absolute top-0 h-full z-10 w-[10rem] content-[''];
  }
  &::before {
    @apply left-0 bg-gradient-to-r from-white to-transparent;
  }
  &::after {
    @apply right-0 bg-gradient-to-l from-white to-transparent;
  }

  &__track {
    @apply flex items-center;
    animation: scrolling var(--animation-duration) linear infinite;
    &:hover {
      animation-play-state: paused;
    }

    &__item {
      width: var(--item-width);
      @apply max-h-full flex justify-center items-center shrink-0 whitespace-nowrap;
    }
  }
}

@media (min-width: 1125px) {
  .slider {
    --slider-width: 900px;
  }
}

@keyframes scrolling {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-1 * var(--item-width) * var(--items-count)));
  }
}
</style>
