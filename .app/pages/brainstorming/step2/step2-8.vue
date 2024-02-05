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
const value = ref('소외되어 가는 현대에서 이웃간의 유대를 강화하는 동시에 서로 경제적 도움을 제공한다.')

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
                Step2 (브레인 스토밍) - 사용자니즈도출
              </p>
            </div>
            <div class="flex flex-col mx-auto" style="min-height:580px">
              <div class="text-center my-4">
                핵심 니즈를 문장으로 표현해보세요
              </div>
              <div style="font-size: 16px; line-height: 3;" class="my-6 p-6 bg-neutral-100 rounded-xl">
                <div class="flex whitespace-nowrap">
                  "<span class="inline-block w-full mx-2"><BaseInput shape="rounded" placeholder="" /></span> 의 사용자들은 다양한 어려움을 겪고 있었다. 
                </div>
                <div class="flex whitespace-nowrap">
                  이 중에서도 가장 두드러진 문제는 <span class="inline-block w-full mx-2"><BaseInput shape="rounded" placeholder="" /></span>였다. 
                </div>
                <div class="flex whitespace-nowrap">
                  토론을 통해 이러한 다양한 문제 중에서도 특히 해결이 급하게 필요한  핵심 문제는
                </div>
                <div class="flex whitespace-nowrap">
                  <span class="inline-block w-full me-2"><BaseInput shape="rounded" placeholder="" /></span>로 도출되었다. 
                </div>
                <div class="flex whitespace-nowrap">
                  우리는 이 핵심 문제를 해결하기 위해 <span class="inline-block w-full mx-2"><BaseInput shape="rounded" placeholder="" /></span>을 열심히 논의했다. 
                </div>
                <div class="flex whitespace-nowrap">
                  모든 토론과 논의를 거쳐 최종적으로 사용자의 진정한 니즈는 <span class="inline-block w-full mx-2"><BaseInput shape="rounded" placeholder="" /></span>로 정의되었다“
                </div>
                
              </div>
              <div class="flex justify-center mt-auto">
                <BaseButton shape="curved" class="mx-1" to="/brainstorming/step2/step2-7">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" >
                  내용수정
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="/brainstorming/step2/step2-9">
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
                문장 정리 한 거예요. 선택해서 수정하세요
              </BaseMessage>
              <div class="flex justify-end mb-4">
                <BaseButton size="sm" class="mx-1">아니오</BaseButton>
                <BaseButton color="primary" size="sm" class="mx-1">예</BaseButton>
              </div>
              <div class="relative ailist" :class="aiList ? 'active' : ''" style="height: 534px;">
                <div class="blur-sm ailist__list">
                  <BaseList class="mx-6 text-sm break-keep">
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('')">Case 1</p>
                      "[이웃간 음식 배달 대행 앱] 사용자들은 다양한 어려움에 직면하고 있었습니다. 토론을 통해 가장 두드러진 문제는 높은 배달료였습니다. 특히, 이중에서 급하게 해결이 필요한 핵심 문제로 [노약자 배달]이 도출되었습니다. 이 중요한 문제를 해결하기 위해, 우리는 [이웃 간의 공유]에 대해 열심히 논의했습니다. 최종적으로, 사용자의 진정한 니즈는 [이웃 돕기]로 정의되었습니다."
                      <br />
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
                            <li>
                              문장 정리 케이스1 정리 해서 샘플로 제시한다
                            </li>
                            <li>
                              문장 정리 케이스1 정리 해서 샘플로 제시한다
                            </li>
                            <li>
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