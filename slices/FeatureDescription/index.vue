<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.FeatureDescriptionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :style="`${
      slice.primary.top_shape &&
      'clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0, 50% 10%, 100% 0);'
    }
      ${slice.primary.background_color && 'background-color: ' + slice.primary.background_color + ';'}`"
  >
    <Bounded y-padding="lg" class="relative">
      <div class="">
        <!-- Title -->
        <h2
          class="text-4xl text-center font-black tracking-wide text-gradient-primary"
        >
          {{ slice.primary.title }}
        </h2>
        <!-- Sub Title -->
        <h3
          class="text-2xl text-center font-black tracking-wide text-gradient-primary mt-5"
        >
          {{ slice.primary.sub_title }}
        </h3>
        <!-- Text -->
        <h3
          v-if="slice.primary.text"
          class="text-xl text-center font-bold tracking-wide text-primary mt-5"
        >
          {{ slice.primary.text }}
        </h3>
        <ul class="grid grid-cols-1 sm:grid-cols-3 gap-24 mt-8">
          <li
            v-for="(item, idx) in slice.items"
            :key="Math.random() + idx"
            class="text-center"
          >
            <template v-if="slice.variation === 'default'">
              <img
                src="/assets/image/featureDescription/bubble.svg"
                :alt="item.description ?? ''"
                class="block"
              />
              <!-- <div
              class="bubble-container bg-gradient-to-tr from-transparent to-[#1A42BC]"
            >
              <div class="bubble mx-auto mb-3"></div>
            </div> -->
              <span
                class="mt-8 inline-block text-2xl font-bold tracking-wider"
                >{{ item.description }}</span
              >
            </template>
            <template v-else-if="slice.variation === 'leaf'">
              <div
                class="w-full aspect-square bg-[#E0EDFF] rounded-tl-[50%] rounded-br-[50%] flex justify-center items-center"
              >
                <span class="text-2xl font-bold tracking-wider">{{
                  item.description
                }}</span>
              </div>
            </template>
          </li>
        </ul>
        <div class="flex justify-center mt-8">
          <Button
            class="bg-gradient-primary text-white font-black tracking-wider text-2xl py-6 px-10 rounded-full"
            >立即預約</Button
          >
        </div>
      </div>
    </Bounded>
  </section>
</template>

<style>
.bubble {
  color: #fff;
  font-size: 18px;
  width: 300px;
  height: 300px;
  text-align: center;
}
.bubble {
  /* tail dimension */
  --b: 6em; /* base */
  --h: 3em; /* height */
  --t: 0.5; /* thickness (from 0 to 1) */

  --p: 84%; /* main position (0%:left 100%:right) */
  --r: 99rem; /* the radius */

  padding: 1em;
  border-radius: var(--r);
  background: #4ecdc4; /* the main color */
  position: relative;
  z-index: 2;
  @apply bg-[#E0EDFF];
  /* --_m: 100% / var(--s) var(--s) no-repeat;
  --_p: clamp(
    var(--r) + 3 * var(--s) / 2,
    var(--p),
    100% - var(--r) - 3 * var(--s) / 2
  );
  -webkit-mask:
    linear-gradient(#000 0 0) padding-box,
    radial-gradient(100% 100% at 100% 100%, #0000 99%, #000 102%)
      calc(var(--_p) + var(--s) / 2) var(--_m),
    radial-gradient(100% 100% at 0 100%, #0000 99%, #000 102%)
      calc(var(--_p) - var(--s) / 2) var(--_m); */
}
.bubble:before {
  content: "";
  position: absolute;
  top: 76%;
  left: 72%;
  width: var(--b);
  height: var(--h);
  background: inherit;
  border-bottom-left-radius: 100%;
  -webkit-mask: radial-gradient(
    calc(var(--t) * 100%) 105% at 100% 0,
    #0000 99%,
    #000 101%
  );
  z-index: -1;
}
</style>
