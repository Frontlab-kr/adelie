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
              <div class="text-center my-4 mb-8">
                <BaseHeading as="h4" size="lg" weight="semibold" class="text-muted-800 dark:text-white">
                  백오십님 <strong>이웃간 음식 배달 대행 앱서비스</strong> 서비스를 만드시는군요!
                </BaseHeading>
              </div>
              <div class="overflow-auto" style="height:400px">
                <BaseList ordered class="p-4 px-8">
                  <li>
                    [이웃간 음식 배달 대행 앱] 의 아이디어 시작은 어떤 계기로 시작되었나요?
                    <p class="font-bold">
                      음식배달 플랫폼의 전문화에 따른 배달료 인상 및 가격 인상
                    </p>
                  </li>
                  <li>
                    [이웃간 음식 배달 대행 앱] 의 아아이디어를 간결하게 문장으로 작성해보세요?
                    <p class="font-bold">
                      음식 주문시 이웃의 음식도 같이 배달하고 배달 수수료 분담
                    </p>
                  </li>
                  <li>
                    이 [이웃간 음식 배달 대행 앱] 의 아이디어는 누가 이용하나요?
                    <p class="font-bold">
                      동네 주부 등 한가한 사람들과 노약자, 청년등 지원이 필요한 사람들
                    </p>
                  </li>
                  <li>
                    경쟁서비스와 비교하여  [이웃간 음식 배달 대행 앱] 의  아이디어 차별화된 특징을 설명해보세요
                    <p class="font-bold">
                      이웃간 협력을 통한 서비스
                    </p>
                  </li>
                  <li>
                    [이웃간 음식 배달 대행 앱] 의 서비스가 왜 필요하고 중요한지 작성해보세요
                    <p class="font-bold">
                      사회적 네트워킹 강화, 배달 수수료 저렴화
                    </p>
                  </li>
                  <li>
                    [이웃간 음식 배달 대행 앱] 서비스의 목적을 작성해보세요.
                    <p class="font-bold">
                      이웃에게 음식 같이 배달, 심부름 대행
                    </p>
                  </li>
                  <li>
                    [이웃간 음식 배달 대행 앱] 서비스의 수익 창출 계획은 어떻게 되나요?
                    <p class="font-bold">
                      배달 중개 수수료, 광고
                    </p>
                  </li>
                  <li>
                    [이웃간 음식 배달 대행 앱] 서비스에 포함된 기능은 어떻게 되나요?
                    <p class="font-bold">
                      음식점 검색, 메뉴 검색, 음식 주문 등
                    </p>
                  </li>
                  <li>
                    사용자가 이 서비스를 이용함으로써 얻는 이점은 무엇인가요?
                    <p class="font-bold">
                      저렴한 배달료, 추가 수입 확보, 동네친구사귀기
                    </p>
                  </li>
                  <li>
                    [이웃간 음식 배달 대행 앱] 서비스 명과 의미를 작성해보세요
                    <p class="font-bold">
                      펭귄처럼 도우면서 사는 아델리넷
                    </p>
                  </li>
                </BaseList>
              </div>
              <div class="flex justify-center mt-auto">
                <BaseButton shape="curved" class="mx-1" to="step1-11">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="step1-13">
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
              <BaseMessage type="info" class="mb-4 break-keep">앞에서 작성한 내용을 요약해서 문장 정리를 했어요.<br />검토해서 고쳐주세요?</BaseMessage>
              <div class="flex justify-end mb-4">
                <BaseButton size="sm" class="mx-1">아니오</BaseButton>
                <BaseButton color="primary" size="sm" class="mx-1">예</BaseButton>
              </div>
            </div>
          </BaseCard>
        </div>        
      </pane>
    </splitpanes>
  </div>
</template>
