<template>
    <div class="rating-stars">
        <template v-for="(star, i) in stars">
            <div class="rating-stars__item" :key="i">
                <div :class="['rating-star', {
                    'rating-star--active': star.activeStar,
                    'rating-star--half': star.halfStar}]"
                >
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                starsCount: 5,
                stars: [],
            }
        },
        props: ['value'],

        mounted() {
            if(this.value !== undefined && this.value !== null) {
                let countActiveStars = this.value.toFixed();
                let countAfterPoint = this.value - parseInt(this.value);

                for (let i = 1; i <= this.starsCount; i++) {
                    if (i <= countActiveStars) {
                        this.stars.push({
                            activeStar: true,
                        });

                        if (i === parseInt(countActiveStars)) {
                            if (countAfterPoint > 0.2 && countAfterPoint < 0.5) {
                                this.stars.push({
                                    halfStar: true,
                                });

                                i++;
                            }
                        }

                    }
                    else {
                        this.stars.push({});
                    }
                }
            }
        },
    }
</script>
