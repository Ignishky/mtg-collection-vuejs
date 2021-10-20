<template>
  <BlockList :blocks="blocks"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BlockList from "@/components/BlockList.vue";
import MtgDataService from "@/services/MtgDataService";
import Block from "@/types/Block"
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: 'App',

  components: {BlockList},

  data() {
    return {
      blocks: [] as Block[]
    }
  },

  methods: {
    retrieveBlocks() {
      MtgDataService.getAllBlocks()
          .then((response: ResponseData) => {
            this.blocks = response.data
          })
          .catch((reason: Error) => {
            console.error(reason)
          })
    }
  },

  mounted() {
    this.retrieveBlocks();
  },
});
</script>

<style>

</style>
