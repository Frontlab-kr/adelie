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
              <div class="text-center my-4 mb-0">
                <BaseHeading as="h4" size="lg" weight="semibold" class="text-muted-800 dark:text-white">
                  백오십님 <strong>이웃간 음식 배달 대행 앱서비스</strong> 서비스를 만드시는군요!<br />
                </BaseHeading>
                <p class="mt-2 mx-10 text-sm text-muted-400 break-keep">
                  아이디어를 문장으로 정리해보세요
                </p>
              </div>

              <div style="height: 400px; font-size: 16px; line-height: 3;" class="my-6 p-6 bg-neutral-100 rounded-xl overflow-auto">
                <div class="flex whitespace-nowrap">
                  "일상에서 우리 서비스는 <span class="inline-block w-full mx-2"><BaseInput shape="rounded" placeholder="[아이디어 시작 계기]" /></span> 로 시작되었다.
                </div>
                <div class="flex whitespace-nowrap">
                  <span class="inline-block w-full me-2"><BaseInput shape="rounded" placeholder="[서비스 아이디어]" /></span>를 통해 <span class="inline-block w-full mx-2"><BaseInput shape="rounded" placeholder="[사용자에게 제공되는 혜택]" /></span>을 목표로 한다.
                </div>
                <div class="flex whitespace-nowrap">
                  이 서비스는 <span class="inline-block w-full mx-2"><BaseInput shape="rounded" placeholder="[서비스의 대상 고객층]" /></span>에게 특히 유용하며,
                </div>
                <div class="flex whitespace-nowrap">
                  <span class="inline-block w-full me-2"><BaseInput shape="rounded" placeholder="[경쟁 서비스와의 차별화된 특징]" /></span>을 가지고 있다.
                </div>
                <div class="flex whitespace-nowrap">
                  현재 시장에서 <span class="inline-block w-full mx-2"><BaseInput shape="rounded" placeholder="서비스 필요성과 중요성]" /></span>이 커져가는 상황에서,
                </div>
                <div class="flex whitespace-nowrap">
                  수익 창출을 위해 <span class="inline-block w-full mx-2"><BaseInput shape="rounded" placeholder="[수익 창출 전략]" /></span>을 사용할 것입니다.
                </div>
                <div class="flex whitespace-nowrap">
                  이 서비스에는 <span class="inline-block w-full mx-2"><BaseInput shape="rounded" placeholder="[서비스에 포함된 기능들]" /></span>이 포함되어 있어
                </div>
                <div class="flex whitespace-nowrap">
                  사용자에게 <span class="inline-block w-full mx-2"><BaseInput shape="rounded" placeholder="[사용자에게 제공되는 혜택]" /></span>을 최대화할 것입니다.
                </div>
                <div class="flex whitespace-nowrap">
                  이 프로젝트 명은 <span class="inline-block w-full mx-2"><BaseInput shape="rounded" placeholder="[프로젝트명]" /></span> 입니다"
                </div>
              </div>
              <div class="flex justify-center mt-auto">
                <BaseButton shape="curved" class="mx-1" to="step1-13">
                  수정
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="/brainstorming/step2/">
                  확인하기
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
              <BaseMessage type="info" class="mb-4 break-keep">다른 버전도 있어요.<br />선택하시고 수정하셔요</BaseMessage>
              <div class="relative ailist" :class="aiList ? 'active' : ''">
                <div class="blur-sm ailist__list">
                  <BaseList class="mx-6 text-sm break-keep">
                    <li>
                      <p class="cursor-pointer underline">Case 1</p>
                      "우리 서비스는 일상에서 시작되어 음식배달 플랫폼의 전문화에 따른 배달료와 가격을 인상하고, '음식 주문시 이웃의 음식도 같이'를 통해 배달 수수료를 분담하는 목표를 가지고 있습니다. 특히 동네 주부, 노약자, 청년 등 지원이 필요한 사람들에게 유용하며, 이웃 간 협력을 통한 서비스를 제공합니다. 현재 시장에서는 사회적 네트워킹 강화와 배달 수수료 저렴화가 중요시되고 있어, 수익 창출을 위해 배달 중개 수수료와 광고를 활용할 계획입니다. 음식점 검색, 메뉴 검색, 음식 주문 등이 포함된 이 서비스는 사용자에게 저렴한 배달료, 추가 수입 확보, 동네 친구 사귀기를 최대화하고자 합니다. 이 프로젝트의 명칭은 '펭귄처럼 도우면서 사는 아델리넷'입니다."<br />
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
