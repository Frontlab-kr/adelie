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
  '배달하기에 적합한 그룹은 시간이 많은 대학생들군으로 예상하지만 실제로 아르바이트 수입에 비해서 높은 수익이 예상되어야 한다.\n배달하기에 적합한 그룹은 시간 여유가 있는 주부들로 예상\n이웃을 도움을 받아 음식 주문을 하고자 하는 고객층은 일차적으로 노약자 계층으로 예상',
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
                고객 세그먼트 그룹군 중에서 서비스에 부합하는 최적의 타겟 그룹을 선정합니다.<br />
                선정된 서비스 그룹을 선정한 이유도 같이 기입해주세요.
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
                <BaseButton shape="curved" class="mx-1" to="/brainstorming/step2/step2-32"> 이전 </BaseButton>
                <BaseButton shape="curved" class="mx-1"> 내용수정 </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="/brainstorming/step2/step2-34">
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
                정리해봤어요. 다시 하시려면 버튼을 누르세요
              </BaseMessage>
              <div class="flex justify-end mb-4">
                <BaseButton size="sm" class="mx-1">아니오</BaseButton>
                <BaseButton color="primary" size="sm" class="mx-1">예</BaseButton>
              </div>
              <div class="relative ailist" :class="aiList ? 'active' : ''" style="height: 534px">
                <div class="blur-sm ailist__list">
                  <BaseList ordered class="mx-6 text-sm break-keep">
                    <li>
                      최적의 타겟 그룹: 대학생들<br />
                      선정 이유:<br />
                      배달하기에 적합: 대학생들은 학업에 바쁘고, 시간이 제한적인 경우가 많기 때문에 배달 서비스의 수요가
                      높습니다.<br />
                      수익 가능성: 대학생들은 일반적으로 아르바이트 등으로 소득을 얻고 있으며, 높은 주문 빈도와 고객
                      유지율이 기대됩니다. 특히, 학기 중과 기간 중에도 주문이 나올 수 있는 유동적인 고객층입니다.<br />
                      디지털 네이티브: 대학생들은 디지털 플랫폼에 익숙하며, 온라인 주문과 배달 앱을 적극적으로 활용할
                      가능성이 높습니다.
                    </li>
                    <li>
                      최적의 타겟 그룹: 주부들<br />
                      선정 이유:<br />
                      배달하기에 적합: 주부들은 가사와 양육 업무 등으로 바쁘기 때문에 편리한 배달 서비스의 수요가
                      큽니다. 특히, 주부들 중에서는 다양한 선호도와 Bed & Breakfast(B&B) 서비스에 대한 관심이 있을 수
                      있습니다.<br />
                      가족을 위한 주문이 많음: 주부들은 가족 구성원들을 위해 음식을 주문하는 경우가 많아 대규모 주문이
                      가능하며, 주문 금액이 높을 것으로 예상됩니다.<br />
                      지역사회에 노출: 주부들은 지역사회와 깊은 연관이 있어, 이웃 간에 서비스를 홍보하고 공유하는 데에도
                      기여할 수 있습니다.
                    </li>
                    <li>
                      최적의 타겟 그룹: 노약자 계층<br />
                      선정 이유:<br />
                      이웃간 협력을 통한 주문: 노약자 계층은 자유시간이 부족하거나, 이동이 어려운 경우가 많아 이웃과의
                      협력을 통한 배달 서비스 수요가 높을 것으로 예상됩니다.<br />
                      사회적 연결성 강화: 이 그룹을 대상으로 한 서비스는 지역사회의 사회적 네트워킹을 강화하고 동네
                      이웃들 간의 협력을 유도할 수 있습니다.<br />
                      수익 창출 가능: 노약자 계층은 편리한 서비스에 대한 수요가 높고, 이웃들과의 협력을 통해 더 많은
                      주문이 가능할 것으로 기대됩니다.
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
