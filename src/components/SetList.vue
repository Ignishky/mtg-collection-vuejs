<template>
  <div class="container">
    <div class="row row-cols-lg-6 g-2 g-lg-2">
      <div v-for="set in sets" v-bind:key="set.code">
        <div class="border bg-light" @click="handleClick(set.code)">
          <img :src="set.icon" :alt="set.code">
          <p>{{ set.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import mtgDataService from '@/services/MtgDataService'
import Set from "@/types/Set";

export default defineComponent({
  name: "SetList",

  data() {
    return {
      sets: [] as Set[],
    }
  },

  mounted() {
    mtgDataService.getAllSets()
        .then(response => {
              this.sets = response.data
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
.container{
  margin-top: 10px;
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
}
</style>