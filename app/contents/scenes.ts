import type { Component } from "vue";
import FullscreenScrollStory from "~/components/FullscreenScrollStory.vue";

export const scenes = [
  {
    component: FullscreenScrollStory as Component,
    props: {
      src: "https://images.unsplash.com/photo-1621591745154-71faadf9b07e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Hero Image",
      articles: [
        `
        <p class="font-gelasio text-3xl"> Lorem ipsum dolor sit amet consectetur  <br/> adipisicing elit Consequuntur, </p>
        <p class="font-gelasio text-3xl mt-6"> Ipsum dolor sit amet consectetur <br/> Consequuntur ex expedita soluta </p>
        `,
        `
        <p class="capitalize text-[100px] font-fredoka leading-none"> My <br/> Brother's <br/> Keeper</p>
        `,
      ],
    },
  },
];
