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
const aiList = ref(false)
const value = ref('주문 고객 대상으로 배달 수수료 4,000원의 20%\n음식점 대상으로 음식값의 10%\n음식점 대상으로 광고 및 위치에 따른 수수료\n지역 비즈니스 광고료')

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
                Step1 (브레인 스토밍) - 서비스 아이디어 작성
              </p>
            </div>
            <div class="flex flex-col mx-auto" style="min-height:580px">
              <div class="text-center my-4">
                ⑥ [<strong>이웃간 음식 배달 대행 앱서비스 개발</strong>] 서비스의 수익 창출 계획은 어떻게 되나요?
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
                <BaseButton shape="curved" class="mx-1" to="step1-7">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="step1-9">
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
              <BaseMessage type="info" class="mb-4 break-keep">문장을 정리해보세요</BaseMessage>
              <div class="relative ailist" :class="aiList ? 'active' : ''">
                <div class="blur-sm ailist__list">
                  <BaseList class="mx-6 text-sm break-keep">
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('-주문 고객 대상: 배달 수수료 4,000원의 20%\n-음식점 대상: 음식값의 10%\n-음식점 대상: 광고 및 위치에 따른 차지\n-지역 비즈니스 광고료')">Case 1</p>
                      -주문 고객 대상: 배달 수수료 4,000원의 20%<br />
                      -음식점 대상: 음식값의 10%<br />
                      -음식점 대상: 광고 및 위치에 따른 차지<br />
                      -지역 비즈니스 광고료
                    </li>
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('주문한 고객에게는 배달 수수료가 주문 금액의 20%인 4,000원이 부과되고, 음식점은 주문 금액의 10%를 수수료로 지불합니다. 또한 음식점은 광고 및 위치에 따라 추가 요금이 발생하며, 지역 비즈니스 광고료도 부과됩니다')">Case 2</p>
                      주문한 고객에게는 배달 수수료가 주문 금액의 20%인 4,000원이 부과되고, 음식점은 주문 금액의 10%를 수수료로 지불합니다. 또한 음식점은 광고 및 위치에 따라 추가 요금이 발생하며, 지역 비즈니스 광고료도 부과됩니다
                    </li>
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('-주문 고객: 배달 수수료 4,000원 중 20%\n-음식점: 음식값의 10% 수수료\n-음식점: 광고 및 위치에 따른 추가 비용\n-지역 비즈니스: 광고료')">Case 3</p>
                      -주문 고객: 배달 수수료 4,000원 중 20%<br />
                      -음식점: 음식값의 10% 수수료<br />
                      -음식점: 광고 및 위치에 따른 추가 비용<br />
                      -지역 비즈니스: 광고료
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