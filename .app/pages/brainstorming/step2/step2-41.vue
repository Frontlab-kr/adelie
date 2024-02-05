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
const value = ref('이웃간에 배달을 대행해주고 배달료를 분배하는 형태의 사회적 서비스')

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
                [<strong>이웃간 배달 대행 앱 서비스</strong>]의 다른 서비스와 <br />
                차별화된 요소는 무엇인지 정리해보세요
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
                <BaseButton shape="curved" class="mx-1" to="/brainstorming/step2/step2-40">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="/brainstorming/step2/step2-42">
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
                      "이웃간 음식 배달 대행 앱서비스"가 다른 서비스와 차별화된 요소는 다음과 같습니다:<br />
                      <br />
                      사회적 가치 중심 서비스:<br />
                      다른 음식 배달 서비스들과 달리, 이 앱서비스는 이웃 간의 협력과 사회적 상호 도움을 강조합니다. 배달 대행을 통해 지역 사회의 연대와 협력을 촉진하며, 배달료는 공정하게 분배됩니다.<br />
                      <br />
                      지역사회 강화:<br />
                      서비스는 지역사회 강화에 초점을 맞춥니다. 지역 주민들이 서로에게 도움을 주고 받음으로써 지역 사회의 유대감을 강화하고 지속 가능한 지역 경제를 지원합니다.<br />
                      <br />
                      배달료의 공정한 분배:<br />
                      배달 대행 서비스를 제공하는 사람들에 대한 배달료가 공정하게 분배됩니다. 이는 서비스를 제공하는 이웃들 간의 협력을 장려하고 노동에 대한 공정한 보상을 제공함으로써 차별화를 이룹니다.<br />
                      <br />
                      지속 가능성과 환경 측면 강조:<br />
                      서비스는 지속 가능한 배달 옵션을 강조하며, 환경에 친숙한 배달 방식을 촉진합니다. 이는 지역사회의 환경 책임을 강조하며 환경 친화적인 선택을 장려하는 차별화된 특징입니다.<br />
                      <br />
                      사회적 연결과 신뢰 증진:<br />
                      서비스는 이웃 간의 신뢰와 연결을 촉진합니다. 지역 주민들이 실제로 서로의 의지가 되며, 서비스를 통해 사회적인 교류와 신뢰 구축이 강조됩니다.<br />
                      이러한 차별화된 특징들은 단순히 음식 배달을 넘어서 이웃 간의 협력과 지역사회 강화를 중시하는 사회적 가치 중심의 서비스를 나타냅니다.
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