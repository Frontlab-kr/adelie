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
const value1 = ref('[기업의 강점과 약점, 니즈가 무엇인지 구체적으로 작성]\n젊은 창업자들로 구성되어 있고 의욕에 넘치지만 자원이 부족하고 음식배달서비스의 경험이 없음')
const value2 = ref('[서비스를 소비하는 주체로, 고객의 불편사항과 원하는 것을 작성]\n 현재 배달 플랫폼의 배달 수수료가 너무 비싸고 이웃간의 소통이 점차로 약해지고 있음')
const value3 = ref('[경쟁자의 전략, 약점, 강점 작성]\n현존 음식주문 배달 플랫폼은 상업적 목적만 있어서 오버헤드가 비싸고 노동착취가 발생함')

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
                Step2 (브레인 스토밍) - 3C, SWOT 분석
              </p>
            </div>
            <div class="flex flex-col mx-auto" style="min-height:580px">
              <div class="text-center my-4">
                시장의 변화를 읽어보는 3C분석해보세요.
              </div>
              <BaseList ordered class="mx-20 px-20 text-sm break-keep">
                <li>회사 (Company)관점에서 강점, 약점, 니즈를 파악한다</li>
                <li>고객 (Customer)관점에서 불편사항, 원하는 것, 행동을 분석한다</li>
                <li>경쟁자(Competitor) 관점에서 전략 약점 강점을 탐색한다</li>
              </BaseList>
              <TairoTable class="text-center my-8">
                <TairoTableRow>
                  <TairoTableCell style="width:140px" class="bg-amber-50">
                    회사<br />
                    (Company)
                  </TairoTableCell>
                  <TairoTableCell class="px-4">
                    <BaseTextarea
                      v-model="value1"
                      shape="rounded"
                      placeholder="내용을 입력해주세요."
                      color-focus
                    />
                  </TairoTableCell>
                </TairoTableRow>
                <TairoTableRow>
                  <TairoTableCell style="width:140px" class="bg-amber-50">
                    고객<br />
                    (Customer)
                  </TairoTableCell>
                  <TairoTableCell class="px-4">
                    <BaseTextarea
                      v-model="value2"
                      shape="rounded"
                      placeholder="내용을 입력해주세요."
                      color-focus
                    />
                  </TairoTableCell>
                </TairoTableRow>
                <TairoTableRow>
                  <TairoTableCell style="width:140px" class="bg-amber-50">
                    경쟁자<br />
                    (Competitor)
                  </TairoTableCell>
                  <TairoTableCell class="px-4">
                    <BaseTextarea
                      v-model="value3"
                      shape="rounded"
                      placeholder="내용을 입력해주세요."
                      color-focus
                    />
                  </TairoTableCell>
                </TairoTableRow>
              </TairoTable>
              <div class="flex justify-center mt-auto">
                <BaseButton shape="curved" class="mx-1" to="/brainstorming/step2/step2-24">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" >
                  내용수정
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="/brainstorming/step2/step2-26">
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
                3C를 다시 자세하게 정리했어요. 선택해서 활용하세요
              </BaseMessage>
              <div class="flex justify-end mb-4">
                <BaseButton size="sm" class="mx-1">아니오</BaseButton>
                <BaseButton color="primary" size="sm" class="mx-1">예</BaseButton>
              </div>
              <div class="relative ailist" :class="aiList ? 'active' : ''" style="height: 534px;">
                <div class="blur-sm ailist__list">
                  <BaseList ordered class="mx-6 text-sm break-keep">
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('기업 강점:\n젊은 창업자들로 구성된 우리 팀은 높은 의욕과 창의력을 통해 혁신적인 서비스를 개발할 수 있습니다. 팀 멤버들은 각자의 다양한 전문성을 가지고 있어, 다양한 측면에서 문제를 해결하고 서비스를 발전시킬 수 있습니다.\n\n기업 약점:\n우리는 창업 초기 단계에서 자원이 부족하며, 마케팅, 기술 개발, 인프라 구축 등의 부분에서 한계를 경험할 수 있습니다. 또한, 음식배달서비스 경험이 부족하여 업계 동향 및 사용자 경험에 대한 이해가 미흡할 수 있습니다.\n\n기업 니즈:\n우리는 자긍심을 가진 혁신적인 서비스를 제공하고자 하며, 자원 부족을 극복하기 위해 효율적인 자원 확보가 필요합니다. 또한, 음식배달서비스 경험이 부족하므로 업계 전문가와의 협력, 교육 및 컨설팅을 통해 경영 노하우를 향상시키고자 합니다.')">Case 1</p>
                      기업 강점:<br />
                      젊은 창업자들로 구성된 우리 팀은 높은 의욕과 창의력을 통해 혁신적인 서비스를 개발할 수 있습니다. 팀 멤버들은 각자의 다양한 전문성을 가지고 있어, 다양한 측면에서 문제를 해결하고 서비스를 발전시킬 수 있습니다.<br />
                      <br />
                      기업 약점:<br />
                      우리는 창업 초기 단계에서 자원이 부족하며, 마케팅, 기술 개발, 인프라 구축 등의 부분에서 한계를 경험할 수 있습니다. 또한, 음식배달서비스 경험이 부족하여 업계 동향 및 사용자 경험에 대한 이해가 미흡할 수 있습니다.<br />
                      <br />
                      기업 니즈:<br />
                      우리는 자긍심을 가진 혁신적인 서비스를 제공하고자 하며, 자원 부족을 극복하기 위해 효율적인 자원 확보가 필요합니다. 또한, 음식배달서비스 경험이 부족하므로 업계 전문가와의 협력, 교육 및 컨설팅을 통해 경영 노하우를 향상시키고자 합니다.
                    </li>
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('경쟁자의 전략:\n경쟁자들은 주로 상업적 목적에 중점을 두어 음식주문 배달 플랫폼을 운영하고 있습니다. 이는 높은 광고비 및 마케팅 활동, 서비스의 확장 등으로 인해 상당한 오버헤드를 발생시키고 있습니다.\n\n경쟁자의 약점:\n\n높은 오버헤드: 경쟁자는 상업적 목적을 중시하여 높은 광고 및 운영비용을 감당해야 합니다. 이로 인해 사용자에 대한 부담이 커지고, 배달료가 상승할 수 있습니다.\n노동착취 우려: 경쟁자의 높은 운영비용을 상쇄하기 위해 노동자에게 저렴한 가격으로 일을 시키는 경향이 있어, 노동착취 우려가 있습니다.\n경쟁자의 강점:\n\n브랜드 인식 및 광고력: 일부 경쟁자들은 강력한 브랜드 인식과 광고력을 보유하고 있어, 많은 사용자들이 그들의 서비스를 알고 이용하고 있습니다.\n서비스 다양성 및 네트워크 효과: 일부 경쟁자들은 다양한 음식점과의 제휴, 다양한 메뉴 옵션, 그리고 사용자들 간의 리뷰 및 평가 시스템을 통해 네트워크 효과를 구축하고 있습니다.\n경쟁자들의 약점을 파악하고 이를 극복하는데 중점을 두며, 경쟁자의 강점을 이용하여 우리 서비스의 독특한 가치를 부각시킬 수 있을 것입니다.')">Case 2</p>
                      경쟁자의 전략:<br />
                      경쟁자들은 주로 상업적 목적에 중점을 두어 음식주문 배달 플랫폼을 운영하고 있습니다. 이는 높은 광고비 및 마케팅 활동, 서비스의 확장 등으로 인해 상당한 오버헤드를 발생시키고 있습니다.<br />
                      <br />
                      경쟁자의 약점:<br />
                      <br />
                      높은 오버헤드: 경쟁자는 상업적 목적을 중시하여 높은 광고 및 운영비용을 감당해야 합니다. 이로 인해 사용자에 대한 부담이 커지고, 배달료가 상승할 수 있습니다.<br />
                      노동착취 우려: 경쟁자의 높은 운영비용을 상쇄하기 위해 노동자에게 저렴한 가격으로 일을 시키는 경향이 있어, 노동착취 우려가 있습니다.<br />
                      경쟁자의 강점:<br />
                      <br />
                      브랜드 인식 및 광고력: 일부 경쟁자들은 강력한 브랜드 인식과 광고력을 보유하고 있어, 많은 사용자들이 그들의 서비스를 알고 이용하고 있습니다.<br />
                      서비스 다양성 및 네트워크 효과: 일부 경쟁자들은 다양한 음식점과의 제휴, 다양한 메뉴 옵션, 그리고 사용자들 간의 리뷰 및 평가 시스템을 통해 네트워크 효과를 구축하고 있습니다.<br />
                      경쟁자들의 약점을 파악하고 이를 극복하는데 중점을 두며, 경쟁자의 강점을 이용하여 우리 서비스의 독특한 가치를 부각시킬 수 있을 것입니다.<br />
                    </li>
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('불편사항:\n현재 사용 중인 배달 플랫폼에서의 배달 수수료가 지나치게 비싸다는 불만이 있습니다. 또한, 이웃간의 소통이 더 이상 강조되지 않고 있는데, 이로 인해 지역사회와의 유대감이 감소하고 있습니다.\n\n원하는 것:\n\n합리적인 배달 수수료: 더 합리적이고 경제적인 배달 수수료가 적용되었으면 합니다. 고객들은 서비스를 이용함에 있어 추가적인 부담을 최소화하고자 합니다.\n\n강화된 지역사회 소통: 이웃과의 소통을 강화하고 서로 도움을 주고 받을 수 있는 기능이 강조되면 좋겠습니다. 지역사회의 활성화와 유대감을 증진시키는 데 기여할 것으로 기대합니다.\n\n이러한 개선이 서비스 이용자들에게 높은 만족도를 제공할 것으로 기대됩니다.')">Case 3</p>
                      불편사항:<br />
                      현재 사용 중인 배달 플랫폼에서의 배달 수수료가 지나치게 비싸다는 불만이 있습니다. 또한, 이웃간의 소통이 더 이상 강조되지 않고 있는데, 이로 인해 지역사회와의 유대감이 감소하고 있습니다.<br />
                      <br />
                      원하는 것:<br />
                      <br />
                      합리적인 배달 수수료: 더 합리적이고 경제적인 배달 수수료가 적용되었으면 합니다. 고객들은 서비스를 이용함에 있어 추가적인 부담을 최소화하고자 합니다.<br />
                      <br />
                      강화된 지역사회 소통: 이웃과의 소통을 강화하고 서로 도움을 주고 받을 수 있는 기능이 강조되면 좋겠습니다. 지역사회의 활성화와 유대감을 증진시키는 데 기여할 것으로 기대합니다.<br />
                      <br />
                      이러한 개선이 서비스 이용자들에게 높은 만족도를 제공할 것으로 기대됩니다.
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