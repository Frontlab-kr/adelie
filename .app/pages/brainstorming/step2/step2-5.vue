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
const value = ref('1. 같이 놀기\n윷놀이, 동네 등산, 화투치기, 회식하기\n2. 같이 공부하기\n오토바이 훈련\n3. 같이 운동하기\n아침 조깅, 자전거 확보, \n4. 경제성 높이기\n배달 스테이션 구성, 별도 보험 가입\n5. 온라인 활동 강화\n카페 개설, 경험공유')

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
                연상되는 키워드를 나열해보고, 그룹핑을 통해<br />
                아이디어를 정리해보세요 
                <p class="mt-2 text-sm text-muted-400">
                  정리된 키워드를 가지고 비슷한 속성끼리 그룹핑 해보세요.
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
                <BaseButton shape="curved" class="mx-1" to="/brainstorming/step2/step2-4">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" >
                  수정
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="/brainstorming/step2/step2-6">
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
                제가 그룹핑한 거예요. 자유롭게 활용하세요
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
                      온오프 공동 활동<br />
                      놀면서 공부하기<br />
                      운동하고 음식 같이 소비<br />
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