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
const value = ref(' [이웃간 음식배달대행 앱 서비스]는 [지역사회에서 음식배달을 이웃간에 같이 서비스를 함으로서]을 통해 독보적인 [지역사회 개발 및 경제공동체 활성화]을 제공하며, 이를 통해 시장에서 [타 서비스들에 비해서 사회적 공동체 활성화를 차별화]를 가진다. [시간많은 주부들과 노약자 계층]에게는 특별한 [저렴한 배달료와 소통 증진]을 부여하여 사용자들의 [의식주 문제해결과 이웃간의 소통만족]을 충족한다. [이웃간 음식배달대행 앱서비스]는 사용자에게 전달하는 [사회적가치]를 중심으로 특별한 만족을 제공하는 것을 주요 목표로 하고 있다. ')

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
                Step2 (브레인 스토밍) - 서비스 컨셉 도출
              </p>
            </div>
            <div class="flex flex-col mx-auto" style="min-height:580px">
              <div class="text-center my-4">
                [<strong>이웃간 배달 대행 앱 서비스</strong>]의 콘셉트를 문장으로 표현해보세요.
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
                <BaseButton shape="curved" class="mx-1" to="/brainstorming/step2/step2-43">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="/brainstorming/step2/step2-45">
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
                      이웃간 음식배달대행 앱 서비스는 지역사회에서 음식배달을 이웃간에 같이 서비스를 함으로서 독보적인 지역사회 개발 및 경제공동체 활성화를 제공하며, 이를 통해 시장에서 타 서비스들에 비해서 사회적 공동체 활성화를 차별화합니다. 시간많은 주부들과 노약자 계층에게는 특별한 저렴한 배달료와 소통 증진을 부여하여 사용자들의 의식주 문제해결과 이웃간의 소통만족을 충족합니다. 이웃간 음식배달대행 앱서비스는 사용자에게 전달하는 사회적가치를 중심으로 특별한 만족을 제공하는 것을 주요 목표로 하고 있습니다.
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