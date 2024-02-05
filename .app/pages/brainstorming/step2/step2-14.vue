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
const value = ref('1. 동네주부들의 배달 참여 의사 확인\n배달에 참여할 주부의 수요가 적절하게 있고 주로 낮시간이나 저녁 시간에 배달할 수 있음. 자녀가 있는 젊은 주부들도 아이들 등하교 시간을 제외하고 참여의사가 있음\n\n2. 노인층 배달 참여 의사 확인\n노년층은 자전거나 도보는 싫어하고 자동차를 선호함. 노인들이 오히려 배달거리가 길게 나타남\n\n3. 적정 배달 요금 배분의 문제\n건딩 2000원을 받아야 배달을 할 것 같음. 추산하자면 한번에 5개를 배달해야 수익이 적정해짐, 이웃 5군데 배달하면 수익이 만원 발생, 쿠폰제도에는 적극적 의사가 있음')

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
                수집된 데이터를 기반으로 하여<br />
                각각의 인터뷰 질문에 대한 결과를 작성해보세요.
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
                <BaseButton shape="curved" class="mx-1" to="/brainstorming/step2/step2-13">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" >
                  내용수정
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="/brainstorming/step2/step2-15">
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
                다시 정리했어요. 복사하셔서 활용하세요
              </BaseMessage>
              <div class="flex justify-end mb-4">
                <BaseButton size="sm" class="mx-1">아니오</BaseButton>
                <BaseButton color="primary" size="sm" class="mx-1">예</BaseButton>
              </div>
              <div class="relative ailist" :class="aiList ? 'active' : ''" style="height: 534px;">
                <div class="blur-sm ailist__list">
                  <BaseList ordered class="mx-6 text-sm break-keep">
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('동네주부들의 배달 참여 의사 확인:\n주부들의 참여 의사가 적절하게 있음.\n주로 낮시간이나 저녁 시간에 배달 가능.\n자녀가 있는 젊은 주부들도 아이들의 등하교 시간을 제외하고 참여 의사가 있음.\n\n노인층 배달 참여 의사 확인:\n노인층은 자전거나 도보 이동을 싫어하며 자동차 이용을 선호함.\n노인들의 배달 거리가 상대적으로 길게 나타남.\n\n적정 배달 요금 배분의 문제:\n건당 2000원의 배달료가 적정하다고 판단됨.\n예상 수익을 고려할 때, 한 번에 5개의 주문을 처리해야 수익이 적정해짐.\n이웃 5군데에 배달하면 만원의 수익이 발생하며, 쿠폰제도에 대한 적극적인 의사가 있음.')">Case 1</p>
                      동네주부들의 배달 참여 의사 확인:<br />
                      주부들의 참여 의사가 적절하게 있음.<br />
                      주로 낮시간이나 저녁 시간에 배달 가능.<br />
                      자녀가 있는 젊은 주부들도 아이들의 등하교 시간을 제외하고 참여 의사가 있음.<br />
                      <br />
                      노인층 배달 참여 의사 확인:<br />
                      노인층은 자전거나 도보 이동을 싫어하며 자동차 이용을 선호함.<br />
                      노인들의 배달 거리가 상대적으로 길게 나타남.<br />
                      <br />
                      적정 배달 요금 배분의 문제:<br />
                      건당 2000원의 배달료가 적정하다고 판단됨.<br />
                      예상 수익을 고려할 때, 한 번에 5개의 주문을 처리해야 수익이 적정해짐.<br />
                      이웃 5군데에 배달하면 만원의 수익이 발생하며, 쿠폰제도에 대한 적극적인 의사가 있음.
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