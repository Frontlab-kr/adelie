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
const value = ref('지금의 음식배달서비스는 전문배달원들에 의해 배달되어 배달료가 비싸고 필요한 경우 추가 심부름을 하기가 어려운데, 이를 커뮤니티 서비스로 개발하여 음식배달이 필요한 주부가 픽업하면서 이웃의 배달도 같이 실행하여 배달료를 나누어 부담한다.')

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
                ④ [<strong>이웃간 음식 배달 대행 앱서비스 개발</strong>] 의 서비스가 왜 필요하고 중요한지 작성해보세요.
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
                <BaseButton shape="curved" class="mx-1" to="step1-5">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="step1-7">
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
                      <p class="cursor-pointer underline" @click="updateValue('전문 배달원에 의한 비싼 배달료와 추가 심부름 어려움 문제를 해결하기 위해, 커뮤니티 서비스로 음식배달을 필요로 하는 주부가 픽업하면서 이웃의 배달도 함께 처리하여 배달료를 공동 부담하는 방식으로 개발됩니다.')">Case 1</p>
                      전문 배달원에 의한 비싼 배달료와 추가 심부름 어려움 문제를 해결하기 위해, 커뮤니티 서비스로 음식배달을 필요로 하는 주부가 픽업하면서 이웃의 배달도 함께 처리하여 배달료를 공동 부담하는 방식으로 개발됩니다.
                    </li>
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('음식배달서비스의 높은 배달료와 추가 심부름 어려움을 극복하기 위해, 커뮤니티 서비스를 도입했습니다. 이로써 주부들이 필요한 음식을 픽업하며 이웃의 배달도 함께 처리하여 배달료를 나눠 부담하게 되어, 더 효율적이고 경제적인 서비스가 가능해졌습니다.')">Case 2</p>
                      음식배달서비스의 높은 배달료와 추가 심부름 어려움을 극복하기 위해, 커뮤니티 서비스를 도입했습니다. 이로써 주부들이 필요한 음식을 픽업하며 이웃의 배달도 함께 처리하여 배달료를 나눠 부담하게 되어, 더 효율적이고 경제적인 서비스가 가능해졌습니다.
                    </li>
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('음식배달서비스의 비싼 배달료와 추가 심부름 어려움을 해결하기 위해, 주부들이 이웃의 음식배달도 함께 처리하여 배달료를 나누는 커뮤니티 서비스를 도입했습니다.')">Case 3</p>
                      음식배달서비스의 비싼 배달료와 추가 심부름 어려움을 해결하기 위해, 주부들이 이웃의 음식배달도 함께 처리하여 배달료를 나누는 커뮤니티 서비스를 도입했습니다.
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