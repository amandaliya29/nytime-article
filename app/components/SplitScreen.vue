<template>
  <div class="bg-gray-100">
    <section class="min-h-screen flex items-center container">
      <div
        class="container px-16 mx-auto flex"
        :class="{ 'flex-row-reverse': visual.align === 'left' }"
      >
        <!-- Text Column -->
        <div
          class="w-full flex flex-col"
          :class="visual.align == 'left' ? 'items-end' : ''"
        >
          <div
            class="space-y-6 px-4 py-48 max-w-sm flex flex-col"
            ref="textRef"
          >
            <p
              v-for="(article, idx) in articles"
              :key="idx"
              class="font-gelasio text-xl"
            >
              {{ article }}
            </p>
          </div>
        </div>

        <!-- Image Column -->
        <div class="relative px-4 w-full">
          <div class="sticky top-0 h-screen flex flex-col justify-center">
            <img
              ref="imageRef"
              :src="visual.src"
              :alt="visual.alt"
              class="w-full h-auto object-cover shadow-lg"
              :class="visual.class"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Props for dynamic content
const props = defineProps({
  visual: {
    type: Object,
    required: true,
  },
  articles: {
    type: Array,
    required: true,
  },
});

const textRef = ref(null);
const imageRef = ref(null);

onMounted(() => {
  // Text animation
  gsap.from(textRef.value, {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: textRef.value,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Image fade in/out
  gsap.fromTo(
    imageRef.value,
    { opacity: 0 },
    {
      opacity: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: imageRef.value,
        start: "top 80%",
        end: "bottom 50%",
        toggleActions: "play reverse play reverse",
      },
    }
  );
});
</script>
