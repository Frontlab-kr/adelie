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
              <p class="text-sm text-slate-500">Step2 (브레인 스토밍) - 비즈니스 모델 캔버스</p>
            </div>
            <div class="flex flex-col mx-auto" style="min-height:580px">
              <div class="text-center my-4">
                비즈니스 모델 캔버스의 9가지 블록은 <br />
                아래와 같은 순서로 작성하면 좀더 체계적으로 <br />
                작성할 수 있습니다.
              </div>
              <div class="my-6 text-center">
                <img src="../../../assets/images/process.png" alt="" class="inline">
              </div>
              <div class="my-4 mb-6">
                <p class="mt-2 mx-10 text-sm text-muted-500 break-keep">
                  ① 고객 세분화 (Customer Segments) : 이 블록에는 서비스의 가치를 전달할 다양한 고객 그룹을 정의하고 작성하면 된다. 기업이 제공하는 서비스를 어떤 그룹에게 제공할 것인지 이해하고 있다면 빠르게 작성할 수 있을 것이다. STP 접근법을 활용하여 시장을 세분화한 다양한 그룹을 참고할 수 있을 것이다. 
                </p>
                <p class="mt-2 mx-10 text-sm text-muted-500 break-keep">
                  ② 가치 제안 (Value Proposition) :　비즈니스 모델 캔버스에서 핵심적인 부분 중의 하나이다. 이 블록은 기업이 사용자에게 어떤 가치를 제공할 것인지를 명시한다. 가치 제안에는 서비스의 고유성, 특징, 장점을 명확하게 정의하여 경쟁사와의 차별화뿐만 아니라, 사용자의 문제를 해결하거나 만족시켜서 니즈를 충족시킬 수 있는지 작성하는 것이 중요하다. 이를 통해 기업이 제공하는 서비스가 시장에서 차지하는 위치를 이해하여, 서비스 개발이나 마케팅 전략에 반영할 수 있다. 
                </p>
                <p class="mt-2 mx-10 text-sm text-muted-500 break-keep">
                  ③ 채널 (Channels) : 이 블록은 서비스를 어떻게 고객에게 전달할지에 대한 방법을 제시하는 부분이다. 다양한 경로와 방법을 통해 사용자에게 서비스를 어떻게 제공할 것인지 작성하면 된다. 예를 들어, 온라인과 오프라인 유통, 직접 판매, 중개인을 통한 유통 등 다양한 채널을 고려할 수 있으며, 이를 통해 서비스 전체의 유통전략을 명확히 정의할 수 있다. 다양한 채널을 통해 사용자에게 편리하게 음악을 제공하고 홍보하는 전략을 수립한다. 
                </p>
                <p class="mt-2 mx-10 text-sm text-muted-500 break-keep">
                  ④ 고객 관계 (Customer Relationships) :　이 블록은 기업이 사용자와의 관계를 어떤 방식으로 관리할지를 정의하는 부분이다. 이는 사용자의 충성도를 높이고 신규 사용자를 유치하는 전략을 수립할 수 있다. 사용자와의 관계를 유지하기 위한 활동으로는 자체 플랫폼 내에서 사용자와의 접점을 늘리기 위한 개인화 서비스, 원활한 서비스 이용을 지원하기 위한 고객 지원, 제공되는 서비스를 알리기 위한 알림 메시지 등 다양한 방법이 있을 수 있다. 이를 통해 사용자와의 지속적인 관계를 유도하고 긍정적인 경험을 제공하여 사용자의 만족도를 높이는 데 도움이 될 것이다. 
                </p>
                <p class="mt-2 mx-10 text-sm text-muted-500 break-keep">
                  ⑤ 수익 구조 (Revenue Streams) : 이 블록은 기업이 어떻게 수익을 창출할 것인지에 대한 방법을 기입하는 항목이다. 사용자 지불 방식, 가격 책정 전략, 수익 모델 방법 등을 세부적으로 작성하면 된다. 구독 모델, 광고 수익, 라이선싱 비용 등 다양한 수익 모델을 고려할 수 있으며, 이를 통해 기업의 수익을 극대화하는데 중요한 역할을 한다. 이러한 정보는 비즈니스의 수익 구조를 명시함으로써 기업이 어떻게 수익을 창출할 것인지를 정의하는 데 도움이 된다. 
                </p>
                <p class="mt-2 mx-10 text-sm text-muted-500 break-keep">
                  ⑥ 핵심 자원 (Key Resources) :　이 부분은 기업이 서비스를 원활하게 진행하기 위해 필요한 핵심 자원들을 기술하는 영역이다. 기업이 가지고 있는 물적, 인적, 지적, 재무적인 자원들을 모두 고려하여 어떤 자원이 필수적으로 확보되어야 하는지를 나열한다. 이를 통해 기업은 자체적으로 보유하거나 협력 파트너를 통해 필요한 자원을 확보하는 전략들을 세워볼 수 있다. 핵심 자원을 명확하게 이해함으로써 기업은 자체 역량을 파악하고 경쟁 우위를 확보할 수 있는데 도움이 된다. 
                </p>
                <p class="mt-2 mx-10 text-sm text-muted-500 break-keep">
                  ⑦ 핵심 활동 (Key Activities) :　기업이 보유하고 있는 핵심 자원을 활용하여 어떻게 활동을 할 것인지를 상세하게 기술하는 영역이다. 핵심 활동들이 수익으로 이어질 수 있도록 정의함으로써 기업은 자체 역량을 최적화하여 비즈니스를 효과적으로 실행할 수 있다. 기업이 제공하고 있는 서비스의 운영 관리에 대한 이해를 높이고 경쟁력을 강화하는데 도움이 된다.                   
                </p>
                <p class="mt-2 mx-10 text-sm text-muted-500 break-keep">
                  ⑧ 핵심 파트너 (Key Partner) :　이 부분은 기업이 외부 이해관계자들과의 협력 관계를 어떻게 관리하고 활용할 것인지를 정의하는 블록이다. 협력사, 공급사, 유통사 등과의 파트너십을 표기하며, 이들과의 협력이 비즈니스 모델에서 어떠한 가치를 제공하는지를 고려하는 것이 중요하다. 효과적인 협력을 통해 리스크를 감소하고 비용을 절감하며 경쟁력을 확보하는데 도움 된다. 
                </p>
                <p class="mt-2 mx-10 text-sm text-muted-500 break-keep">
                  ⑨ 비용 구조 (Cost Structure) : 기업이 서비스를 운영하는데 발생하는 모든 비용을 어떻게 구성하고 관리할 것인지 기술하는 항목이다. 기업에서 서비스 개발, 유지하는데 발생하는 주요한 비용 항목을 작성하면 된다. 비용 종류는 고정비, 가변비, 생산비, 마케팅비, 운영 유지비 등 다양한 항목을 포함할 수 있다. 비용 구조를 명확히 이해함으로써 기업은 효과적으로 비용을 최적화하여 수익성을 확보해야 한다. 
                </p>
              </div>
              <div class="flex justify-center mt-auto">
                <BaseButton shape="curved" class="mx-1" to="/brainstorming/step2/step2-36">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="/brainstorming/step2/step2-38">
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
          </BaseCard>
        </div>        
      </pane>
    </splitpanes>    
  </div>
</template>