<template>
    <div class="row d-block">
        <products />
        <new-products />
    </div>
</template>

<script>
import Products from './Products'
import NewProducts from './NewProducts'

export default {
    data() {
        return {

        }
    },

    components: {
        Products,
        NewProducts,
    }
}
</script>
