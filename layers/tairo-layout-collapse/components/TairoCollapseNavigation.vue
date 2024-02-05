<script setup lang="ts">
import { useCollapse } from '../composables/collapse'

const { isOpen, isMobileOpen, menuItems } = useCollapse()
const app = useAppConfig()

const startMenuItems = computed(
  () =>
    menuItems.value?.filter(
      (sidebar) => !sidebar.position || sidebar.position === 'start',
    ),
)
const endMenuItems = computed(
  () => menuItems.value?.filter((sidebar) => sidebar.position === 'end'),
)
</script>

<template>
  <div
    class="dark:bg-muted-800 border-muted-200 dark:border-muted-700 fixed start-0 top-0 z-[60] flex h-full flex-col border-r bg-white transition-all duration-300"
    :class="[
      !isOpen ? 'w-[80px]' : 'w-[280px]',
      isMobileOpen
        ? 'translate-x-0 lg:translate-x-0'
        : '-translate-x-full lg:translate-x-0',
    ]"
  >
    <!--Header-->
    <slot name="header">
      <component
        v-if="app.tairo.collapse?.navigation?.header?.component"
        :is="
          resolveComponentOrNative(
            app.tairo.collapse?.navigation?.header?.component,
          )
        "
      />
    </slot>
    <!--Body-->
    <div
      class="nui-slimscroll relative flex w-full grow flex-col overflow-y-auto py-6"
      :class="!isOpen ? 'px-4' : 'px-6'"
    >
      <p v-if="isOpen" class="mx-6 my-3 text-sm text-gray-700">
        <strong>기획 노트 프로세스</strong>
      </p>
      <!--Menu-->
      <ul v-if="startMenuItems?.length" class="space-y-2">
        <!--Menu item-->
        <li v-for="(item, index) in startMenuItems" :key="index">
          <component
            v-if="item?.component?.name"
            :is="resolveComponentOrNative(item?.component?.name)"
            v-bind="item?.component?.props"
          />
          <TairoCollapseNavigationCollapseLinks
            v-else-if="item.children"
            :item="item"
            :expanded="isOpen"
            @clicked="isOpen = true"
          />
          <NuxtLink
            v-else-if="item.to"
            :to="item.to"
            exact-active-class="!bg-primary-500/10 dark:!bg-primary-500/20 !text-primary-500 dark:!text-primary-500 "
            class="nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300"
            :class="!isOpen ? 'px-1 justify-center' : 'px-4'"
          >
            <Icon :name="item.icon.name" :class="item.icon.class" />
            <span
              class="whitespace-nowrap font-sans text-sm"
              :class="!isOpen ? 'hidden' : 'block'"
            >
              {{ item.name }}
            </span>
          </NuxtLink>
          <div
            v-else-if="item.divider"
            class="border-muted-200 dark:border-muted-700 my-3 h-px w-full border-t"
          ></div>
          <button
            v-else
            class="nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex w-full cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300"
            :class="!isOpen ? 'px-1 justify-center' : 'px-4'"
            @click="item.click"
          >
            <Icon :name="item.icon.name" :class="item.icon.class" />
            <span
              class="whitespace-nowrap font-sans text-sm"
              :class="!isOpen ? 'hidden' : 'block'"
            >
              {{ item.name }}
            </span>
          </button>
        </li>
      </ul>
      <p v-if="isOpen" class="mx-6 my-3 mt-10 text-sm text-gray-700">
        <strong>보고서 작성 프로세스</strong>
      </p>
      <ul class="space-y-2">
        <li>
          <div class="group">
            <button
              class="nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex w-full cursor-pointer items-center gap-4 rounded-lg px-4 py-3 transition-colors duration-300"
            >
              <svg
                data-v-3df8cf3c=""
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon h-5 w-5 shrink-0"
                width="1em"
                height="1em"
                viewBox="0 0 48 48"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M27.765 10.152A2 2 0 0 1 29 12v24a2 2 0 0 1-4 0V16.83l-1.586 1.585a2 2 0 0 1-2.828-2.828l5-5a2 2 0 0 1 2.18-.434"
                  clip-rule="evenodd"
                ></path></svg
              ><span class="block whitespace-nowrap font-sans text-sm"
                >Step 1</span
              ><span class="ms-auto flex items-center justify-center"
                ><svg
                  data-v-3df8cf3c=""
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="icon h-4 w-4 transition-transform duration-200"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m18 15l-6-6l-6 6"
                  ></path></svg
              ></span>
            </button>
          </div>
        </li>
        <li>
          <div class="group">
            <button
              class="nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex w-full cursor-pointer items-center gap-4 rounded-lg px-4 py-3 transition-colors duration-300"
            >
              <svg
                data-v-3df8cf3c=""
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon h-5 w-5 shrink-0"
                width="1em"
                height="1em"
                viewBox="0 0 48 48"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M26 14a4 4 0 0 1 2.61 7.034l-14 13.528A2 2 0 0 0 16 38h16a2 2 0 1 0 0-4H20.948l10.416-10.065A8 8 0 0 0 26 10h-4a8.003 8.003 0 0 0-7.544 5.334a2 2 0 0 0 3.771 1.332A4.002 4.002 0 0 1 22 14z"
                  clip-rule="evenodd"
                ></path></svg
              ><span class="block whitespace-nowrap font-sans text-sm"
                >Step 2</span
              ><span class="ms-auto flex items-center justify-center"
                ><svg
                  data-v-3df8cf3c=""
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="icon h-4 w-4 rotate-180 transition-transform duration-200"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m18 15l-6-6l-6 6"
                  ></path></svg
              ></span>
            </button>
          </div>
        </li>
        <li>
          <div class="group">
            <button
              class="nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex w-full cursor-pointer items-center gap-4 rounded-lg px-4 py-3 transition-colors duration-300"
            >
              <svg
                data-v-3df8cf3c=""
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon h-5 w-5 shrink-0"
                width="1em"
                height="1em"
                viewBox="0 0 48 48"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M25.87 14c2.322 0 4.13 1.831 4.13 4s-1.808 4-4.13 4h-4.088a2 2 0 1 0 0 4h4.087C28.192 26 30 27.831 30 30s-1.808 4-4.13 4h-4.088c-1.823 0-3.344-1.137-3.9-2.68a2 2 0 0 0-3.763 1.36c1.126 3.118 4.147 5.32 7.663 5.32h4.087C30.32 38 34 34.459 34 30a7.91 7.91 0 0 0-2.753-6A7.91 7.91 0 0 0 34 18c0-4.459-3.681-8-8.13-8h-4.088c-3.516 0-6.537 2.202-7.663 5.32a2 2 0 0 0 3.762 1.36c.557-1.543 2.078-2.68 3.901-2.68z"
                  clip-rule="evenodd"
                ></path></svg
              ><span class="block whitespace-nowrap font-sans text-sm"
                >Step 3</span
              ><span class="ms-auto flex items-center justify-center"
                ><svg
                  data-v-3df8cf3c=""
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="icon h-4 w-4 rotate-180 transition-transform duration-200"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m18 15l-6-6l-6 6"
                  ></path></svg
              ></span>
            </button>
            <ul
              class="border-muted-200 relative block max-h-0 overflow-hidden ps-4 opacity-0 group-focus-within:max-h-max group-focus-within:overflow-visible group-focus-within:opacity-100"
            ></ul>
          </div>
        </li>
        <li>
          <div class="group">
            <button
              class="nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex w-full cursor-pointer items-center gap-4 rounded-lg px-4 py-3 transition-colors duration-300"
            >
              <svg
                data-v-3df8cf3c=""
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon h-5 w-5 shrink-0"
                width="1em"
                height="1em"
                viewBox="0 0 48 48"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M28.58 10.086A2 2 0 0 1 30 12v16h2a2 2 0 1 1 0 4h-2v4a2 2 0 0 1-4 0v-4H16a2 2 0 0 1-1.664-3.11l12-18a2 2 0 0 1 2.244-.804M26 28v-9.394L19.737 28z"
                  clip-rule="evenodd"
                ></path></svg
              ><span class="block whitespace-nowrap font-sans text-sm"
                >Step 4</span
              ><span class="ms-auto flex items-center justify-center"
                ><svg
                  data-v-3df8cf3c=""
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="icon h-4 w-4 rotate-180 transition-transform duration-200"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m18 15l-6-6l-6 6"
                  ></path></svg
              ></span>
            </button>
            <ul
              class="border-muted-200 relative block max-h-0 overflow-hidden ps-4 opacity-0 group-focus-within:max-h-max group-focus-within:overflow-visible group-focus-within:opacity-100"
            ></ul>
          </div>
        </li>
      </ul>
      <!-- <div class="mb-2 grow"></div> -->
      <!--Menu-->
      <ul v-if="endMenuItems?.length" class="space-y-2">
        <!--Menu item-->
        <li v-for="(item, index) in endMenuItems" :key="index">
          <component
            v-if="item?.component?.name"
            :is="resolveComponentOrNative(item?.component?.name)"
            v-bind="item?.component?.props"
          />
          <TairoCollapseNavigationCollapseLinks
            v-else-if="item.children"
            :item="item"
            :expanded="isOpen"
            @clicked="isOpen = true"
          />
          <NuxtLink
            v-else-if="item.to"
            :to="item.to"
            exact-active-class="!bg-primary-500/10 dark:!bg-primary-500/20 !text-primary-500 dark:!text-primary-500"
            class="nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300"
            :class="!isOpen ? 'px-1 justify-center' : 'px-4'"
          >
            <Icon :name="item.icon.name" :class="item.icon.class" />
            <span
              class="whitespace-nowrap font-sans text-sm"
              :class="!isOpen ? 'hidden' : 'block'"
            >
              {{ item.name }}
            </span>
          </NuxtLink>
          <div
            v-else-if="item.divider"
            class="border-muted-200 dark:border-muted-700 my-3 h-px w-full border-t"
          ></div>
          <button
            v-else
            class="nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex w-full cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300"
            :class="!isOpen ? 'px-1 justify-center' : 'px-4'"
            @click="item.click"
          >
            <Icon :name="item.icon.name" :class="item.icon.class" />
            <span
              class="whitespace-nowrap font-sans text-sm"
              :class="!isOpen ? 'hidden' : 'block'"
            >
              {{ item.name }}
            </span>
          </button>
        </li>
      </ul>
    </div>
    <!--Footer-->
    <slot name="footer">
      <component
        v-if="app.tairo.collapse?.navigation?.footer?.component"
        :is="
          resolveComponentOrNative(
            app.tairo.collapse?.navigation?.footer?.component,
          )
        "
      />
    </slot>
  </div>
</template>
