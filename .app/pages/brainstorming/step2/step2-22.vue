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
                이전 분석을 통해 인사이트 도출해보세요
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
                <BaseButton shape="curved" class="mx-1" to="/brainstorming/step2/step2-21">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" >
                  내용수정
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="/brainstorming/step2/step2-23">
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
                다시 정리해보았어요. 선택해서 활용하세요
              </BaseMessage>
              <div class="flex justify-end mb-4">
                <BaseButton size="sm" class="mx-1">아니오</BaseButton>
                <BaseButton color="primary" size="sm" class="mx-1">예</BaseButton>
              </div>
              <div class="relative ailist" :class="aiList ? 'active' : ''" style="height: 534px;">
                <div class="blur-sm ailist__list">
                  <BaseList ordered class="mx-6 text-sm break-keep">
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('적정 배달료 설정:\n\n배달료는 2000원을 적정선으로 설정함.\n이웃 배달 개수 제한:\n\n이웃 배달은 최대 3개로 한정하되, 본인 음식은 제외함.\n배달 거리 및 수단에 따른 차등화:\n\n도보 2KM, 자전거 5KM, 오토바이 10KM, 자동차 3KM로 배달 거리를 구분함.\n다양한 배달원 프로필:\n\n1차는 대학생, 2차는 주부, 3차는 노년층 배달원을 고용하여 다양한 인력을 활용함.\n음식 종류에 따른 패키징 확인:\n\n각 음식의 특성에 맞는 안전하고 효율적인 포장 방법을 확인하여 배달에 적용함.\n배달 관련 보험 필요:\n\n안전을 고려하여 배달 관련 보험 가입을 필요로 함.\n오토바이 렌탈 사업 실시:\n\n오토바이 렌탈 사업을 도입하여 배달원들이 보다 효율적으로 이용할 수 있도록 함.')">Case 1</p>
                      적정 배달료 설정:<br />
                      <br />
                      배달료는 2000원을 적정선으로 설정함.<br />
                      이웃 배달 개수 제한:<br />
                      <br />
                      이웃 배달은 최대 3개로 한정하되, 본인 음식은 제외함.<br />
                      배달 거리 및 수단에 따른 차등화:<br />
                      <br />
                      도보 2KM, 자전거 5KM, 오토바이 10KM, 자동차 3KM로 배달 거리를 구분함.<br />
                      다양한 배달원 프로필:<br />
                      <br />
                      1차는 대학생, 2차는 주부, 3차는 노년층 배달원을 고용하여 다양한 인력을 활용함.<br />
                      음식 종류에 따른 패키징 확인:<br />
                      <br />
                      각 음식의 특성에 맞는 안전하고 효율적인 포장 방법을 확인하여 배달에 적용함.<br />
                      배달 관련 보험 필요:<br />
                      <br />
                      안전을 고려하여 배달 관련 보험 가입을 필요로 함.<br />
                      오토바이 렌탈 사업 실시:<br />
                      <br />
                      오토바이 렌탈 사업을 도입하여 배달원들이 보다 효율적으로 이용할 수 있도록 함.
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