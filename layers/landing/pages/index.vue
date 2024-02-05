<script setup lang="ts">
definePageMeta({
  title: 'The Nuxt & Tailwind CSS dashboard system',
  description:
    'Nuxt & Tailwind CSS dashboard system template that comes with 100+ prebuilt pages and 40+ custom UI components.',
  breadcrumb: {
    label: 'Tairo',
  },
  layout: 'empty',
})
</script>

<template>
  <div>
    <!-- <LandingHero />
    <LandingCustomizer />
    <LandingDemos :limit="12" />
    <LandingLayers />
    <LandingLayouts />
    <LandingFeatures />
    <LandingBenefits />
    <LandingCta />
    <LandingContent />
    <LandingFooter /> -->
    <div class="mx-auto my-10 w-1/2">
      <NuxtLink to="/login">로그인</NuxtLink><br />
      <NuxtLink to="/first">첫시작</NuxtLink><br />
      <NuxtLink to="/start">시작</NuxtLink><br />
      <NuxtLink to="/brainstorming/step1/">브레인스토밍</NuxtLink>
    </div>
  </div>
</template>
