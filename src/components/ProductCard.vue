<template>
    <article class="product-card">
        <div class="product-card__info-product">
            <a href="#" class="product-card__image-link">
                <img class="product-card__image" src="../assets/example.jpg" :alt="productImageAlt">
                <div class="product-card__favorite" @click.prevent="isFavorite = !isFavorite">
                    <div class="icon icon--favorite" :class="{'icon--favorite-active': isFavorite}"></div>
                </div>
            </a>

            <a href="" class="product-card__text-link">
                <div class="product-card__brand-name">
                    {{ brandName }}
                </div>

                <div class="product-card__title">
                    {{ productTitle }}
                </div>
            </a>
        </div>

        <div class="product-card__info-buy">
            <div v-if="rating && ratingCount" class="product-card__rating">
                <star-rating  v-model="rating" />

                <div class="rating-count">
                    ({{ ratingCount }} <span>{{ ratingCountText }}</span>)
                </div>
            </div>
            <div class="product-card__buy-wrap">
                <div class="product-card__price-wrap">
                    <div class="product-card__price">
                        {{price}} <span class="product-card__price-currency">{{$t('translation.grn')}}</span>
                    </div>

                    <template v-if="available === 1">
                        <div class="product-card__available text-success">
                            {{$t('translation.areAvailable')}}
                        </div>
                    </template>
                    <template v-else>
                        <div class="product-card__available">
                            {{$t('translation.onOrder')}}
                        </div>
                    </template>
                </div>

                <button class="btn btn-primary btn-buy">{{$t('translation.buy')}}</button>
            </div>
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

    computed: {
        ratingCountText() {
            let n = (this.ratingCount);
            let text = [
                this.$t('translation.recommendation'),
                this.$t('translation.recommendations'),
                this.$t('translation.ofRecommendations')
            ];
            n = Math.abs(n) % 100;
            let n1 = n % 10;

            if (n > 10 && n < 20) {
                return text[2];
            }
            if (n1 > 1 && n1 < 5) {
                return text[1];
            }
            if (n1 == 1) {
                return text[0];
            }

            return text[2];
        }
    },

    props: [
        'brandName',
        'productTitle',
        'rating',
        'ratingCount',
        'price',
        'available',
        'productImageAlt',
    ],

    components: {
        StarRating,
    }
}
</script>
