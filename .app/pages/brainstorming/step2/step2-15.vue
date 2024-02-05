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
const value = ref('“[이웃간 음식 배달 대행 앱]의 사용자의 니즈를 파악하기 위해 심층인터뷰를 실시하였다.\n[인터뷰 목적]에 맞는 참여자로 [대상군 표기]를 10~20명을 선정하여,\n[인터뷰 질문 요약] 등 약 10개의 주요 질문을 중심으로 진행했다 \n[참여자 인터뷰 방식(대면, 온라인)]으로 택해 약[몇 일]동안 진행되었고,\n[참여자 행동이나 태도 요약]를 고려하여 원활하게 인터뷰를 마쳤다.\n수집된 데이터를 통해 Say Do Think Feel 방법을 활용하여 분석하였고,\n그 결과 [인터뷰 해석 결과]처럼 유의한 결과가 나왔다. \n심층 인터뷰를 통해 사용가 원하는 니즈는 ‘[사용자 니즈 정리]’로 도출되었다”')

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
                Step2 (브레인 스토밍) - 인터뷰하기
              </p>
            </div>
            <div class="flex flex-col mx-auto" style="min-height:580px">
              <div class="text-center my-4">
                심층 인터뷰 결과 문장으로 표현해보세요
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
                <BaseButton shape="curved" class="mx-1" to="/brainstorming/step2/step2-14">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" >
                  내용수정
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="/brainstorming/step2/step2-16">
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
                      <p class="cursor-pointer underline" @click="updateValue('이웃간 음식 배달 대행 앱의 사용자 니즈를 파악하기 위해 심층 인터뷰를 실시했습니다. 인터뷰 목적에 맞는 참여자로 10~20명의 대상군을 선정하여, 약 10개의 주요 질문을 중심으로 진행했습니다. 대면 또는 온라인 방식으로 선택된 참여자들과 약 몇 일 동안 인터뷰를 진행하였고, 참여자들의 행동이나 태도를 고려하여 원활하게 인터뷰를 완료했습니다. 수집된 데이터를 Say Do Think Feel 방법을 활용하여 분석한 결과, 유의미한 인터뷰 해석 결과가 도출되었습니다. 이를 통해 사용자의 원하는 니즈는 사용자 니즈 정리로 정의되었습니다.')">Case 1</p>
                      "이웃간 음식 배달 대행 앱의 사용자 니즈를 파악하기 위해 심층 인터뷰를 실시했습니다. 인터뷰 목적에 맞는 참여자로 10~20명의 대상군을 선정하여, 약 10개의 주요 질문을 중심으로 진행했습니다. 대면 또는 온라인 방식으로 선택된 참여자들과 약 몇 일 동안 인터뷰를 진행하였고, 참여자들의 행동이나 태도를 고려하여 원활하게 인터뷰를 완료했습니다. 수집된 데이터를 Say Do Think Feel 방법을 활용하여 분석한 결과, 유의미한 인터뷰 해석 결과가 도출되었습니다. 이를 통해 사용자의 원하는 니즈는 '사용자 니즈 정리'로 정의되었습니다."
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