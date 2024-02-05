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
const value = ref('연계가 끊어져 가는 지역 커뮤니티들을 활성화시키고 서로를 도우면서 상호 협력을 돈독하게 만들기 위한 서비스이다.')

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
                ⑤ [<strong>이웃간 음식 배달 대행 앱서비스 개발</strong>] 서비스의 목적을 작성해보세요.
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
                <BaseButton shape="curved" class="mx-1" to="step1-6">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="step1-8">
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
                      <p class="cursor-pointer underline" @click="updateValue('지역 커뮤니티 간 연계가 떨어진 상태를 활성화시키고, 서로 도움을 주며 상호 협력을 강화하는 서비스입니다.')">Case 1</p>
                      지역 커뮤니티 간 연계가 떨어진 상태를 활성화시키고, 서로 도움을 주며 상호 협력을 강화하는 서비스입니다.
                    </li>
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('지역 커뮤니티 간 연계를 촉진하여 상호 협력을 강화하는 서비스로, 이를 통해 지역 경제적인 효과를 창출합니다.')">Case 2</p>
                      지역 커뮤니티 간 연계를 촉진하여 상호 협력을 강화하는 서비스로, 이를 통해 지역 경제적인 효과를 창출합니다.
                    </li>
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('이 서비스는 지역 커뮤니티 간의 연계를 활성화시켜 상호 협력을 촉진합니다. 이러한 상호 협력은 지역 경제에 긍정적인 영향을 미치며, 지역 내에서 경제적인 효과를 창출하여 지속 가능한 지역 발전을 지원합니다.')">Case 3</p>
                      이 서비스는 지역 커뮤니티 간의 연계를 활성화시켜 상호 협력을 촉진합니다. 이러한 상호 협력은 지역 경제에 긍정적인 영향을 미치며, 지역 내에서 경제적인 효과를 창출하여 지속 가능한 지역 발전을 지원합니다.
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