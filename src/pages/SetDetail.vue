<template>
  <div class="fixed-top">
    <h1>{{ setName }}</h1>
    <p>{{ nbOwned }} ({{ nbFullyOwned }}) / {{ nbCards }} cards - {{ ownedValue }} € / {{ fullValue }} €</p>
    <hr>
  </div>
  <div class="container">
    <span v-for="card in cards" :key="card.id">
      <CardDisplay :card="card"/>
    </span>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import mtgDataService from '@/services/MtgDataService';
import Card from '@/types/Card';
import CardDisplay from '@/components/CardDisplay.vue';

export default defineComponent({
  name: 'SetDetail',
  components: {CardDisplay},
  props: ['setCode'],

  data() {
    return {
      setName: '',
      nbCards: 0,
      nbOwned: 0,
      nbFullyOwned: 0,
      fullValue: 0,
      ownedValue: 0,
      cards: [] as Card[],
    }
  },

  mounted() {
    mtgDataService.getSetCards(this.setCode)
        .then(response => {
              this.setName = response.data.name;
              this.nbCards = response.data.nbCards;
              this.nbOwned = response.data.nbOwned;
              this.nbFullyOwned = response.data.nbFullyOwned;
              this.fullValue = response.data.fullValue;
              this.ownedValue = response.data.ownedValue;
              this.cards = response.data.cards
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
  max-width: 1750px;
  margin: 115px 50px;
  display: flex;
  flex-wrap: wrap;
}
</style>
