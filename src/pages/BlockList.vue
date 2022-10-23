<template>
  <div class="fixed-top">
    <h1>MTG-COLLECTION</h1>
    <p>{{ nbOwned }} ({{ nbFoilOwned }}) / {{ nbCards }} cards</p>
    <hr>
  </div>
  <div class="container">
    <div class="row row-cols-lg-6 g-2 g-lg-2">
      <div v-for="block in blocks" :key="block.code">
        <SetDisplay :set="block" url='blocks'/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import mtgDataService from '@/services/MtgDataService'
import Set from '@/types/Set';
import SetDisplay from '@/components/SetDisplay.vue';

export default defineComponent({
  name: 'BlockList',
  components: {SetDisplay},

  data() {
    return {
      nbOwned: 0,
      nbFoilOwned: 0,
      nbCards: 0,
      blocks: [] as Set[],
    }
  },

  mounted() {
    mtgDataService.getAllBlocks()
        .then(response => {
              this.nbOwned = response.data.nbOwned;
              this.nbFoilOwned = response.data.nbFoilOwned;
              this.nbCards = response.data.nbCards;
              this.blocks = response.data.blocks
            }
        )
        .catch(error => console.error(error))
  }
})
</script>

<style scoped>
.fixed-top {
  background: #ffffff;
  text-align: center;
}

.container {
  margin-top: 120px;
  margin-bottom: 10px;
}
</style>
