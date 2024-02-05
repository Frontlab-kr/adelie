<script setup lang="ts">
import { Splitpanes, Pane } from 'splitpanes'
definePageMeta({
  layout: 'collapse',
  title: '아이디어 초안 작성',
  preview: {
    title: 'Personal dashboard v1',
    description: 'For personal usage and reports',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-personal-1.png',
    srcDark: '/img/screens/dashboards-personal-1-dark.png',
    order: 1,
  },
})
const progress = ref(25)
const isModalLgOpen = ref(false)
</script>

<template>
  <div class="space-y-4 w-full mb-20">
    <BaseProgress title="Default progress bar" size="sm" :value="progress" color="primary" />
    <div class="flex justify-between gap-2 text-xs text-slate-500">
      <span>Start</span>
      <span>2Week</span>
      <span>3Week</span>
      <span>End</span>
    </div>
  </div>
  <div>
    <splitpanes style="height: 600px">
      <pane min-size="20" size="70">
        <!-- Column -->
        <div class="relative h-full">
          <!-- Widget -->
          <BaseCard shape="curved" class="p-6 h-full overflow-auto">
            <!-- Title -->
            <div class="mb-8 flex items-center justify-between">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>서비스 기획 노트</span>
              </BaseHeading>
              <p class="text-sm text-slate-500">
                Step1 (브레인 스토밍) - 서비스 아이디어 작성
              </p>
            </div>
            <div class="flex flex-col mx-auto" style="min-height:480px">
              <div class="text-center my-4">
                백오십님 <strong>이웃간 음식 배달 대행 앱 서비스</strong> 프로젝트를<br />진행하시는군요?<br /><br />
                <BaseButton shape="curved" class="mx-1" color="muted" @click="isModalLgOpen = true">기획하기전에 기획서 작성 가이드 살펴보기 <Icon name="lucide:arrow-right" class="ms-1 h-4 w-4" /></BaseButton><br /><br />
                <span class="text-base text-gray-500">
                  앞으로 작성 가이드에 따라 내용을 작성해보세요. <br />
                  필요하다면 AI 멘토에게 물어보세요.<br />
                  기획 내용 작성 할 때 도움이 될 거에요.
                </span>
              </div>
              <div class="flex justify-center mt-auto">
                <BaseButton shape="curved" class="mx-1" color="primary" to="step1-2">
                  기획 시작하기
                </BaseButton>
              </div>
            </div>
          </BaseCard>
        </div>        
      </pane>
      <pane min-size="20" size="30">
        <!-- Column -->
        <div class="relative h-full">
          <!-- Widget -->
          <BaseCard shape="curved" class="p-6 h-full overflow-auto">
            <!-- Title -->
            <div class="mb-8 flex items-center justify-between">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>AI 멘토</span>
              </BaseHeading>
            </div>
            
          </BaseCard>
        </div>
      </pane>
    </splitpanes>

  </div>

  <!-- Modal component -->
  <TairoModal :open="isModalLgOpen" size="lg" @close="isModalLgOpen = false">
    <template #header>
      <!-- Header -->
      <div class="flex w-full items-center justify-between p-4 md:p-6">
        <h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white">
          작성 가이드
        </h3>
        <BaseButtonClose @click="isModalLgOpen = false" />
      </div>
    </template>

    <!-- Body -->
    <div class="p-4 md:p-6">
      <div class="mx-auto w-full max-w-xs text-center">
        <p class="font-alt text-muted-500 dark:text-muted-400 text-sm leading-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        </p>
      </div>
    </div>

    <template #footer>
      <!-- Footer -->
      <div class="p-4 md:p-6">
        <div class="flex gap-x-2">
          <BaseButton color="primary" flavor="solid" @click="isModalLgOpen = false">
            확인
          </BaseButton>
        </div>
      </div>
    </template>
  </TairoModal>

</template>
