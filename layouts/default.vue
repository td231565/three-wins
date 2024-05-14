<script setup>
import { Toaster } from "@/components/ui/sonner";
</script>

<template>
  <div class="text-slate-800">
    <Header />
    <slot />
    <Toaster />
  </div>
</template>
