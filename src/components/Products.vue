<template>
    <div class="section">
        <div class="section-title">
            {{$t('translation.productsTitleBest')}}
        </div>
        <div class="products">
            <template v-for="(product, key) in products">
                <card :key="key"
                      :brandName="product.brand_name"
                      :available="parseFloat(product.available)"
                      :price="product.price"
                      :productTitle="product.product_title"
                      :rating="parseFloat(product.rating)"
                      :ratingCount="product.rating_count"
                      :productImageAlt="product.product_image_alt"
                />
            </template>

        </div>
    </div>
</template>

<script>
import Card from './ProductCard'
import {mapGetters} from 'vuex'

export default {
    data() {
        return {
        }
    },

    computed: {
        ...mapGetters(['products']),
    },

    components: {
        Card,
    },

    async mounted() {
        await this.$store.dispatch('getProducts');
        console.log(this.products)

    }
}
</script>
