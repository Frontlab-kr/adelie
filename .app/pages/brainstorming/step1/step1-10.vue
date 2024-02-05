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
const value = ref('음식 배달료 저렴화\n추가 수입 확보\n이웃과 친해지기\n체력 강화')

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
              <div class="text-center my-4">
                ⑧ 사용자가 이 서비스를 이용함으로써 얻는 이점은 무엇인가요?
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
                <BaseButton shape="curved" class="mx-1" to="step1-9">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="step1-11">
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
              <BaseMessage type="info" class="mb-4 break-keep">문장을 정리해보세요</BaseMessage>
              <div class="relative ailist" :class="aiList ? 'active' : ''">
                <div class="blur-sm ailist__list">
                  <BaseList class="mx-6 text-sm break-keep">
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('음식 배달료를 저렴하게 유지하여 소비자에게 혜택을 제공하고, 추가 수입을 확보하여 경제적인 안정을 도모하며, 이웃과의 교류를 통해 지역사회와 친해지고, 물리적 활동으로 체력을 강화합니다.')">Case 1</p>
                      음식 배달료를 저렴하게 유지하여 소비자에게 혜택을 제공하고, 추가 수입을 확보하여 경제적인 안정을 도모하며, 이웃과의 교류를 통해 지역사회와 친해지고, 물리적 활동으로 체력을 강화합니다.
                    </li>
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('음식 배달료를 싸게 유지해서 돈 아끼고, 여유 수입을 늘려서 경제적으로 편하게 살고, 이웃들과 친해져서 지역사회에 잘 적응하면서, 물리적으로도 건강을 챙겨보자.')">Case 2</p>
                      음식 배달료를 싸게 유지해서 돈 아끼고, 여유 수입을 늘려서 경제적으로 편하게 살고, 이웃들과 친해져서 지역사회에 잘 적응하면서, 물리적으로도 건강을 챙겨보자.
                    </li>
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('-체력 강화: 지역을 돌아다니며 음식을 배달하면서 활동량을 늘려 건강을 챙길 수 있습니다.\n-이웃과 친해지기: 지역 내 음식 배달을 통해 이웃들과 소통하고 친밀감을 형성합니다.\n-추가 수입 확보: 음식 배달로 추가 수입을 얻어 경제적 안정을 높일 수 있습니다.\n-음식 배달료 저렴화: 소비자들에게 더 저렴한 가격으로 서비스를 제공하여 경제 부담을 줄입니다.')">Case 3</p>
                      -체력 강화: 지역을 돌아다니며 음식을 배달하면서 활동량을 늘려 건강을 챙길 수 있습니다.<br />
                      -이웃과 친해지기: 지역 내 음식 배달을 통해 이웃들과 소통하고 친밀감을 형성합니다.<br />
                      -추가 수입 확보: 음식 배달로 추가 수입을 얻어 경제적 안정을 높일 수 있습니다.<br />
                      -음식 배달료 저렴화: 소비자들에게 더 저렴한 가격으로 서비스를 제공하여 경제 부담을 줄입니다.
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