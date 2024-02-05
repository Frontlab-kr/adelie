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
const value = ref('이웃간의 소통을 강화하면서 이익을 공유하는 가치가 있음')

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
                Step2 (브레인 스토밍) - 서비스 컨셉 도출
              </p>
            </div>
            <div class="flex flex-col mx-auto" style="min-height:580px">
              <div class="text-center my-4">
                [<strong>이웃간 배달 대행 앱 서비스</strong>]의 가치를 작성해보세요
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
                <BaseButton shape="curved" class="mx-1" to="/brainstorming/step2/step2-42">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="/brainstorming/step2/step2-44">
                  다음
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
                      <p class="cursor-pointer underline" @click="updateValue('')">Case 1</p>                      
                      [이웃간 음식 배달 대행 앱서비스] 가치 제안:<br />
                      <br />
                      사회적 연대 및 협력 강화:<br />
                      <br />
                      이웃 간의 협력을 통해 지역사회의 연대를 촉진하고, 서로에게 도움을 주고 받음으로써 지역 사회의 유대감을 강조합니다.<br />
                      편리하고 안전한 음식 배달 서비스:<br />
                      <br />
                      노약자와 서비스가 필요한 이웃들에게 안전하고 편리한 음식 배달 서비스를 제공하여 일상 생활의 불편함을 해소하고 삶의 질을 향상시킵니다.<br />
                      지역 경제 지원과 소득 기회 제공:<br />
                      <br />
                      지역 주민들에게 일자리 창출과 소득 기회를 제공하여 지역 경제를 지원하고, 배달 대행 서비스를 통한 소득을 향상시켜 경제적 자립을 돕습니다.<br />
                      지속 가능한 배달 옵션과 환경 책임:<br />
                      <br />
                      지속 가능한 배달 옵션을 강조하여 환경에 대한 책임을 실천하며, 환경 친화적인 선택을 통해 지역사회의 환경적 가치를 증진시킵니다.<br />
                      지역 사회의 신뢰와 연결 강화:<br />
                      <br />
                      서비스를 통해 지역 사회의 신뢰와 연결을 강화하여 사회적 교류와 지역 사회의 발전에 기여합니다.<br />
                      음식점의 매출 증대와 홍보 효과:<br />
                      <br />
                      플랫폼을 통한 협력을 통해 음식점은 매출을 늘리고 홍보 효과를 얻을 수 있으며, 쿠폰 및 할인 시스템을 통한 고객 유인을 지원합니다.<br />
                      [이웃간 음식 배달 대행 앱서비스]는 이러한 가치를 중심으로 고객, 배송 서비스 제공자, 지역 사회, 그리고 협력하는 음식점들에게 다양한 혜택을 제공하는 ganzheitsansatz(전체적인 접근)를 추구합니다.
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