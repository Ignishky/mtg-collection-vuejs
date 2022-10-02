<template>
  <div>
    <img :class="{owned: card.isOwned && !card.isOwnedFoil, foil: card.isOwnedFoil}"
         :id="card.id" :src="card.image" :alt="card.name" @click="handleClick()"/>
    <div style="text-align: center;">{{ price }}</div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import Card from "@/types/Card";
import mtgDataService from "@/services/MtgDataService";

export default defineComponent({
  name: "CardDisplay",

  data() {
    return {
      delay: 700,
      clicks: 0,
      timer: 0,
    }
  },

  props: {
    card: {
      type: Object as PropType<Card>,
      required: true
    }
  },

  computed: {
    price() {
      let price;
      let cardPrice = this.card.price;
      if (cardPrice.eur && cardPrice.eur_foil) {
        price = `${cardPrice.eur.toFixed(2)} € / ${cardPrice.eur_foil.toFixed(2)} €`
      } else if (cardPrice.eur) {
        price = `${cardPrice.eur.toFixed(2)} €`
      } else if (cardPrice.eur_foil) {
        price = `${cardPrice.eur_foil.toFixed(2)} €`
      } else {
        price = '-'
      }
      return price;
    },
  },

  methods: {
    async handleClick() {
      this.clicks++;
      if (this.clicks === 1) {
        const self = this;
        this.timer = setTimeout(async () => {
          const response = await mtgDataService.addCardToCollection(self.card.id, false);
          self.card.isOwned = response.data.isOwned;
          self.card.isOwnedFoil = response.data.isOwnedFoil;
          self.clicks = 0
        }, this.delay);
      } else {
        clearTimeout(this.timer);
        const response = await mtgDataService.addCardToCollection(this.card.id, true);
        this.card.isOwned = response.data.isOwned;
        this.card.isOwnedFoil = response.data.isOwnedFoil;
        this.clicks = 0;
      }
    },
  }
})
</script>

<style scoped>
.owned {
  background: #ffa500;
}

.foil {
  background: #228b22;
}

img {
  background: #ffffff;
  padding: 5px;
  height: 200px;
  cursor: pointer;
}
</style>
