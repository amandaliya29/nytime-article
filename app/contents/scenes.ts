import type { Component } from "vue";
import FullscreenScrollStory from "~/components/FullscreenScrollStory.vue";
import SplitScreen from "~/components/SplitScreen.vue";

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
  {
    component: SplitScreen as Component,
    props: {
      visual: {
        src: "https://images.unsplash.com/photo-1704615486452-8a027c6b3b4c?q=80&w=735&auto=format&fit=crop",
        alt: "Article image 1",
        class: "max-w-md",
        align: "right",
      },
      articles: [
        `Hours after my mother took her last breath on earth Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Veritatis dolorum
          aperiam ad voluptatibus voluptates reiciendis iure nisi, unde quis
          minus, consequatur et dolore vero facere. Libero recusandae quasi
          aliquid expedita? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Delectus ea quis saepe ipsum odit debitis natus
          qui et maxime fugiat. Magni accusamus aperiam ad sed voluptatibus
          non modi. Labore, unde!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          dolorum voluptate amet alias similique, minus facilis quis dicta
          iure exercitationem nobis. Eos officiis alias ratione deserunt
          ullam perferendis, nam numquam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nulla explicabo quis dolores facere
          repellendus saepe doloremque ea exercitationem? Beatae, officiis
          vitae aperiam animi aliquam quis facere veniam quaerat asperiores
          adipisci. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Eveniet cupiditate nostrum quia voluptatum, tempora harum
          sunt, optio cum, magnam iusto ipsum recusandae facere culpa
          deserunt tenetur atque amet aut mollitia?`,
      ],
    },
  },
  {
    component: SplitScreen as Component,
    props: {
      visual: {
        src: "https://images.unsplash.com/photo-1754079132679-d9bbe1ba79cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Article image 1",
        class: "max-w-screen-md",
        align: "left",
      },
      articles: [
        `Hours after my mother took her last breath on earth Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Veritatis dolorum
          aperiam ad voluptatibus voluptates reiciendis iure nisi, unde quis
          minus, consequatur et dolore vero facere. Libero recusandae quasi
          aliquid expedita? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Delectus ea quis saepe ipsum odit debitis natus
          qui et maxime fugiat. Magni accusamus aperiam ad sed voluptatibus
          non modi. Labore, unde!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          dolorum voluptate amet alias similique, minus facilis quis dicta
          iure exercitationem nobis. Eos officiis alias ratione deserunt
          ullam perferendis, nam numquam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nulla explicabo quis dolores facere
          repellendus saepe doloremque ea exercitationem? Beatae, officiis
          vitae aperiam animi aliquam quis facere veniam quaerat asperiores
          adipisci. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Eveniet cupiditate nostrum quia voluptatum, tempora harum
          sunt, optio cum, magnam iusto ipsum recusandae facere culpa
          deserunt tenetur atque amet aut mollitia?`,
      ],
    },
  },
];
