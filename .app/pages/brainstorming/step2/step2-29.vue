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
const value1 = ref('[기업의 강점을 최대한 활용하여 다양한 기회 작성]\n젊은 구성원들이 직접 지역활동을 하면서 선도')
const value2 = ref('[기업의 강점을 활용하여 위협 요소를 피하고 대응 전략 작성]\n젊은 구성원들이 경쟁업체의 배달원들과 협력하여 대응')
const value3 = ref('[약점을 극복하고 기회를 활용할 수 있도록 보완 전략 작성]\n경쟁업체에 가서 경험을 쌓고 돌아와서 내부 약점 보완')
const value4 = ref('[약점을 보완하여 위협 요소를 최소화하고 회피 방안 작성]\n경험이 없으니 실제 주부나 학생들 설득하기에 유리')

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
                  [SWOT 서비스 전략 작성하기]
                </p>
              </div>

              <TairoTable class="text-center">
                <TairoTableRow>
                  <TairoTableCell class="bg-blue-50" style="width:100px" >SO전략</TairoTableCell>
                  <TairoTableCell class="bg-amber-50" style="width:100px" >강점-기회</TairoTableCell>
                  <TairoTableCell class="px-4">
                    <BaseTextarea
                      v-model="value1"
                      shape="rounded"
                      placeholder="내용을 입력해주세요."
                      color-focus
                      style="height: 70px;"
                    />
                  </TairoTableCell>
                </TairoTableRow>
                <TairoTableRow>
                  <TairoTableCell class="bg-blue-50" style="width:100px" >ST전략</TairoTableCell>
                  <TairoTableCell class="bg-amber-50" style="width:100px" >강점-위협</TairoTableCell>
                  <TairoTableCell class="px-4">
                    <BaseTextarea
                      v-model="value2"
                      shape="rounded"
                      placeholder="내용을 입력해주세요."
                      color-focus
                      style="height: 70px;"
                    />
                  </TairoTableCell>
                </TairoTableRow>
                <TairoTableRow>
                  <TairoTableCell class="bg-blue-50" style="width:100px" >WO전략</TairoTableCell>
                  <TairoTableCell class="bg-amber-50" style="width:100px" >약점-기회</TairoTableCell>
                  <TairoTableCell class="px-4">
                    <BaseTextarea
                      v-model="value3"
                      shape="rounded"
                      placeholder="내용을 입력해주세요."
                      color-focus
                      style="height: 70px;"
                    />
                  </TairoTableCell>
                </TairoTableRow>
                <TairoTableRow>
                  <TairoTableCell class="bg-blue-50" style="width:100px" >WT전략</TairoTableCell>
                  <TairoTableCell class="bg-amber-50" style="width:100px" >약점-위협</TairoTableCell>
                  <TairoTableCell class="px-4">
                    <BaseTextarea
                      v-model="value4"
                      shape="rounded"
                      placeholder="내용을 입력해주세요."
                      color-focus
                      style="height: 70px;"
                    />
                  </TairoTableCell>
                </TairoTableRow>
              </TairoTable>
              <div class="flex justify-center mt-auto">
                <BaseButton shape="curved" class="mx-1" to="/brainstorming/step2/step2-28">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" >
                  내용수정
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="/brainstorming/step2/step2-30">
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
                문장 정리<br />
                해보실래요?
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
                      "우리 기업의 강점은 젊은 구성원들이 직접 지역활동을 하면서 지역사회에 깊은 이해와 관계를 가지고 있다는 점입니다. 이러한 강점을 최대한 활용하여 다양한 기회를 창출할 수 있습니다. 젊은 팀원들은 지역사회의 동향을 신속하게 파악하고, 지역 주민들과의 소통을 통해 서비스를 지속적으로 최적화할 수 있습니다. 또한, 이러한 지역활동은 브랜드 인식을 높이고 이웃들과의 유대감을 강화하는데 도움이 될 것입니다. 이를 통해 우리는 경쟁업체보다 우수한 지역 서비스를 제공하고 지속적인 성장의 기회를 확보할 수 있을 것입니다."
                    </li>
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('')">Case 2</p>                      
                      "우리 기업은 젊은 구성원들이 경쟁업체의 배달원들과 협력하여 대응하는 전략을 활용하고 있습니다. 이를 통해 경쟁업체와의 긍정적인 협력 관계를 구축하고 서비스 품질을 향상시키는 방안을 모색하고 있습니다. 젊은 팀원들은 열린 의사소통과 협력을 통해 지역사회의 이해도를 높이고, 경쟁업체와의 협업을 통해 배달원 간의 경쟁이 아닌 상호 협력이 이루어질 수 있도록 노력하고 있습니다. 이를 통해 지역사회와의 유대감을 강화하고, 경쟁업체와의 긍정적인 관계를 통해 서비스의 안정성과 효율성을 높이는 방향으로 대응하고 있습니다."
                    </li>
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('')">Case 3</p>                      
                      "우리는 현재 기업 내부의 경험 부족이라는 약점을 극복하기 위해 다양한 전략을 시행하고 있습니다. 그 중 하나는 우리 팀 구성원들이 경쟁업체에서 직접 경험을 쌓고 내부로 돌아오는 방식입니다. 이를 위해 일정 기간 동안 경쟁업체에 파견되어 다른 배달 플랫폼에서의 운영 및 서비스 경험을 쌓을 계획입니다. 이를 통해 우리 팀은 업계의 동향을 파악하고, 경쟁업체의 우수한 경영 방식과 서비스 모델을 학습하여 기업 내 경험 부족을 보완하고자 합니다. 이전에 쌓은 경험을 토대로 우리의 서비스를 향상시키며, 경쟁 업체의 강점을 효과적으로 활용하여 기회를 창출하는데 기여할 것으로 기대합니다."
                    </li>
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('')">Case 4</p>                                            
                      "경험이 부족한 점을 보완하여 위협 요소를 최소화하고 회피하기 위해, 우리는 실제 주부나 학생들을 대상으로 서비스를 제공하는 데에 주안점을 두고 있습니다. 경험 부족을 역으로 활용하여 실제 사용자들과 더 가까운 관계를 형성하고, 이들의 니즈와 우려를 더 깊이 이해하는 것이 중요합니다.<br />
                      타깃 마켓의 특정화: 경험이 부족한 대신, 실제 주부나 학생들과 같은 일상 속 소비자들에게 더 집중하여 서비스를 개발합니다. 이를 통해 더 유용하고 필요한 기능을 제공할 수 있습니다.<br />
                      사용자 중심의 서비스 개발: 경험이 부족한 만큼 사용자들의 피드백을 중요하게 여기며, 지속적인 설문조사, 리뷰 분석 등을 통해 사용자 중심의 서비스를 구축하고 개선합니다.<br />
                      마케팅 전략 강화: 경쟁업체가 경험이 풍부한 것에 비해, 우리는 사용자와의 근접성을 강조하는 마케팅 전략을 채택합니다. 소비자들에게 친근하고 이해하기 쉬운 메시지를 통해 경험이 부족한 점을 보완하고 긍정적인 이미지를 형성하는 데 주력합니다."
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