<template>
<div id="app"
     v-bind:class="{ fw: fw }">


  <b-container fluid
               class="text-center">

    <b-form-checkbox v-model="fw"
                     class="mt-5">
      Melhorado
    </b-form-checkbox>

    <b-form-select v-model="current"
                   :options="currentOptions"
                   style="max-width:450px"
                   class="mt-5 mb-5" />
  </b-container>

  <b-card no-body
          class="shadow-lg rounded-lg mb-5 my-cart">

    <template v-slot:header>
      <h4 class="text-center mb-0 font-weight-bold">Meu carrinho</h4>
    </template>

    <b-container fluid>
      <b-row v-for="item in currentItems.items"
             v-bind:key="item.uniqueId"
             align-v="center"
             class="cart-items mt-4 ml-2">
        <b-col cols="3"
               class="mr-auto item-thumbnail">
          <img :src="item.imageUrl"
               :alt="item.name"
               class="img-fluid" />
        </b-col>
        <b-col>

          <div class="remove-item">x</div>

          <h5 class="font-weight-bold">
            <div class="amount">{{ item.quantity }}x</div>
            {{ item.name }}
          </h5>

          <div class="categories">
            <div v-for="(categorie, index) in item.productCategories"
                 v-bind:key="index">
              {{ categorie }}
            </div>
          </div>

          <div class="price-normal">
            {{ item.price / 100 | currency }}
          </div>

          <div class="font-weight-bold price-total">
            {{ item.sellingPrice / 100 | currency }}
          </div>

          <div class="price-cut mr-1 mt-1 pr-1">
            {{ item.priceTags[0].value / 100 | currency }}
          </div>

        </b-col>
      </b-row>
    </b-container>

    <b-container fluid>
      <b-row class="total-price mt-4 mb-4 pt-4 ml-1 mr-1">
        <b-col cols="auto"
               class="mr-auto font-weight-bold">
          Total
        </b-col>
        <b-col cols="auto"
               class="font-weight-bold  text-right">
          <div class="price-cut text-right">
            <span>DESCONTOS</span> {{ currentItems.totalizers[1].value / 100 | currency }}
          </div>
          {{ priceTotal | currency }}
        </b-col>
      </b-row>
    </b-container>

    <b-alert v-if="priceTotal >= 10"
             show
             variant="success"
             class="font-weight-bold mr-auto ml-auto mb-4">
      Parabéns, sua compra tem frete grátis !
    </b-alert>

    <b-alert v-if="priceTotal < 10 && fw"
             show
             variant="info"
             class="font-weight-bold mr-auto ml-auto mb-4">
      Adicione mais {{ 10 - priceTotal | currency }} para ter frete grátis!
    </b-alert>

    <b-card-footer class="pt-4 pl-4 pr-4 pb-4">
      <b-button href="#"
                variant="primary"
                block
                class="font-weight-bold">
        Finalizar compra
      </b-button>
    </b-card-footer>

  </b-card>

</div>
</template>

<script>
import abaixo10 from './assets/abaixo-10-reais.json'
import acima10 from './assets/acima-10-reais.json'

export default {
  name: 'app',
  data() {
    return {
      fw: true,
      current: 'up',
      currentOptions: [{
          value: 'up',
          text: 'Tabela acima de R$10 (acima-10-reais.json)'
        },
        {
          value: 'down',
          text: 'Tabela abaixo de R$10 (abaixo-10-reais.json)'
        }
      ]
    }
  },
  computed: {
    currentItems: {
      get() {
        if (this.current == 'up') {
          return acima10;
        }
        else {
          return abaixo10;
        }
      }
    },
    priceTotal: {
      get() {
        return this.currentItems.value / 100;
      }
    }
  }
}
</script>

<style>
</style>
