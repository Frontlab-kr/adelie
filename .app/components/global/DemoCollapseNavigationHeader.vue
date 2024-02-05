<script setup lang="ts">
const { isOpen, isMobileOpen } = useCollapse()

const isSearchOpen = useState('search-open', () => false)
</script>

<template>
  <div class="flex w-full items-center justify-center px-2 pt-6">
    <div class="flex items-center justify-center">
      <slot name="logo">
        <NuxtLink to="/" class="flex items-center justify-center">
          <img src="../../assets/images/logo.png" alt="" style="width:100px">
        </NuxtLink>
      </slot>
    </div>

    <!--Action button-->
    <!-- <button
      type="button"
      class="nui-mask nui-mask-blob hover:bg-muted-200 dark:hover:bg-muted-700/60 text-muted-500 dark:text-muted-400 hidden h-10 w-10 cursor-pointer items-center justify-center transition-colors duration-300"
      :class="!isOpen ? 'hidden' : 'lg:flex'"
      @click="isSearchOpen = true"
    >
      <Icon name="lucide:search" class="h-4 w-4" />
    </button> -->

    <!--Mobile button-->
    <button
      type="button"
      class="nui-mask nui-mask-blob hover:bg-muted-200 dark:hover:bg-muted-800 text-muted-700 dark:text-muted-400 flex h-10 w-10 cursor-pointer items-center justify-center transition-colors duration-300 lg:hidden"
      @click="isMobileOpen = false"
    >
      <Icon name="lucide:arrow-left" class="h-5 w-5" />
    </button>
  </div>
</template>
