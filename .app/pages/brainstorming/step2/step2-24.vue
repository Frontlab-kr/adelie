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
const value = ref('배달료는 2000원이 적정선\n이웃 배달 개수 3개로 한정(본인음식 제외)\n거리: 도보 2KM, 자전거 5K, 오토바이 10KM, 자동차 3KM\n1차 대학생 배달원, 2차 주부 배달원, 3차 노년층 배달원\n음식 종류에 따른 패키징 확인 필요\n배달관련 보험 필요\n오토바이 렌탈 사업 실시')

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
              <p class="text-sm text-slate-500">
                Step2 (브레인 스토밍) - 3C, SWOT 분석
              </p>
            </div>
            <div class="flex flex-col mx-auto" style="min-height:580px">
              <div class="text-center my-4">
                시장의 변화를 읽어보는 3C분석해보세요.
                <p class="mt-2 mx-10 text-sm text-muted-400 break-keep">
                  기업은 3C분석을 통해 자사의 강점과 약점을 파악하고, 고객의 니즈를 이해하여 제품과 서비스를 개선함으로써 경쟁력을 향상시키는데 사용한다. 3C는 기업이 시장 변화를 읽기 위해 핵심적으로 고려해야 할 세 가지 핵심 요소를 나타내며, 이는 회사(Company), 고객(Customer), 경쟁자(Competitor)로 구성된다. 
                </p>
              </div>
              <div class="my-6 text-center">
                <img src="../../../assets/images/3c.png" alt="" class="inline">
              </div>
              <div class="flex justify-center mt-auto">
                <BaseButton shape="curved" class="mx-1" to="/brainstorming/step2/step2-23">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="/brainstorming/step2/step2-25">
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