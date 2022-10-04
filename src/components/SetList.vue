<template>
  <div class="fixed-top">
    <h1>{{ blockName }}</h1>
    <hr>
  </div>
  <div class="container">
    <div class="row row-cols-lg-6 g-2 g-lg-2">
      <div v-for="set in sets" v-bind:key="set.code">
        <div class="border bg-light" @click="handleClick(set.code)">
          <img :src="set.icon" :alt="set.code">
          <p>{{ set.name }} - {{ set.nbOwned }} / {{ set.nbCards }} </p>
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
  name: "SetList",
  props: ['blockCode'],

  data() {
    return {
      blockName: '',
      sets: [] as Set[],
    }
  },

  mounted() {
    mtgDataService.getSets(this.blockCode)
        .then(response => {
              this.blockName = response.data.blockName;
              this.sets = response.data.sets
            }
        )
        .catch(error => console.error(error))
  },

  methods: {
    handleClick(code: string) {
      this.$router.push(`/sets/${code}`)
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
