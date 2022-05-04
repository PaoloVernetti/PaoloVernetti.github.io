<template>
<div class="page">
  <Head>
    <Title>Paolo Vernetti - Главная страница</Title>
    <Meta name="description" content="Это личный веб-сайт о моем опыте в разработке, дизайне и почти обо всем, что меня интересует. Место, где я пишу о своем опыте в разработке, дизайне и почти обо всем, что меня интересует." />
    
    <Meta name="og:title" property="og:title" content="Paolo Vernetti - Главная страница" />
    <Meta name="og:type" property="og:type" content="website" />
    <Meta name="og:description" property="og:description" content="Это личный веб-сайт о моем опыте в разработке, дизайне и почти обо всем, что меня интересует. Место, где я пишу о своем опыте в разработке, дизайне и почти обо всем, что меня интересует." />
    <Meta name="og:url" property="og:url" content="https://paolovernetti.github.io/" />
    <Meta name="og:site_name" property="og:site_name" content="Paolo Vernetti - Личный сайт" />
    <Meta name="og:image" property="og:image" content="https://paolovernetti.github.io/seoimage.png" />
    
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png"/>
    <Meta name="apple-mobile-web-app-title" content="Paolo Vernetti - Главная страница" />
    
    <Meta robots="all" />
  </Head>
   
</div>
</template>

<script setup>
useHead({
  charset: 'utf-8'
})

async function kek() {
  let mm = await $fetch('/api/healthcare', { method: "get" });

  return mm;
}

onMounted(() => {
  kek().then(res => {
    console.log(res);
  })
}),

defineComponent({
  name: "Index"
})
</script>