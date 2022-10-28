<template>
  <div>
    <img :class="{ partial: isPartial, full: isFull }"
         :id="card.id" :src="card.image" :alt="card.name" @click="handleClick()"/>
    <div style="text-align: center;">{{ price }}</div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import Card from "@/types/Card";
import mtgDataService from "@/services/MtgDataService";

export default defineComponent({
  name: 'CardDisplay',

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
    isPartial() {
      return this.card.ownState === 'PARTIAL';
    },

    isFull() {
      return this.card.ownState === 'FULL';
    },

    price() {
      let price;
      let cardPrice = this.card.price;
      let nonFoilPrice = cardPrice.eur ? `${cardPrice.eur.toFixed(2)} €` : "-";
      let foilPrice = cardPrice.eur_foil ? `✨ ${cardPrice.eur_foil.toFixed(2)} €` : "-";

      let finishes = this.card.finishes;

      if (finishes.includes('NON_FOIL') && finishes.includes('FOIL')) {
        price = `${nonFoilPrice} / ${foilPrice}`
      } else if (finishes.includes('NON_FOIL')) {
        price = nonFoilPrice
      } else {
        price = foilPrice
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
          self.card.ownState = response.data.ownState;
          self.clicks = 0
        }, this.delay);
      } else {
        clearTimeout(this.timer);
        const response = await mtgDataService.addCardToCollection(this.card.id, true);
        this.card.ownState = response.data.ownState;
        this.clicks = 0;
      }
    },
  }
})
</script>

<style scoped>
.partial {
  background: #ffa500;
}

.full {
  background: #228b22;
}

img {
  background: #ffffff;
  padding: 5px;
  height: 250px;
  cursor: pointer;
}
</style>
