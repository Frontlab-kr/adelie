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
//const value = ref('동네주부들의 배달 참여 의사 확인 a. 현재까지 배달 서비스를 이용한 경험이 있으신가요? 있다면 그 경험에 대해 공유해 주실 수 있을까요? b. 동네 주부분들이 함께 참여하는 배달 서비스에 참여하고 싶다면, 어떤 종류의 상품이나 음식을 공동 주문하고 싶으신가요? c. 배달 서비스 참여에 있어서 어떤 부분이 가장 중요하다고 생각하시나요? 예를 들면 가격, 배송 시간, 품질 등이 있을 수 있습니다.\n\n노인층 배달 참여 의사 확인 a. 노인층을 위한 배달 서비스를 이용한 경험이 있으신가요? 있다면 어떤 점이 편리했고, 어떤 부분이 더 개선이 필요했다고 생각하시나요? b. 노인층을 위한 특별한 배달 서비스가 있다면, 어떤 서비스가 도움이 될 것 같아요? 예를 들어, 특별한 할인 혜택, 도움 손님 등이 있을 수 있습니다. c. 배달 서비스 이용에 있어서 가장 큰 어려움은 무엇인지 알려주실 수 있을까요?\n\n적정 배달 요금 배분의 문제 a. 현재 이용 중인 배달 서비스의 배송료에 대해 어떤 생각을 가지고 계세요? 만약 높다고 느끼신다면, 어떤 부분에서 불만족스러웠나요? b. 어떤 경우에 배송료가 합리적으로 느껴지나요? 예를 들어, 최소 주문 금액을 충족하면 무료 배송, 특정 시간대에 할인된 배송료 등이 있을 수 있습니다. c. 적정한 배송료를 정하는데 어떤 기준을 생각하시나요? 배송 거리, 주문 금액, 배송 시간 등이 고려되어야 하는 사항이 있다면 알려주실 수 있을까요?')

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
              <div class="text-center my-4 mb-10">
                인터뷰 후 수집된 데이터를 분석하고<br />
                결과를 도출하고 이를 해석한다. 
                <p class="mt-2 mx-10 text-sm text-muted-400">
                  (질문에 대한 답변 리스트를 정리하고, 공통된 응답들 중에서 '말하고자 하는 것(Say)',  ‘생각하는 것(Think)', '행동으로 표출되는 것(Do)', '느끼는 것(Feel)'으로 구분하여 내용을 정리한다. 이를 통해 참여자들이 겪는 문제나 불편함, 그리고 니즈를 분석한다.)
                </p>
                <TairoTable shape="straight" class="mt-10">
                  <template #header>
                    <TairoTableHeading class="text-center">Say</TairoTableHeading>
                    <TairoTableHeading class="text-center">Think</TairoTableHeading>
                    <TairoTableHeading class="text-center">Do</TairoTableHeading>
                    <TairoTableHeading class="text-center">Feel</TairoTableHeading>
                  </template>

                  <TairoTableRow>
                    <TairoTableCell class="px-4">
                      배달하겠음
                    </TairoTableCell>
                    <TairoTableCell class="px-4">
                      체면구김
                    </TairoTableCell>
                    <TairoTableCell class="px-4">
                      내 아파트말고 다른 아파트는 배달
                    </TairoTableCell>
                    <TairoTableCell class="px-4">
                      수입 기쁨
                    </TairoTableCell>
                  </TairoTableRow>
                  <TairoTableRow>
                    <TairoTableCell class="px-4">
                      <BaseTextarea
                        v-model="value"
                        shape="rounded"
                        placeholder="인터뷰 내용 작성"
                        color-focus
                      />
                    </TairoTableCell>
                    <TairoTableCell class="px-4">
                      <BaseTextarea
                        v-model="value"
                        shape="rounded"
                        placeholder="인터뷰 내용 작성"
                        color-focus
                      />
                    </TairoTableCell>
                    <TairoTableCell class="px-4">
                      <BaseTextarea
                        v-model="value"
                        shape="rounded"
                        placeholder="인터뷰 내용 작성"
                        color-focus
                      />
                    </TairoTableCell>
                    <TairoTableCell class="px-4">
                      <BaseTextarea
                        v-model="value"
                        shape="rounded"
                        placeholder="인터뷰 내용 작성"
                        color-focus
                      />
                    </TairoTableCell>                                        
                  </TairoTableRow>
                  <TairoTableRow>
                    <TairoTableCell colspan="4" class="px-4">
                      <BaseTextarea
                        v-model="value"
                        shape="rounded"
                        placeholder="총합 결과 도출"
                        color-focus
                      />
                    </TairoTableCell>                                      
                  </TairoTableRow>
                  <TairoTableRow>
                    <TairoTableCell colspan="4" class="px-4">
                      <BaseTextarea
                        v-model="value"
                        shape="rounded"
                        placeholder="결과에 대한 해석 작성"
                        color-focus
                      />
                    </TairoTableCell>                                      
                  </TairoTableRow>
                </TairoTable>
              </div>
              <div class="flex justify-center mt-auto">
                <BaseButton shape="curved" class="mx-1" to="/brainstorming/step2/step2-12">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" >
                  내용수정
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="/brainstorming/step2/step2-14">
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
                다른 성격의 응답자도 있어요. 종합하세요
              </BaseMessage>
              <div class="flex justify-end mb-4">
                <BaseButton size="sm" class="mx-1">아니오</BaseButton>
                <BaseButton color="primary" size="sm" class="mx-1">예</BaseButton>
              </div>
              <div class="relative ailist" :class="aiList ? 'active' : ''" style="height: 534px;">
                <div class="blur-sm ailist__list">
                  <BaseList class="mx-6 text-sm break-keep">
                    <li>
                      <p class="cursor-pointer underline">Case 1</p>
                      Say – 배달안해도 먹고사는데 문제 없음<br />
                      Think – 이웃이 도와주었으면 좋겠음<br />
                      Do – 이웃을 돕자<br />
                      Feel – 돕는 것이 귀챦다
                      <br />
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