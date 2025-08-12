<template>
  <div class="relative">
    <!-- Outer container tall enough for overlap -->
    <div class="relative" ref="containerRef">
      <div class="sticky top-0 h-screen overflow-hidden">
        <img
          :src="src"
          :alt="alt"
          ref="imageRef"
          class="w-full h-full object-cover"
        />

        <!-- Text blocks -->
        <div
          v-for="(block, index) in articles"
          :key="index"
          :ref="(el) => (textBlocks[index] = el)"
          class="absolute md:bottom-16 bottom-8 left-0 max-w-xl text-white z-10 opacity-0 container md:px-16 px-4"
        >
          <div v-html="block"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, shallowRef, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import scrollama, { ScrollamaAPI } from "scrollama";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps<{
  src: string;
  alt: string;
  articles: string[];
}>();

const textBlocks = shallowRef<HTMLElement[]>([]);
const imageRef = ref<HTMLElement | null>(null);
const containerRef = ref<HTMLElement | null>(null);

const scrollers: ScrollamaAPI[] = [];

onMounted(() => {
  // Initial first text fade in
  if (textBlocks.value[0]) {
    gsap.to(textBlocks.value[0], {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  }

  // Overlap fade-out when next section starts coming
  ScrollTrigger.create({
    trigger: containerRef.value,
    start: "top top",
    end: "bottom top",
    scrub: true,
    onUpdate: (self) => {
      gsap.to(imageRef.value, { opacity: 1 - self.progress });
    },
  });

  // Text block scroll switching
  props.articles.forEach((_, index) => {
    const triggerElement = document.createElement("div");
    triggerElement.style.height = "10vh";
    containerRef.value?.appendChild(triggerElement);

    const scroller = scrollama();
    scroller
      .setup({
        step: triggerElement,
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
      });

    scrollers.push(scroller);
  });
});

onBeforeUnmount(() => {
  scrollers.forEach((scroller) => scroller.destroy());
});
</script>
