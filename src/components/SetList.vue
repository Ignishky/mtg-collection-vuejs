<template>
  <div class="fixed-top">
    <h1>{{ blockName }}</h1>
    <p>{{ nbOwned }} ({{ nbOwnedFoil }}) / {{ nbCards }} cards</p>
    <hr>
  </div>
  <div class="container">
    <div class="row row-cols-lg-6 g-2 g-lg-2">
      <div v-for="set in sets" v-bind:key="set.code">
        <div class="border bg-light" @click="handleClick(set.code)">
          <img :src="set.icon" :alt="set.code">
          <div class="label">
            <span>{{ set.name }}</span>
            <br/>
            <div class="progress">
              <div class="progress-bar bg-warning" role="progressbar" :style="{width:progress()}" aria-valuemin="0"
                   :aria-valuenow="set.nbOwned-set.nbOwnedFoil" :aria-valuemax="set.nbCards"></div>
              <div class="progress-bar bg-success" role="progressbar" :style="{width:progressFoil()}" aria-valuemin="0"
                   :aria-valuenow="set.nbOwnedFoil" :aria-valuemax="set.nbCards"></div>
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
  name: 'SetList',
  props: ['blockCode'],

  data() {
    return {
      blockName: '',
      nbOwned: 0,
      nbOwnedFoil: 0,
      nbCards: 0,
      sets: [] as Set[],
    }
  },

  mounted() {
    mtgDataService.getSets(this.blockCode)
        .then(response => {
              this.blockName = response.data.blockName;
              this.nbOwned = response.data.nbOwned;
              this.nbOwnedFoil = response.data.nbOwnedFoil;
              this.nbCards = response.data.nbCards;
              this.sets = response.data.sets
            }
        )
        .catch(error => console.error(error))
  },

  methods: {
    handleClick(code: string) {
      this.$router.push(`/sets/${code}`)
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
  height: 110px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}

.label {
  flex-direction: column;
}
</style>
