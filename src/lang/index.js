import Vue from 'vue';
import VueI18n from 'vue-i18n';

import ru from './ru/ui';

Vue.use(VueI18n);

document.querySelector('html').setAttribute('lang', 'ru');
export default new VueI18n({
    locale: 'ru',
    messages: {
        ru,
    },
});
