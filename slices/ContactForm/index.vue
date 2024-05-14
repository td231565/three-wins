<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { h } from "vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "vue-sonner";

/** Form */
const formSchema = toTypedSchema(
  z.object({
    name: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    content: z.string().min(2).max(50),
  })
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit((values) => {
  toast("Submit", {
    // description: `${JSON.stringify(values)}`,
    description: h(
      "pre",
      { class: "mt-2 w-[340px] rounded-md bg-slate-950 p-4" },
      h("code", { class: "text-white" }, JSON.stringify(values, null, 2))
    ),
  });
});

/** Sheet */
// const { data } = await allRows();
// onMounted(() => {
//   console.log(data);
// });

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ContactFormSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <Bounded as="section" class="bg-white">
    <form class="w-2/3 space-y-6" @submit.prevent="onSubmit">
      <FormField v-slot="{ componentField }" name="name">
        <FormItem>
          <FormLabel>姓名</FormLabel>
          <FormControl>
            <Input type="text" placeholder="shadcn" v-bind="componentField" />
          </FormControl>
          <!-- <FormDescription> This is your public display name. </FormDescription> -->
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input
              type="text"
              placeholder="xxx@yyy.com"
              v-bind="componentField"
            />
          </FormControl>
          <!-- <FormDescription> This is your public display name. </FormDescription> -->
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="content">
        <FormItem>
          <FormLabel>詢問內容</FormLabel>
          <FormControl>
            <Textarea placeholder="shadcn" v-bind="componentField" />
          </FormControl>
          <!-- <FormDescription> This is your public display name. </FormDescription> -->
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit">傳送</Button>
    </form>
  </Bounded>
</template>
