<template>
  <h1>{{ setName }} #cards : {{ nbOwnedCards }} ({{ nbOwnedFoiled }}) / {{ cards.length }}</h1>
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
      cards: [] as Card[],
    }
  },

  computed: {
    nbOwnedCards() {
      return this.cards.filter(card => card.isOwned).length;
    },

    nbOwnedFoiled() {
      return this.cards.filter(card => card.isFoiled).length;
    }
  },

  mounted() {
    mtgDataService.getSetCards(this.setCode)
        .then(response => {
              this.setName = response.data.name;
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
