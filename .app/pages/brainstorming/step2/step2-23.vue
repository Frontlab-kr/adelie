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
                Step2 (브레인 스토밍) - 벤치마킹
              </p>
            </div>
            <div class="flex flex-col mx-auto" style="min-height:580px">
              <div class="text-center my-4">
                서비스 적용 방안을 검토하여 작성해보세요
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
                <BaseButton shape="curved" class="mx-1" to="/brainstorming/step2/step2-22">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" >
                  내용수정
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="/brainstorming/step2/step2-24">
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
                다시 정리했어요
              </BaseMessage>
              <div class="flex justify-end mb-4">
                <BaseButton size="sm" class="mx-1">아니오</BaseButton>
                <BaseButton color="primary" size="sm" class="mx-1">예</BaseButton>
              </div>
              <div class="relative ailist" :class="aiList ? 'active' : ''" style="height: 534px;">
                <div class="blur-sm ailist__list">
                  <BaseList ordered class="mx-6 text-sm break-keep">
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('우리 서비스의 배달료는 2000원으로 설정되어 있습니다. 각 사용자는 이웃에게 최대 3회까지 음식을 배달할 수 있으며, 본인이 요리한 음식은 배달에서 제외됩니다. 배달 거리에는 도보 2KM, 자전거 5KM, 오토바이 10KM, 자동차 3KM를 기준으로 하여 다양한 수단으로 배달이 이루어집니다.\n\n서비스는 대학생, 주부, 그리고 노년층을 대상으로 하는 세 가지 카테고리의 배달원을 고용하여 지역 사회의 다양한 인력을 활용합니다. 또한, 음식의 특성에 따라 안전하고 효율적인 포장 방법을 각각 확인하여 서비스에 적용합니다.\n\n배달원들은 서비스 이용 중 발생할 수 있는 안전 문제에 대비하기 위해 배달 관련 보험에 가입합니다. 이를 통해 사용자와 배달원 간의 안전을 최우선으로 고려합니다.\n\n뿐만 아니라, 오토바이 렌탈 사업을 도입하여 배달원들이 보다 간편하게 이동할 수 있도록 지원합니다. 이러한 다양한 정책과 시스템을 통해 우리 서비스는 효율적이고 안전한 음식 배달 환경을 제공합니다.')">Case 1</p>
                      우리 서비스의 배달료는 2000원으로 설정되어 있습니다. 각 사용자는 이웃에게 최대 3회까지 음식을 배달할 수 있으며, 본인이 요리한 음식은 배달에서 제외됩니다. 배달 거리에는 도보 2KM, 자전거 5KM, 오토바이 10KM, 자동차 3KM를 기준으로 하여 다양한 수단으로 배달이 이루어집니다.<br />
                      <br />
                      서비스는 대학생, 주부, 그리고 노년층을 대상으로 하는 세 가지 카테고리의 배달원을 고용하여 지역 사회의 다양한 인력을 활용합니다. 또한, 음식의 특성에 따라 안전하고 효율적인 포장 방법을 각각 확인하여 서비스에 적용합니다.<br />
                      <br />
                      배달원들은 서비스 이용 중 발생할 수 있는 안전 문제에 대비하기 위해 배달 관련 보험에 가입합니다. 이를 통해 사용자와 배달원 간의 안전을 최우선으로 고려합니다.<br />
                      <br />
                      뿐만 아니라, 오토바이 렌탈 사업을 도입하여 배달원들이 보다 간편하게 이동할 수 있도록 지원합니다. 이러한 다양한 정책과 시스템을 통해 우리 서비스는 효율적이고 안전한 음식 배달 환경을 제공합니다.
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