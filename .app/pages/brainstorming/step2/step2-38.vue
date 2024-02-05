<script setup lang="ts">
import { Splitpanes, Pane } from 'splitpanes';
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
});
const progress = ref(25);
const aiList = ref(false);
const value1 = ref('음식 주문 소비자\n배달음식 판매 식당');
const value2 = ref(
  '원하는 음식을 원하는 곳에서 편리하게 주문 결제할 수 있는 서비스\n많은 고객들에게 식당의 음식을 알리고 판매할 수 있는 플랫폼',
);
const value3 = ref('모바일 애플리케이션\n웹사이트\nSNS\nTV광고\n버스광고');
const value4 = ref('고객 리뷰\n포인트\n배민아카데미\n이벤트\n마케팅');
const value5 = ref(
  '광고 수익 (울트라콜이나 오픈리스트 등의 홍보)\n배달 수수료 (배민라이더스, 배민커넥트 등 배달 대행 서비스)\nPG사 수수료\n고객수수료\n식당수수료\n',
);
const value6 = ref('모바일 플랫폼 기술/ 자원\n배달대행자원\n배달라이더스\n배민커넥트\n브랜드 파워\n');
const value7 = ref(
  '식당 등록/관리\n식당 추천/광고 운영/관리\n모바일 플랫폼 운영/관리\n배민 사장님 사이트 운영\n배민 라이더스 운영/관리\n배민 커넥트 운영/관리',
);
const value8 = ref('음식점\n배달기사\n투자자\n배달 대행업체\n프랜차이즈브랜드\n교육업체');
const value9 = ref(
  '플랫폼 인프라 유지/고도화\n플랫폼 운영 인력\n고객센터 운영 인력/자원\n라이더 운영 인력/자원\n사무실/법무/세무 처리\n이벤트/마케팅 집행비\nPG사 수수료',
);

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
              <BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-white">
                <span>서비스 기획 노트</span>
              </BaseHeading>
              <p class="text-sm text-slate-500">Step2 (브레인 스토밍) - 비즈니스 모델 캔버스</p>
            </div>
            <div class="flex flex-col mx-auto" style="min-height: 580px">
              <div class="text-center my-4">비즈니스 모델 캔버스를 작성해봅니다.</div>

              <TairoTable class="mb-6">
                <TairoTableRow>
                  <TairoTableCell class="px-4 bg-gray-200" style="width: 100px"
                    >① 고객 세분화 (Customer Segments)</TairoTableCell
                  >
                  <TairoTableCell class="px-4">
                    <BaseTextarea
                      v-model="value1"
                      shape="rounded"
                      placeholder="내용을 입력해주세요."
                      color-focus
                      style="height: 70px"
                    />
                  </TairoTableCell>
                </TairoTableRow>
                <TairoTableRow>
                  <TairoTableCell class="px-4 bg-gray-200" style="width: 100px"
                    >② 가치 제안 (Value Proposition)</TairoTableCell
                  >
                  <TairoTableCell class="px-4">
                    <BaseTextarea
                      v-model="value2"
                      shape="rounded"
                      placeholder="내용을 입력해주세요."
                      color-focus
                      style="height: 70px"
                    />
                  </TairoTableCell>
                </TairoTableRow>
                <TairoTableRow>
                  <TairoTableCell class="px-4 bg-gray-200" style="width: 100px">③ 채널 (Channels)</TairoTableCell>
                  <TairoTableCell class="px-4">
                    <BaseTextarea
                      v-model="value3"
                      shape="rounded"
                      placeholder="내용을 입력해주세요."
                      color-focus
                      style="height: 70px"
                    />
                  </TairoTableCell>
                </TairoTableRow>
                <TairoTableRow>
                  <TairoTableCell class="px-4 bg-gray-200" style="width: 100px"
                    >④ 고객 관계 (Customer Relationships)
                  </TairoTableCell>
                  <TairoTableCell class="px-4">
                    <BaseTextarea
                      v-model="value4"
                      shape="rounded"
                      placeholder="내용을 입력해주세요."
                      color-focus
                      style="height: 70px"
                    />
                  </TairoTableCell>
                </TairoTableRow>
                <TairoTableRow>
                  <TairoTableCell class="px-4 bg-gray-200" style="width: 100px"
                    >⑤ 수익 구조 (Revenue Streams)</TairoTableCell
                  >
                  <TairoTableCell class="px-4">
                    <BaseTextarea
                      v-model="value5"
                      shape="rounded"
                      placeholder="내용을 입력해주세요."
                      color-focus
                      style="height: 70px"
                    />
                  </TairoTableCell>
                </TairoTableRow>
                <TairoTableRow>
                  <TairoTableCell class="px-4 bg-gray-200" style="width: 100px"
                    >⑥ 핵심 자원 (Key Resources)</TairoTableCell
                  >
                  <TairoTableCell class="px-4">
                    <BaseTextarea
                      v-model="value6"
                      shape="rounded"
                      placeholder="내용을 입력해주세요."
                      color-focus
                      style="height: 70px"
                    />
                  </TairoTableCell>
                </TairoTableRow>
                <TairoTableRow>
                  <TairoTableCell class="px-4 bg-gray-200" style="width: 100px"
                    >⑦ 핵심 활동 (Key Activities)</TairoTableCell
                  >
                  <TairoTableCell class="px-4">
                    <BaseTextarea
                      v-model="value7"
                      shape="rounded"
                      placeholder="내용을 입력해주세요."
                      color-focus
                      style="height: 70px"
                    />
                  </TairoTableCell>
                </TairoTableRow>
                <TairoTableRow>
                  <TairoTableCell class="px-4 bg-gray-200" style="width: 100px"
                    >⑧ 핵심 파트너 (Key Partner)</TairoTableCell
                  >
                  <TairoTableCell class="px-4">
                    <BaseTextarea
                      v-model="value8"
                      shape="rounded"
                      placeholder="내용을 입력해주세요."
                      color-focus
                      style="height: 70px"
                    />
                  </TairoTableCell>
                </TairoTableRow>
                <TairoTableRow>
                  <TairoTableCell class="px-4 bg-gray-200" style="width: 100px"
                    >⑨ 비용 구조 (Cost Structure)</TairoTableCell
                  >
                  <TairoTableCell class="px-4">
                    <BaseTextarea
                      v-model="value9"
                      shape="rounded"
                      placeholder="내용을 입력해주세요."
                      color-focus
                      style="height: 70px"
                    />
                  </TairoTableCell>
                </TairoTableRow>
              </TairoTable>
              <div class="flex justify-center mt-auto">
                <BaseButton shape="curved" class="mx-1" to="/brainstorming/step2/step2-37"> 이전 </BaseButton>
                <BaseButton shape="curved" class="mx-1"> 내용수정 </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="/brainstorming/step2/step2-39">
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
              <BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-white">
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
              <div class="relative ailist" :class="aiList ? 'active' : ''" style="height: 534px">
                <div class="blur-sm ailist__list">
                  <BaseList ordered class="mx-6 text-sm break-keep">
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('')">Case 1</p>
                      음식배달서비스의 비즈니스 모델 캔버스 예시는 다양한 측면을 고려하여 구성될 수 있습니다. 여기에는
                      주요 구성 요소 몇 가지를 나열해보겠습니다.<br />
                      <br />
                      고객 세그먼트 (Customer Segments):<br />
                      <br />
                      일반 소비자<br />
                      회사 직원<br />
                      여가 시간에 편의를 찾는 사람들<br />
                      고급 레스토랑에서의 배달을 원하는 고객<br />
                      가치 제안 (Value Propositions):<br />
                      <br />
                      편리한 음식배달 서비스<br />
                      다양한 음식 선택<br />
                      신속하고 정확한 배송<br />
                      할인 및 프로모션 제공<br />
                      채널 (Channels):<br />
                      <br />
                      모바일 응용 프로그램<br />
                      웹 사이트<br />
                      전화 주문<br />
                      협력사와의 파트너십 (레스토랑, 음식점 등)<br />
                      고객 관계 (Customer Relationships):<br />
                      <br />
                      온라인 및 오프라인 고객 지원<br />
                      피드백 수집 및 개선<br />
                      멤버십 프로그램 및 할인을 통한 충성 고객 유치<br />
                      수익 모델 (Revenue Streams):<br />
                      <br />
                      음식 가격에 대한 수수료<br />
                      배송 수수료<br />
                      프리미엄 멤버십 수입<br />
                      핵심 활동 (Key Activities):<br />
                      <br />
                      주문 및 배송 관리<br />
                      레스토랑 및 파트너와의 협력 관리<br />
                      기술 개발 및 유지보수<br />
                      핵심 자원 (Key Resources):<br />
                      <br />
                      배송 인프라 (배송원, 차량 등)<br />
                      기술 인프라 (앱, 웹 사이트 등)<br />
                      파트너 및 협력사<br />
                      파트너 (Key Partnerships):<br />
                      <br />
                      음식점 및 레스토랑<br />
                      신선한 식품 공급업체<br />
                      결제 및 로깅 서비스 제공업체<br />
                      비용 구조 (Cost Structure):<br />
                      <br />
                      기술 개발 및 유지보수<br />
                      광고 및 마케팅<br />
                      운송 및 배송 비용<br />
                      고객 서비스 및 지원<br />
                      이러한 구성 요소들은 음식배달 비즈니스 모델의 핵심 부분을 형성합니다. 각 구성 요소는 특정
                      비즈니스의 목표와 조건에 따라 조절될 수 있으며, 실제 적용 시에는 세부 사항을 더욱 구체화하고
                      개선해 나가야 합니다.
                    </li>
                  </BaseList>
                </div>
                <BaseButtonIcon
                  @click="aiList = true"
                  shape="curved"
                  class="absolute ailist__button"
                  style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
                  data-nui-tooltip="AI 문장 정리를 확인해보세요!"
                >
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
