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
                3C 분석 결과를 토대로 문장으로 표현해보세요.
                <BaseTextarea
                  v-model="value"
                  shape="rounded"
                  placeholder="내용을 입력해주세요."
                  color-focus
                  class="mt-10"
                  style="height: 300px;"
                />
              </div>
              <div class="flex justify-center mt-auto">
                <BaseButton shape="curved" class="mx-1" to="/brainstorming/step2/step2-25">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" >
                  내용수정
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="/brainstorming/step2/step2-27">
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
            <div class="ai-wrap">
              <BaseMessage type="info" class="mb-4 break-keep">
                문장 정리 해보실래요?
              </BaseMessage>
              <div class="flex justify-end mb-4">
                <BaseButton size="sm" class="mx-1">아니오</BaseButton>
                <BaseButton color="primary" size="sm" class="mx-1">예</BaseButton>
              </div>
              <div class="relative ailist" :class="aiList ? 'active' : ''" style="height: 534px;">
                <div class="blur-sm ailist__list">
                  <BaseList ordered class="mx-6 text-sm break-keep">
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('')">Case 1</p>                      
                      "우리 회사는 열정 넘치는 창업자와 구성원들로 구성되어 있지만, 동시에 음식배달대행 서비스에 대한 경험이 부족한 신생 기업입니다. 이로 인해 고객들의 니즈를 정확히 파악하고 이를 기반으로 서비스를 개선하는 것이 중요합니다. 현재 고객들은 배달료에 대한 불만과 소통 부재에 대한 불만을 표현하며, 강한 니즈를 갖고 있어 이는 서비스 선택에 영향을 미칠 것으로 예상됩니다.<br />
                      <br />
                      경쟁자인 '배달의 민족'은 규모의 경제를 내세우고 있지만, 동시에 배달료가 비싸다는 이슈도 존재합니다. 3C 분석을 통해 배달료 절감 부분을 개선하면서, 이용자의 니즈에 맞는 최적화된 음식배달 서비스를 제공하는 것이 우리가 진행해야 할 필수 과제입니다."
                    </li>
                  </BaseList>
                </div>
                <BaseButtonIcon @click="aiList = true" shape="curved" class="absolute ailist__button" style="top:50%;left:50%;transform: translate(-50%,-50%);" data-nui-tooltip="AI 문장 정리를 확인해보세요!">
                  <Icon name="humbleicons:bulb" class="h-5 w-5 text-yellow-500" />
                </BaseButtonIcon>
              </div>
            </div>
          </BaseCard>
        </div>        
      </pane>
    </splitpanes>    
  </div>
</template>