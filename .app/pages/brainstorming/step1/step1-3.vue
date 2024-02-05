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
const value = ref('현재 음식배달서비스들은 플랫폼노동자들의 많은 희생을 요구하고 있어서 문제가 되고 있다고 알려져 있어서 이를 새롭게 사회적 앱서비스 구축을 통해서 해결하고 더 효과적으로 비즈니스를 운영할 수 있을 것 같아서.')

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
                ① [<strong>이웃간 음식 배달 대행 앱서비스 개발</strong>] 의 아이디어 시작은 어떤 계기로 시작되었나요?
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
                <BaseButton shape="curved" class="mx-1" color="primary" to="step1-4">
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
              <BaseMessage type="info" class="mb-4 break-keep">아이디어 정리방법</BaseMessage>
              <p class="mx-6 text-sm break-keep">
                아이디어는 여러 계기와 과정을 통해 발전할 수 있습니다. 일반적으로 아이디어의 시작은 다음과 같은 상황에서 나올 수 있습니다.
              </p>
              <hr class="my-6">
              <BaseMessage type="info" class="mb-4 break-keep">문장을 정리해보세요</BaseMessage>
              <div class="relative ailist" :class="aiList ? 'active' : ''">
                <div class="blur-sm ailist__list">
                  <BaseList class="mx-6 text-sm break-keep">
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('음식배달 서비스는 현재 플랫폼 노동자들에게 많은 희생을 요구하고 있어 사회적 앱 서비스를 통해 이 문제를 해결하고 더 효과적으로 비즈니스를 운영할 수 있을 것으로 보인다.')">Case 1</p>
                      음식배달 서비스는 현재 플랫폼 노동자들에게 많은 희생을 요구하고 있어 사회적 앱 서비스를 통해 이 문제를 해결하고 더 효과적으로 비즈니스를 운영할 수 있을 것으로 보인다.
                    </li>
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('현재 음식배달 서비스는 플랫폼 노동자들에게 부당한 희생을 요구하고 있는데, 이 문제를 해결하고 더 효과적으로 비즈니스를 운영하기 위해 사회적 앱 서비스를 도입하는 것이 필요해 보인다.')">Case 2</p>
                      현재 음식배달 서비스는 플랫폼 노동자들에게 부당한 희생을 요구하고 있는데, 이 문제를 해결하고 더 효과적으로 비즈니스를 운영하기 위해 사회적 앱 서비스를 도입하는 것이 필요해 보인다.
                    </li>
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('음식배달 서비스는 현재 플랫폼 노동자들에게 부당한 희생을 요구하고 있어 사회적 앱 서비스를 통한 혁신이 필요하다. 이를 통해 노동자들의 근로조건을 개선하고 동시에 비즈니스 효율성을 높일 수 있을 것으로 기대된다.')">Case 3</p>
                      음식배달 서비스는 현재 플랫폼 노동자들에게 부당한 희생을 요구하고 있어 사회적 앱 서비스를 통한 혁신이 필요하다. 이를 통해 노동자들의 근로조건을 개선하고 동시에 비즈니스 효율성을 높일 수 있을 것으로 기대된다.
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