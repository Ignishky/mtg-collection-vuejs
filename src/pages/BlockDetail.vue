<template>
  <div class="fixed-top">
    <h1>{{ blockName }}</h1>
    <p>{{ nbOwned }} ({{ nbFullyOwned }}) / {{ nbCards }} cards</p>
    <hr>
  </div>
  <div class="container">
    <div class="row row-cols-lg-6 g-2 g-lg-2">
      <div v-for="set in sets" :key="set.code">
        <SetDisplay :set="set" url='sets'/>
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
  name: 'BlockDetail',
  components: {SetDisplay},
  props: ['blockCode'],

  data() {
    return {
      blockName: '',
      nbOwned: 0,
      nbFullyOwned: 0,
      nbCards: 0,
      sets: [] as Set[],
    }
  },

  mounted() {
    mtgDataService.getSets(this.blockCode)
        .then(response => {
              this.blockName = response.data.blockName;
              this.nbOwned = response.data.nbOwned;
              this.nbFullyOwned = response.data.nbFullyOwned;
              this.nbCards = response.data.nbCards;
              this.sets = response.data.sets
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
