<template>
  <div class="fixed-top">
    <h1>MTG-COLLECTION</h1>
    <p>{{ nbOwned }} ({{ nbOwnedFoil }}) / {{ nbCards }} cards</p>
    <hr>
  </div>
  <div class="container">
    <div class="row row-cols-lg-6 g-2 g-lg-2">
      <div v-for="block in blocks" v-bind:key="block.code">
        <div class="border bg-light" @click="handleClick(block.code)">
          <img :src="block.icon" :alt="block.code">
          <div class="label">
            <span>{{ block.name }}</span>
            <br/>
            <div class="progress">
              <div class="progress-bar bg-warning" role="progressbar" :style="{width:progress()}" aria-valuemin="0"
                   :aria-valuenow="block.nbOwned-block.nbOwnedFoil" :aria-valuemax="block.nbCards"></div>
              <div class="progress-bar bg-success" role="progressbar" :style="{width:progressFoil()}" aria-valuemin="0"
                   :aria-valuenow="block.nbOwnedFoil" :aria-valuemax="block.nbCards"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import mtgDataService from '@/services/MtgDataService'
import Set from '@/types/Set';

export default defineComponent({
  name: 'BlockList',

  data() {
    return {
      nbOwned: 0,
      nbOwnedFoil: 0,
      nbCards: 0,
      blocks: [] as Set[],
    }
  },

  mounted() {
    mtgDataService.getAllBlocks()
        .then(response => {
              this.nbOwned = response.data.nbOwned;
              this.nbOwnedFoil = response.data.nbOwnedFoil;
              this.nbCards = response.data.nbCards;
              this.blocks = response.data.blocks
            }
        )
        .catch(error => console.error(error))
  },

  methods: {
    handleClick(code: string) {
      this.$router.push(`/blocks/${code}`)
    },

    progress() {
      return (this.nbOwned - this.nbOwnedFoil) / this.nbCards * 100 + '%';
    },

    progressFoil() {
      return this.nbOwnedFoil / this.nbCards * 100 + '%';
    }
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
