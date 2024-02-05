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
const value = ref('노약자와 서비스가 필요한 이웃들에게 음식을 같이 배달해주고 경제적 이익을 공유하는 혜택이 있고 마케팅은 시간이 많은 주부들 대상을 배달원을 모을 것 이고 음식점입장에서 매출을 늘릴 수 있는 쿠폰시스템과 할인시스템을 도입')

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
                [<strong>이웃간 배달 대행 앱 서비스</strong>] 핵심 타겟 그룹에게 <br />주는 혜택과 마케팅 핵심 포인트 작성하세요
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
                <BaseButton shape="curved" class="mx-1" to="/brainstorming/step2/step2-41">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="/brainstorming/step2/step2-43">
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
                      핵심 타겟 그룹에게 주는 혜택:<br />
                      <br />
                      노약자 및 서비스가 필요한 이웃들:<br />
                      음식 배달 및 공동 주문 혜택: 노약자나 서비스가 필요한 이웃들에게는 편리하고 안전한 음식 배달 서비스를 제공하며, 주문을 함께 공유하여 배달 비용을 절감할 수 있습니다.<br />
                      경제적 혜택: 서비스 제공자로서 노약자 및 서비스가 필요한 이웃들은 배달 대행을 통해 소득을 올리고 경제적으로 혜택을 받을 수 있습니다.<br />
                      마케팅 핵심 포인트:<br />
                      <br />
                      주부들을 대상으로 한 배달원 모집:<br />
                      <br />
                      플렉시블한 일정과 부가 수입: 주부들에게 편리한 일정으로 일할 수 있는 기회를 제공하며, 부가 수입을 얻을 수 있는 배달원 모집을 강조합니다.<br />
                      사회적 참여와 지역 사회 기여: 주부들이 서비스를 통해 지역사회에 기여하고 동시에 소셜 네트워크를 형성할 수 있는 기회를 제공합니다.<br />
                      음식점을 위한 혜택 도입:<br />
                      <br />
                      매출 증대를 위한 쿠폰 시스템: 음식점은 플랫폼을 통해 쿠폰 시스템을 도입하여 할인 및 프로모션을 통해 매출을 늘리고 식당 인기를 높일 수 있습니다.<br />
                      할인 혜택을 통한 유인: 플랫폼을 통해 음식점은 특정 조건을 충족하는 주문에 대해 할인 혜택을 제공함으로써 고객 유인을 강화합니다.<br />
                      이웃간 음식 배달 대행 앱서비스는 이러한 혜택과 마케팅 전략을 통해 노약자 및 서비스가 필요한 이웃들에게 편의를 제공하고, 동시에 주부들과 음식점들에게는 경제적 이익과 사회적 가치를 제공하는 것을 목표로 합니다.
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