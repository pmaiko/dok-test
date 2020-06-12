<template>
    <article class="product-card">
        <a href="#" class="product-card__image-link">
            <img class="product-card__image" src="../assets/example.jpg" alt="">
            <div class="product-card__favorite" @click.prevent="isFavorite = !isFavorite">
                <div class="icon icon--favorite" :class="{'icon--favorite-active': isFavorite}"></div>
            </div>
        </a>

        <a href="" class="product-card__text-link">
            <div class="product-card__brand-name">
                Kroon
            </div>

            <div class="product-card__title">
                Моторное масло Dexos2 5W-30 Синтетическое, 1 л.
            </div>
        </a>

        <div class="product-card__rating">
            <star-rating  v-model="starRatingCount" />

            <div class="rating-count">
                (2 рекомендации)
            </div>
        </div>

        <div class="product-card__info-buy-block">
            <div class="product-card__price-wrap">
                <div class="product-card__price">
                    3 497 <span class="product-card__price-currency">грн</span>
                </div>

                <div class="product-card__available text-success">
                    Есть в наличии
                </div>
            </div>

            <button class="btn btn-primary btn-buy">Купить</button>
        </div>
    </article>
</template>

<script>
import StarRating from './StarRating'

export default {
    data() {
        return {
            starRatingCount: 5,
            isFavorite: false,
        }
    },

    components: {
        StarRating,
    }
}
</script>
