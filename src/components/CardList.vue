<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <span v-for="card in cards" v-bind:key="card.id">
          <img :src="card.image" :alt="card.name">
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import mtgDataService from "@/services/MtgDataService";
import Card from "@/types/Card";

export default defineComponent({
  name: "CardList",

  props: ['setCode'],

  data() {
    return {
      cards: [] as Card[],
    }
  },

  mounted() {
    mtgDataService.getSetCards(this.setCode)
        .then(response => {
              this.cards = response.data
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
}

img {
  height: 200px;
  margin-top: 5px;
  margin-right: 5px;
}
</style>
