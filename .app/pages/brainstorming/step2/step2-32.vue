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
const value = ref(
  '연령별대별 남녀를 대상으로 메뉴 선호도, 음식 구매 행태, 자유시간유무여부 등을 통해 음식주문 및 배달의 행태를 분석 할 수 있다.\n\n10대 20대 30대 40대 50대 60대별\n메뉴 선호도, 음식 주문행태\n음식 배달 참여 형태등\n',
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
              <p class="text-sm text-slate-500">Step2 (브레인 스토밍) - STP 분석</p>
            </div>
            <div class="flex flex-col mx-auto" style="min-height: 580px">
              <div class="text-center my-4">
                서비스 시장을 더 작고 세부적으로 나누고<br />
                세분화 한 그룹들의 특장점을 작성한다.
                <BaseTextarea
                  v-model="value"
                  shape="rounded"
                  placeholder="내용을 입력해주세요."
                  color-focus
                  class="mt-10"
                  style="height: 300px"
                />
              </div>
              <div class="flex justify-center mt-auto">
                <BaseButton shape="curved" class="mx-1" to="/brainstorming/step2/step2-31"> 이전 </BaseButton>
                <BaseButton shape="curved" class="mx-1"> 내용수정 </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="/brainstorming/step2/step2-33">
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
                나이별 그룹핑을 세부적으로 해봤어요.<br />다른 변수도 필요하세요?
              </BaseMessage>
              <div class="flex justify-end mb-4">
                <BaseButton size="sm" class="mx-1">아니오</BaseButton>
                <BaseButton color="primary" size="sm" class="mx-1">예</BaseButton>
              </div>
              <div class="relative ailist" :class="aiList ? 'active' : ''" style="height: 534px">
                <div class="blur-sm ailist__list">
                  <BaseList class="mx-6 text-sm break-keep">
                    <li>
                      <strong>10대:</strong><br />
                      메뉴 선호도: 패스트 푸드, 햄버거, 피자, 간편한 음식<br />
                      음식 주문행태: 온라인 플랫폼을 활용하여 자주 음식 주문, 소규모 그룹 주문이 많음<br />
                      음식 배달 참여 형태: 배달 앱을 통한 주문이 일반적이며, 특히 모임이나 소규모 모임에 적합한 배달
                      주문을 선호
                    </li>
                    <li>
                      <strong>20대:</strong><br />
                      메뉴 선호도: 다양한 요리의 음식, 건강식 및 다이어트 음식에 관심<br />
                      음식 주문행태: 온라인 플랫폼을 통한 음식 주문이 일반적이며, 소셜 미디어를 통한 음식 리뷰와 공유에
                      관심<br />
                      음식 배달 참여 형태: 주로 혼자 또는 소규모 주문이 많으며, 신선하고 특별한 음식 경험에 중점을 둠
                    </li>
                    <li>
                      <strong>30대:</strong><br />
                      메뉴 선호도: 다양한 메뉴에 관심이 있으며, 건강과 맛을 동시에 고려하는 경향<br />
                      음식 주문행태: 가족이나 친구들과 함께 주문하는 경우가 많고, 오피스에서의 소규모 모임에 적합한
                      음식을 선호<br />
                      음식 배달 참여 형태: 가정적인 분위기에서의 음식 배달이 많으며, 가족과 함께 먹을 수 있는 메뉴가
                      인기
                    </li>
                    <li>
                      <strong>40대:</strong><br />
                      메뉴 선호도: 건강식과 가정적인 메뉴에 관심, 주말에는 다양한 가족 모임을 위한 음식 주문이 증가<br />
                      음식 주문행태: 가족과의 대규모 주문이 많으며, 온라인 할인 및 쿠폰을 활용하는 경향<br />
                      음식 배달 참여 형태: 특별한 날이나 주말에는 가족과의 대규모 배달 주문이 많아짐
                    </li>
                    <li>
                      <strong>50대:</strong><br />
                      메뉴 선호도: 가정적이고 손쉬운 요리, 전통적인 음식에 관심<br />
                      음식 주문행태: 주로 가정에서 즐길 수 있는 음식을 선호하며, 특별한 날에 주문이 증가<br />
                      음식 배달 참여 형태: 편리하게 가정에서 먹을 수 있는 메뉴를 중시하며, 가족과의 소규모 주문이 많음
                    </li>
                    <li>
                      <strong>60대 이상:</strong><br />
                      메뉴 선호도: 전통적이고 가벼운 음식에 관심, 건강을 고려한 요리가 중요<br />
                      음식 주문행태: 주로 혼자 먹을 수 있는 메뉴를 주문하며, 특별한 날에 가족과 함께 주문하기도 함<br />
                      음식 배달 참여 형태: 간편하게 먹을 수 있는 음식을 중시하며, 주로 혼자 또는 소규모 주문이 많음
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
