<template>
  <h1>{{ setName }} - {{ nbOwned }} ({{ nbOwnedFoil }}) / {{ nbCards }} cards - {{ ownedValue }} € / {{ maxValue }} €</h1>
  <div class="container">
    <span v-for="card in cards" v-bind:key="card.id">
      <CardDisplay :card="card"/>
    </span>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import mtgDataService from "@/services/MtgDataService";
import Card from "@/types/Card";
import CardDisplay from "@/components/CardDisplay.vue";

export default defineComponent({
  name: "CardList",
  components: {CardDisplay},
  props: ['setCode'],

  data() {
    return {
      setName: '',
      nbCards: 0,
      nbOwned: 0,
      nbOwnedFoil: 0,
      maxValue: 0,
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
              this.nbOwnedFoil = response.data.nbOwnedFoil;
              this.maxValue = response.data.maxValue;
              this.ownedValue = response.data.ownedValue;
              this.cards = response.data.cards
            }
        )
        .catch(error => console.error(error))
  }
})
</script>

<style scoped>
h1 {
  text-align: center;
}

.container {
  max-width: 1370px;
  margin: 10px 50px;
  display: flex;
  flex-wrap: wrap;
}
</style>
