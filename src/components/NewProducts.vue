<template>
    <div class="section">
        <div class="section-title">
            {{$t('translation.productsTitleNew')}}
        </div>
        <div class="products">
            <card />
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

    components: {
        Card,
    }
}
</script>
