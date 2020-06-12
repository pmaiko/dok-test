<template>
    <div class="section">
        <div class="section-title">
            Бестселлеры в категории автотовары и автохимия
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
