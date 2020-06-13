<template>
    <div class="section">
        <div class="section-title">
            {{$t('translation.productsTitleBest')}}
        </div>
        <div class="products products-carousel owl-carousel">
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
        console.log(this.products);

        this.$nextTick(() => {
            window.$(".products-carousel").owlCarousel({
                items: 5,
                dots: false,
                navText:["<div class='arrow arrow--left' style='display: none'></div>","<div class='arrow arrow--right'></div>"],
                responsive: {
                    0: {
                        items: 1.5,
                        nav: false,
                        loop: true,
                    },
                    768: {
                        items: 2,
                        nav: true,
                    },
                    992: {
                        items: 3,
                        nav: true,
                    },

                    1280: {
                        items: 4,
                        nav: true,
                    },
                },

                onTranslated: (e) => {
                    if (e.item.index !== 0) {
                        window.$('.products-carousel .arrow.arrow--left').removeAttr('style');
                    }

                    else {
                        window.$('.products-carousel .arrow.arrow--left').attr('style', 'display: none');
                    }
                }
            });
        });
    }
}
</script>
