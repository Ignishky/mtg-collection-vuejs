<template>
  <div :class="{owned: card.isOwned && !card.isFoiled, foiled: card.isFoiled}">
    <img :id="card.id" :src="card.image" :alt="card.name" @click="handleClick()"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
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
      this.clicks++
      if (this.clicks === 1) {
        var self = this
        this.timer = setTimeout(function () {
          mtgDataService.addCardToCollection(self.card.id, false)
          .then(value => {
            console.log(value.data);
            //self.card.isOwned = value.data[0].isOwned;
          });
          self.clicks = 0
        }, this.delay);
      } else {
        clearTimeout(this.timer);
        mtgDataService.addCardToCollection(this.card.id, true)
            .then(value => {
             // this.card.isOwned = value.data[0].isOwned;
              //this.card.isFoiled = value.data[0].isFoiled;
            })
        ;
        this.clicks = 0;
      }
    },
  }
})
</script>

<style scoped>
div {
  flex: 1 0 11%;
}

.owned {
  border: 5px solid orange;
  width: 150px;
}

.foiled {
  border: 5px solid crimson;
  width: 150px;
}

img {
  height: 200px;
  margin-top: 5px;
  margin-right: 5px;
  cursor: pointer;
}
</style>
