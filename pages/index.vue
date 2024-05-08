<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const { data: page } = useAsyncData("index", () =>
  prismic.client.getByUID("page", "page-home")
);

const settings = useSettings();
useHead({
  title: computed(() => prismic.asText(settings.value?.data.siteTitle)),
});
</script>

<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
