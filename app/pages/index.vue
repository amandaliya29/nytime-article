<template>
  <component
    v-for="(scene, index) in scenes"
    :key="index"
    :is="scene.component"
    v-bind="scene.props"
  />
</template>

<script setup>
import { scenes as rawScenes } from "~/contents/scenes";
const scenes = ref(rawScenes);
</script>
