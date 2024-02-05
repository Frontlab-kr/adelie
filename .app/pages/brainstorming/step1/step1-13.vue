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
              <div class="text-center my-4 mb-8">
                <BaseHeading as="h4" size="lg" weight="semibold" class="text-muted-800 dark:text-white">
                  백오십님 <strong>이웃간 음식 배달 대행 앱서비스</strong> 서비스를 만드시는군요!
                </BaseHeading>
                <p class="mt-2 mx-10 text-sm text-muted-400 break-keep">
                  본 서비스에 대해서 우리 AI도 몇 가지 아이디어가 있습니다. 참고하세요
                </p>
              </div>
              <div class="overflow-auto" style="height:400px">
                <BaseList ordered class="p-4 px-8">
                  <li>
                    <p class="font-bold">
                      참여를 주민만으로 한정하고 배달할 수 있는 거리를 제한
                    </p>
                    전문배달인의 참여를 배제하고 커뮤니티를 활성화한다는 의미를 확대
                  </li>
                  <li>
                    <p class="font-bold">
                      지속적 참여자에 대한 보상 시스템
                    </p>
                    커뮤니티 활성화를 위해서 지속적 참여자에 대한 추가 보상
                  </li>
                  <li>
                    <p class="font-bold">
                      온라인 커뮤니티 활성화
                    </p>
                    배달뿐 아니라 생활정보를 공유할 수 있는 시스템 제공
                  </li>
                  <li>
                    <p class="font-bold">
                      주민센터와의 연계
                    </p>
                    주민복지센터와 연계하여 활동하고 네트워킹 강화
                  </li>
                </BaseList>
              </div>
              <div class="flex justify-center mt-auto">
                <BaseButton shape="curved" class="mx-1" to="step1-12">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="step1-14">
                  확인하기
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
              <BaseMessage type="info" class="mb-4 break-keep">제 아이디어인데 추가 및 수정 해보세요</BaseMessage>
              <div class="flex justify-end mb-4">
                <BaseButton size="sm" class="mx-1">아니오</BaseButton>
                <BaseButton color="primary" size="sm" class="mx-1">예</BaseButton>
              </div>
            </div>
          </BaseCard>
        </div>        
      </pane>
    </splitpanes>
  </div>
</template>
