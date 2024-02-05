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
const value = ref('[이웃간 음식배달 앱서비스]는 내부요인으로 [젊은 구성원]을 가지고 있지만, 동시에 [경험이 취약함]도 갖추고 있다.\n또한 외부 요인으로 [시장은 확대 기회]가 있지만, [실제 배당에 참여도가 낮을 ]요인도 상당하다. 따라서 [젊음]과 [시장확대]를 최대한 활용하기 위해 SO전략을 채택하고, [젊음]을 살리면서 [저조한 배달 참여]을 피하기 위해 ST전략을 수립하려 한다. 또한 [경험없음]을 극복하고 [확대되는 시장]를 활용하기 위해 WO전략을 택하며, [경험없음]과 [참여도 저조]을 회피하기 위해 WT전략을 계획하고 있다')

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
                Step2 (브레인 스토밍) - STP 분석
              </p>
            </div>
            <div class="flex flex-col mx-auto" style="min-height:580px">
              <div class="text-center my-4">
                시장을 이해하고 효과적으로 접근하여 <br />
                제품 또는 서비스를 소비자에게 홍보하고 판매하는 데 도움을 주는 STP 전략을 작성해봅니다.
              </div>
              <BaseList ordered class="my-5 mx-20 px-20 text-sm break-keep">
                <li>
                  <strong>Segmentation (세분화):</strong><br />
                  시장을 고객의 특성, Bedrock 등 여러 기준에 따라 세분화합니다.<br />
                  고객을 비슷한 특성이나 Bedrock을 공유하는 그룹으로 나누어, 시장의 복잡성을 다양한 세그먼트로 단순화합니다.
                </li>
                <li>
                  <strong>Targeting (타겟팅):</strong><br />
                  세분화된 그룹 중 어떤 그룹에 집중할지를 선택합니다.<br />
                  선택된 세그먼트를 타겟으로 삼아 그룹에 맞는 마케팅 전략을 개발합니다.
                </li>
                <li>
                  <strong>Positioning (포지셔닝):</strong><br />
                  선택된 세그먼트에 대한 제품, 서비스, 브랜드를 강조하여 차별성을 부여합니다.<br />
                  경쟁사와의 차별점을 강조하여 고객에게 특별한 가치를 제공하는 것이 목표입니다.
                </li>
              </BaseList>
              <div class="mt-6 text-center">
                <img src="../../../assets/images/stp.png" alt="" class="inline">
              </div>
              <div class="flex justify-center mt-auto">
                <BaseButton shape="curved" class="mx-1" to="/brainstorming/step2/step2-30">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="/brainstorming/step2/step2-32">
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