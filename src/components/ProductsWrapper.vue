<template>
    <div class="row d-block">
        <products :sectionTitle="$t('translation.productsTitleBest')"
                  :products="products"
                  el="products-carousel"

        />

        <products :sectionTitle="$t('translation.productsTitleNew')"
                  :products="newProducts"
                  el="products-new-carousel"

        />
    </div>
</template>

<script>
import Products from './Products'
import { creteProductSlider } from '../script';
import {mapGetters} from 'vuex'

export default {
    data() {
        return {

        }
    },

    computed: {
        ...mapGetters([
            'products',
            'newProducts',
        ]),
    },

    components: {
        Products,
    },

    async mounted() {
        await this.$store.dispatch('getProducts');
        this.$store.dispatch('sortProducts');


        this.$nextTick(() => {
            creteProductSlider('.products-carousel');
            creteProductSlider('.products-new-carousel');
        });
    }
}
</script>
