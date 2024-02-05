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
const value = ref('(수요측) 음식 배달이 필요한 사람들 (주부, 노약자, 환자, 대학생의 순서로 공략) (공급측) 음식 배달이 가능한 사람들 (일차적으로 시간이 자유롭고 음식 배달 받는 것이 필요한 주부)')

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
              <div class="text-center my-4">
                ② 이 [<strong>이웃간 음식 배달 대행 앱서비스 개발</strong>] 의 <span class="text-rose-60000">고객은 누구인가요?</span>
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
                <BaseButton shape="curved" class="mx-1" to="step1-3">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="step1-5">
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
              <BaseMessage type="info" class="mb-4 break-keep">서비스 이용대상은 어떻게 작성하나요</BaseMessage>
              <p class="mx-6 text-sm break-keep">
                아이디어는 여러 계기와 과정을 통해 발전할 수 있습니다. 일반적으로 아이디어의 시작은 다음과 같은 상황에서 나올 수 있습니다.
              </p>
              <hr class="my-6">
              <BaseMessage type="info" class="mb-4 break-keep">문장을 정리해보세요</BaseMessage>
              <div class="relative ailist" :class="aiList ? 'active' : ''">
                <div class="blur-sm ailist__list">
                  <BaseList class="mx-6 text-sm break-keep">
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('음식 배달이 필요한 수요측은 주부, 노약자, 환자, 대학생 순으로 나열됩니다. 공급측은 일차적으로 시간이 자유롭고 음식 배달이 필요한 주부 등이 해당됩니다.')">Case 1</p>
                      음식 배달이 필요한 수요측은 주부, 노약자, 환자, 대학생 순으로 나열됩니다. 공급측은 일차적으로 시간이 자유롭고 음식 배달이 필요한 주부 등이 해당됩니다.
                    </li>
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('초기 공략은 주문한 주부가 자기 음식과 함께 이웃도 배달하면서 수익 분배')">Case 2</p>
                      초기 공략은 주문한 주부가 자기 음식과 함께 이웃도 배달하면서 수익 분배
                    </li>
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('플랫폼의 양쪽에 두가지 형태의 고객이 서로 돕는 형태이다. 음식 배달이 필요한 수요측은 주부, 노약자, 환자, 대학생 순으로 공략되며, 음식 배달이 가능한 공급측은 주부 등으로, 일차적으로 시간이 자유롭고 배달이 필요한 고객을 대상으로 합니다.')">Case 3</p>
                      플랫폼의 양쪽에 두가지 형태의 고객이 서로 돕는 형태이다. 음식 배달이 필요한 수요측은 주부, 노약자, 환자, 대학생 순으로 공략되며, 음식 배달이 가능한 공급측은 주부 등으로, 일차적으로 시간이 자유롭고 배달이 필요한 고객을 대상으로 합니다.
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