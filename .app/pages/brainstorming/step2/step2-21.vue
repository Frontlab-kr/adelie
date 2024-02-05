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
const value1 = ref('- 사용자의 위치를 정확하게 표시하고  원하는 만큼의 거리 설정이 가능하고 업데이트가 빠름\n\n- 게임 어플인 ‘오아시스’와 같이   ‘포돌이’ 또는 ‘포순이’ 캐릭터를 키우며 그 레벨에 따라 등급제로 운영되며 등급에 따라 다양한 혜택을 제공')
const value2 = ref('- 쿠폰티켓배부를 통해 당선작선정하고 먹는 모습 적극적인 홍보 실시  ( SNS, 영화관,  TV,  유튜브광고 등 )\n\n- 이웃에게 배달하고 같이 먹는 영상\n\n- 추가 수입 액수 보여주기')
const value3 = ref('- 사용자가 보기 쉽게 복잡하지 않고\n심플하게 화면을 구성 (단색, 특정 아이콘이나 이미지에는 배경과 반대되는 보색사용 등)\n\n- 긴 문장이나 설명이 아닌 한 눈에\n봐도 알 수 있는 보기 쉬운 아이콘\n또는 간단한 키워드 위주로 \n메뉴와 기능을 나타내어 사용자의\n이해를 도움\n\n- 사용자에게 필요한 화면이나 \n기능을 나타내는 아이콘을 선택해\n화면 기능으로 표시 가능하게 함')

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
                Step2 (브레인 스토밍) - 벤치마킹
              </p>
            </div>
            <div class="flex flex-col mx-auto" style="min-height:580px">
              <div class="text-center my-4">
                대상과 항목을 표로 만들어 비교 분석하기
              </div>
              <TairoTable shape="straight">
                <template #header>
                  <TairoTableHeading class="text-center">비교항목 (예)기능 / 서비스</TairoTableHeading>
                  <TairoTableHeading class="text-center">비교항목 (예)비즈니스 모델</TairoTableHeading>
                  <TairoTableHeading class="text-center">비교항목 (예)UI / UX</TairoTableHeading>
                </template>

                <TairoTableRow class="mb-4">
                  <TairoTableCell class="px-4" style="white-space: normal !important; vertical-align: top;">
                    <BaseTextarea
                      v-model="value1"
                      shape="rounded"
                      placeholder="내용을 입력해주세요."
                      color-focus
                      style="height: 340px;"
                    />
                  </TairoTableCell>
                  <TairoTableCell class="px-4" style="white-space: normal !important; vertical-align: top;">
                    <BaseTextarea
                      v-model="value2"
                      shape="rounded"
                      placeholder="내용을 입력해주세요."
                      color-focus
                      style="height: 340px;"
                    />
                  </TairoTableCell>
                  <TairoTableCell class="px-4" style="white-space: normal !important; vertical-align: top;">
                    <BaseTextarea
                      v-model="value3"
                      shape="rounded"
                      placeholder="내용을 입력해주세요."
                      color-focus
                      style="height: 340px;"
                    />                
                  </TairoTableCell>
                </TairoTableRow>
              </TairoTable>
              <div class="flex justify-center mt-auto">
                <BaseButton shape="curved" class="mx-1" to="/brainstorming/step2/step2-20">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" >
                  내용수정
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="/brainstorming/step2/step2-22">
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
                제가 발견한 추가 항목 입니다.
              </BaseMessage>
              <div class="flex justify-end mb-4">
                <BaseButton size="sm" class="mx-1">아니오</BaseButton>
                <BaseButton color="primary" size="sm" class="mx-1">예</BaseButton>
              </div>
              <div class="relative ailist" :class="aiList ? 'active' : ''" style="height: 534px;">
                <div class="blur-sm ailist__list">
                  <BaseList ordered class="mx-6 text-sm break-keep">
                    <li>
                      <p class="cursor-pointer underline">Case 1</p>
                      이웃간의 매칭이 거리근거에 의해서 정확함<br />
                      <br />
                      이웃의 사진을 볼 수 있도록 해줌<br />
                      <br />
                      이웃이 안전한 사림이라는 증명 제시
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