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
const value1 = ref('[서비스 강점 작성 ]\n구성원이 모두 젊고 패기가 넘친다')
const value2 = ref('[서비스 강점 작성 ]\n구성원이 모두 젊고 패기가 넘친다')
const value3 = ref('[서비스 강점 작성 ]\n구성원이 모두 젊고 패기가 넘친다')
const value4 = ref('[서비스 강점 작성 ]\n구성원이 모두 젊고 패기가 넘친다')

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
                아래 표를 참고하여 기획한 SWOT 항목에 맞게 <br />
                최대한 상세하게 내용을 작성합니다.
                <p class="mt-2 mx-10 text-sm text-muted-400 break-keep">
                  [SWOT 서비스 분석하기]
                </p>
              </div>

              <TairoTable class="text-center">
                <TairoTableRow>
                  <TairoTableCell rowspan="4" style="width:80px" class="bg-blue-50">내부<br />요인</TairoTableCell>
                  <TairoTableCell class="bg-pink-50">강점 (Strengths)</TairoTableCell>
                  <TairoTableCell class="bg-pink-50">기회 (Opportunities)</TairoTableCell>
                  <TairoTableCell rowspan="4" style="width:80px" class="bg-amber-50">외부<br />요인</TairoTableCell>
                </TairoTableRow>
                <TairoTableRow>
                  <TairoTableCell class="px-4">
                    <BaseTextarea
                      v-model="value1"
                      shape="rounded"
                      placeholder="내용을 입력해주세요."
                      color-focus
                    />
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
                  <TairoTableCell class="px-4">
                    <BaseTextarea
                      v-model="value3"
                      shape="rounded"
                      placeholder="내용을 입력해주세요."
                      color-focus
                    />
                  </TairoTableCell>
                  <TairoTableCell class="px-4">
                    <BaseTextarea
                      v-model="value4"
                      shape="rounded"
                      placeholder="내용을 입력해주세요."
                      color-focus
                    />
                  </TairoTableCell>
                </TairoTableRow>
                <TairoTableRow>
                  <TairoTableCell class="bg-gray-200">약점 (Weaknesses)</TairoTableCell>
                  <TairoTableCell class="bg-gray-200">위협 (Threats)</TairoTableCell>
                </TairoTableRow>
              </TairoTable>
              <div class="flex justify-center mt-auto">
                <BaseButton shape="curved" class="mx-1" to="/brainstorming/step2/step2-27">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" >
                  내용수정
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="/brainstorming/step2/step2-29">
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
                다시 정리했어요.<br />
                선택해서 활용하세요
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
                      "우리 서비스의 주요 강점은 구성원이 모두 젊고 패기 넘치는 젊은이들로 이루어져 있다는 점입니다. 이 역동적이고 열정적인 팀은 혁신적인 아이디어와 창의력을 바탕으로 서비스를 발전시키고, 고객들에게 독특하고 흥미로운 경험을 제공할 수 있습니다. 젊고 다양한 배경을 가진 구성원들이 협업하여 문제를 해결하고 서비스를 향상시키는 데 있어서 우리 팀의 강점이 있습니다."
                    </li>
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('')">Case 2</p>                      
                      "외부적으로 기회가 발생하고 있는 요소 중 하나는 지역 배달과 심부름 시장의 성장입니다. 이 산업의 성장은 우리 서비스에게 새로운 시장 진출과 고객 확장의 기회를 제공할 것으로 예상됩니다. 증가하는 배달 서비스 수요에 대응하여 우리는 혁신적인 방식으로 지역 커뮤니티와 소비자들에게 높은 가치를 제공할 수 있는 기회를 찾고 있습니다."
                    </li>
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('')">Case 3</p>                      
                      "우리 서비스의 주요 약점 중 하나는 경험이 부족하고 자본이 제한적이라는 점입니다. 신생 기업으로서 음식배달 서비스 업계에서 경험이 부족한 팀원들과 한정된 자본을 가지고 서비스를 제공하고 있습니다. 이로 인해 마케팅, 기술 개발, 그리고 인프라 구축 등의 측면에서 한계가 있을 수 있습니다. 이러한 한계를 극복하고 지속적인 성장을 위해서는 외부 자원과 협력, 효과적인 자금 조달이 필요합니다."
                    </li>
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('')">Case 4</p>                      
                      "외부적으로 우리 서비스에게 위협 요인으로 작용하는 것 중 하나는 경쟁업체의 다수와 이웃배달에 대한 참여의 불확실성입니다. 시장에는 이미 다양한 경쟁업체들이 존재하고 있어, 서비스 홍보와 고객 유치에 어려움을 겪을 수 있습니다. 또한, 이웃들의 참여가 불확실하다면 지역사회와의 유대감을 구축하는 데 어려움이 있을 것으로 예상됩니다. 이러한 상황에서 경쟁 우위를 확보하고, 지속적인 이웃참여를 유도하는 방안을 고민하고 대응해야 합니다."
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