<template>
  <div class="container">
    <span v-for="card in cards" v-bind:key="card.id">
      <CardDisplay :card="card"/>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import mtgDataService from "@/services/MtgDataService";
import Card from "@/types/Card";
import CardDisplay from "@/components/CardDisplay.vue";

export default defineComponent({
  name: "CardList",
  components: {CardDisplay},
  props: ['setCode'],

  data() {
    return {
      cards: [] as Card[],
    }
  },

  mounted() {
    mtgDataService.getSetCards(this.setCode)
        .then(response => {
              this.cards = response.data.cards
            }
        )
        .catch(error => console.error(error))
  }
})
</script>

<style scoped>
.container {
  max-width: 1370px;
  margin: 10px 50px;
  display: flex;
  flex-wrap: wrap;
}
</style>
