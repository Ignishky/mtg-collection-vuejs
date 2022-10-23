<template>
  <div class="border bg-light" @click="handleClick(set.code)">
    <img :src="set.icon" :alt="set.code">
    <div class="flex-column">
      <span>{{ set.name }}</span>
      <br/>
      <div class="progress">
        <div class="progress-bar bg-warning" role="progressbar" :style="{width:progress()}" aria-valuemin="0"
             :aria-valuenow="set.nbOwned-set.nbFoilOwned" :aria-valuemax="set.nbCards"></div>
        <div class="progress-bar bg-success" role="progressbar" :style="{width:progressFoil()}" aria-valuemin="0"
             :aria-valuenow="set.nbFoilOwned" :aria-valuemax="set.nbCards"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import Set from '@/types/Set';

export default defineComponent({
  name: 'SetDisplay',

  props: {
    set: {
      type: Object as PropType<Set>,
      required: true
    },
    url: {
      type: String,
      required: true
    },
  },

  methods: {
    handleClick(code: string) {
      this.$router.push(`/${this.url}/${code}`)
    },

    progress() {
      return (this.set.nbOwned - this.set.nbFoilOwned) / this.set.nbCards * 100 + '%';
    },

    progressFoil() {
      return this.set.nbFoilOwned / this.set.nbCards * 100 + '%';
    }
  }
})
</script>

<style scoped>
img {
  height: 50px;
  margin-top: -10px;
  margin-right: 10px;
}

.border {
  padding-left: 5px;
  height: 110px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>