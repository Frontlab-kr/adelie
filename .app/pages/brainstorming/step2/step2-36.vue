<script setup lang="ts">
import { Splitpanes, Pane } from 'splitpanes'
definePageMeta({
  layout: 'collapse',
  title: '브레인 스토밍',
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
const aiList = ref(false)

const updateValue = (newValue) => {
  value.value = newValue;
};
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
    <splitpanes style="height: 700px">
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
              <p class="text-sm text-slate-500">Step2 (브레인 스토밍) - 비즈니스 모델 캔버스</p>
            </div>
            <div class="flex flex-col mx-auto" style="min-height:580px">
              <div class="text-center my-4">
                서비스의 가치를 수익으로 확보할 모델을 작성해 봅니다.
                <p class="mt-2 mx-10 text-sm text-muted-400 break-keep">
                  기업은 비즈니스 모델링 과정에서 전략적인 비전을 살펴보고, 이해관계자들의 비즈니스 이해할 수 있다. 또한 새로운 기회를 탐색하고, 효과적으로 기업의 자원을 효율적으로 관리 할 수 있다. 다른 기업과의 차별성을 강화하고 시장에서 더 효과적으로 성과를 낼 수 있고, 투자 유치에도 도움이 된다. 이를 가시화하기 위해 비즈니스 모델을 수립해야 하며, 시각적으로 한눈에 알아보기 쉽도록 디자인된 '비즈니스 모델 캔버스'라는 템플릿 도구를 활용한다. 이는 기업들 사이에서 널리 사용되고 있으며, 기업 전략 수립과 혁신적인 비즈니스 모델 개발에 유용한 도구로 인정받고 있다. 
                </p>
              </div>
              <div class="my-6 text-center">
                <img src="../../../assets/images/tbmc.png" alt="" class="inline">
              </div>
              <div class="flex justify-center mt-auto">
                <BaseButton shape="curved" class="mx-1" to="/brainstorming/step2/step2-35">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="/brainstorming/step2/step2-37">
                  다음
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
</template>