<template>
  <div>
    <img :class="{owned: card.isOwned && !card.isFoiled, foiled: card.isFoiled}"
         :id="card.id" :src="card.image" :alt="card.name" @click="handleClick()"/>
    <div style="text-align: center;">{{ card.price.eur }} / {{ card.price.eur_foil }}</div>
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

  methods: {
    handleClick() {
      this.clicks++;
      if (this.clicks === 1) {
        const self = this;
        this.timer = setTimeout(() => {
          mtgDataService.addCardToCollection(self.card.id, false);
          self.clicks = 0
        }, this.delay);
      } else {
        clearTimeout(this.timer);
        mtgDataService.addCardToCollection(this.card.id, true);
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

.foiled {
  background: #228b22;
}

img {
  background: #ffffff;
  padding: 5px;
  height: 200px;
  cursor: pointer;
}
</style>
