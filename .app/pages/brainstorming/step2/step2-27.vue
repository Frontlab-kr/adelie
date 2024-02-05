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
const value = ref('“회사(Company)는 [졂은 창업자와 구성원]을 가지고 있지만, 동시에 [경험이 없다는 점]도 존재하여 때문에 [음식배달대행 서비스]에 대한 [니즈]를 파악해야 한다. 고객 (Customer)는 [배달료에 대한 불만, 소통이 없음에 대한 불만]을 표현하며, 강한[니즈]를 갖고 있어 이는 [서비스] 선택에 영향을 미칠 것으로 예상된다. 경쟁자 (Competitor)안 [배달의 민족]은 전략적으로 [규모의 경제]을 내세우고 있지만, [배달료가 비싼 점]도 보여지고 있다. 3C 분석을 통해 [배달료 절감]의 부족한 부분을 개선하면서, 이용자의 [니즈]에 맞는 최적화된 [음식배달 서비스]를 제공하는 것이 필요하다.”')

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
                서비스를 최상의 상태로 만들기위한<br />
                SWOT 분석을 진행합니다.
                <p class="mt-2 mx-10 text-sm text-muted-400 break-keep">
                  SWOT 분석은 기업, 조직, 또는 서비스가 향하고 있는 내외부적인 상황을 평가하는 중요한 도구이다. 이는 강점(Strengths)과 약점(Weaknesses)을 판단하고 강화함으로써, 기회(Opportunities)에 대응하고 동시에 위험(Threats)을 최소화하여 비즈니스 전략을 수립하는 데에 중요한 역할을 한다.<br /><br />
                  서비스 기획 과정에서 SWOT 분석 기법을 사용할 경우 기업이나 서비스가 현재 어떤 상태에 있는지 이해할 수 있고, 핵심 서비스를 강화하여 약점에 대한 대응책을 마련 할 수 있다. 이를 통해 서비스 기획 방향을 수립하는데 도움을 줄 수 있고, 경쟁력을 향상시켜 서비스를 최상의 상태로 만들 수 있다. 
                </p>
              </div>
              <div class="flex justify-center mt-auto">
                <BaseButton shape="curved" class="mx-1" to="/brainstorming/step2/step2-26">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" >
                  내용수정
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="/brainstorming/step2/step2-28">
                  작성완료
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