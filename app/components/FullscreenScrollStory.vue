<template>
  <div class="relative">
    <div class="sticky top-0 h-screen overflow-hidden">
      <img :src="src" :alt="alt" class="w-full h-full object-cover" />

      <div
        v-for="(block, index) in articles"
        :key="index"
        :ref="(el) => (textBlocks[index] = el)"
        class="absolute bottom-16 left-24 max-w-xl text-white z-10 opacity-0"
      >
        <div v-html="block"></div>
      </div>
    </div>

    <!-- Scroll Trigger Zone -->
    <template v-if="articles">
      <div
        v-for="(step, index) in articles.length - 1"
        :key="'trigger-' + index"
        class="h-[120vh] bg-black"
        :ref="(el) => (scrollTriggers[index] = el)"
      ></div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, shallowRef } from "vue";
import gsap from "gsap";
import scrollama, { ScrollamaAPI } from "scrollama";

interface Article {
  text: string[];
}

defineProps<{
  src: string;
  alt: string;
  articles: Article[];
}>();

const textBlocks = shallowRef<HTMLElement[]>([]);
const scrollTriggers = shallowRef<HTMLElement[]>([]);

const scrollers: ScrollamaAPI[] = [];

onMounted(() => {
  if (textBlocks.value[0]) {
    gsap.to(textBlocks.value[0], {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  }

  scrollTriggers.value.forEach((trigger, index) => {
    const scroller = scrollama();

    scroller
      .setup({
        step: trigger,
        offset: 0.5,
        once: false,
      })
      .onStepEnter(() => {
        if (textBlocks.value[index]) {
          gsap.to(textBlocks.value[index], {
            opacity: 0,
            duration: 0.8,
          });
        }
        if (textBlocks.value[index + 1]) {
          gsap.to(textBlocks.value[index + 1], {
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
          });
        }
      })
      .onStepExit(() => {
        if (textBlocks.value[index]) {
          gsap.to(textBlocks.value[index], {
            opacity: 1,
            duration: 1,
          });
        }
        if (textBlocks.value[index + 1]) {
          gsap.to(textBlocks.value[index + 1], {
            opacity: 0,
            duration: 0.8,
          });
        }
      });

    scrollers.push(scroller);
  });
});

onBeforeUnmount(() => {
  scrollers.forEach((scroller) => scroller.destroy());
});
</script>
