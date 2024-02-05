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
const value = ref('1. 주민 참여도를 높이는 것이 제일 큰 문제이다 – 배달네트워크 참여자가 없으면 아무 것도 활성화되기가 어렵다….')

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
                Step2 (브레인 스토밍) - 브레인 스토밍
              </p>
            </div>
            <div class="flex flex-col mx-auto" style="min-height:580px">
              <div class="text-center my-4">
                토론에서 나온 문제 중에서 가장 해결이 필요한 <br />
                핵심 문제를 선정하고 이유를 설명해주세요
                <p class="mt-2 text-sm text-muted-400">
                  이중에서 해결이 꼭 필요한 문제 하나를<br />
                  선택하고 이유를 설명해주세요
                </p>
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
                <BaseButton shape="curved" class="mx-1" to="/brainstorming/step2/">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" >
                  수정
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="/brainstorming/step2/step2-3">
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
                다시 정리해보았어요. 선택하여 수정하세요
              </BaseMessage>
              <div class="flex justify-end mb-4">
                <BaseButton size="sm" class="mx-1">아니오</BaseButton>
                <BaseButton color="primary" size="sm" class="mx-1">예</BaseButton>
              </div>
              <div class="relative ailist" :class="aiList ? 'active' : ''" style="height: 534px;">
                <div class="blur-sm ailist__list">
                  <BaseList class="mx-6 text-sm break-keep">
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('문제의 핵심은 주민 참여도를 높이는 것이다. 배달네트워크 참여자의 부재로 인해 아무 것도 활성화되기가 어렵다.')">Case 1</p>
                      문제의 핵심은 주민 참여도를 높이는 것이다. 배달네트워크 참여자의 부재로 인해 아무 것도 활성화되기가 어렵다.<br />
                      <details class="group my-4">
                        <summary
                          class="nui-focus hover:bg-muted-100 dark:hover:bg-muted-700/70 text-muted-500 dark:text-muted-400 inline-flex cursor-pointer list-none items-center justify-center gap-2 rounded-lg px-2 py-1.5 font-sans text-[0.8rem] transition-all duration-100"
                        >
                          <span class="inline group-open:hidden">더 많은 사례 보기</span>
                          <span class="hidden group-open:inline">더 많은 사례 보기</span>
                          <Icon
                            name="lucide:chevron-down"
                            class="text-muted-400 h-4 w-4 transition-transform duration-200 group-open:rotate-180"
                          />
                        </summary>
                        <div class="mt-4">
                          <BaseList class="mx-6 text-sm break-keep">
                            <li @click="updateValue('문장 정리 케이스1 정리 해서 샘플로 제시한다')">
                              문장 정리 케이스1 정리 해서 샘플로 제시한다
                            </li>
                            <li @click="updateValue('문장 정리 케이스1 정리 해서 샘플로 제시한다')">
                              문장 정리 케이스1 정리 해서 샘플로 제시한다
                            </li>
                            <li @click="updateValue('문장 정리 케이스1 정리 해서 샘플로 제시한다')">
                              문장 정리 케이스1 정리 해서 샘플로 제시한다
                            </li>
                          </BaseList>
                        </div>
                      </details>
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