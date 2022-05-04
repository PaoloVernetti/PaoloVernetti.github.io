<template>
  <p style="color: red;">
    this is index page
  </p>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      htmlAttrs: {
        lang: this.$nuxt.$i18n.locale
      },
      title: 'Paolo Vernetti - ' + this.$t(`nav.${this.currentRouteName}.title`),
      meta: [{
          hid: 'description',
          name: 'description',
          content: this.$t(`nav.${this.currentRouteName}.description`)
        },
        {
          charset: 'utf-8'
        },
        {
          robots: "all"
        },
        {
          hid: "og:title",
          name: "og:title",
          property: "og:title",
          content: "Paolo Vernetti - " + this.$t(`nav.${this.currentRouteName}.title`),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: "Paolo Vernetti - " + this.$t(`nav.${this.currentRouteName}.description`),
        },
        {
          hid: "og:url",
          name: "og:url",
          property: "og:url",
          content: "https://paolovernetti.github.io" + this.currentRoutePath
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          property: "og:site_name",
          content: this.$t('sitename')
        },
        {
          hid: "og:image",
          name: "og:image",
          content: "https://paolovernetti.github.io/metaimage.png"
        }
      ]
    }
  },
  computed: {
    currentRoutePath() {
      return this.$nuxt.$route.path;
    },
    currentRouteName() {
      return this.$nuxt.$route.name.match(/([a-z]+)/)[0]
    }
  },
  mounted() {

  },
}
</script>
