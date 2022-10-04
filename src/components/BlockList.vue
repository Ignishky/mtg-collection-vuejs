<template>
  <div class="fixed-top">
    <h1>MTG-COLLECTION</h1>
    <hr>
  </div>
  <div class="container">
    <div class="row row-cols-lg-6 g-2 g-lg-2">
      <div v-for="block in blocks" v-bind:key="block.code">
        <div class="border bg-light" @click="handleClick(block.code)">
          <img :src="block.icon" :alt="block.code">
          <p>{{ block.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import mtgDataService from '@/services/MtgDataService'
import Set from "@/types/Set";

export default defineComponent({
  name: "BlockList",

  data() {
    return {
      blocks: [] as Set[],
    }
  },

  mounted() {
    mtgDataService.getAllBlocks()
        .then(response => {
              this.blocks = response.data.blocks
            }
        )
        .catch(error => console.error(error))
  },

  methods: {
    handleClick(code: string) {
      this.$router.push(`/blocks/${code}`)
    }
  }
})
</script>

<style scoped>
.fixed-top {
  background: white;
}

h1 {
  text-align: center;
}

.container {
  margin-top: 90px;
  margin-bottom: 10px;
}

img {
  height: 50px;
  margin-top: -10px;
  margin-right: 10px;
}

.border {
  padding-left: 5px;
  height: 100px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
