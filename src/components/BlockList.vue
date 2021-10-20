<template>
  <div class="container">
    <div class="row row-cols-lg-6 g-2 g-lg-2">
      <div v-for="block in blocks" :key="block.code">
        <div class="border bg-light">
          <img :src="block.icon" :alt="block.code">
          <p>{{ block.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Block from '@/types/Block';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'BlockList',
  props: {
    blocks: {
      type: Array as PropType<Block[]>,
      required: true
    }
  },
});
</script>

<style scoped>
img {
  height: 50px;
}
</style>