<template>
    <div class="section">
        <div class="section-title">
            {{sectionTitle}}
        </div>
        <div :class="el"
             class="products owl-carousel">
            <template v-for="(product, key) in products">
                <card :key="key"
                      :brandName="product.brand_name"
                      :available="parseFloat(product.available)"
                      :price="product.price"
                      :productTitle="product.product_title"
                      :rating="parseFloat(product.rating)"
                      :ratingCount="parseFloat(product.rating_count)"
                      :productImageAlt="product.product_image_alt"
                />
            </template>

        </div>
    </div>
</template>

<script>
import Card from './ProductCard'

export default {
    data() {
        return {
        }
    },

    props: [
        'sectionTitle',
        'products',
        'el',
    ],

    components: {
        Card,
    },
}
</script>
