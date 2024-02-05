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
const value = ref('고객: 음식점 검색, 메뉴 검색, 음식 주문, 과거 주문 목록, 음식요금 결제.\n배달원: 가능한 사람 식별, 컨택, 위치 통보, 배달 루트 제안,\n배달 시간 통지, 배달 결과 통지, 배달료 결제, 배달료 배분, 상호 연락 메신저, \n음식점주: 주문접수, 조리시간 지정, 배달원 콜, 배달완료확인, 배달원 도착 시간 통지, 매상 관리,')

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
                ⑦ [<strong>이웃간 음식 배달 대행 앱서비스 개발</strong>] 서비스에 포함된 기능은 어떻게 되나요?
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
                <BaseButton shape="curved" class="mx-1" to="step1-8">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="step1-10">
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
              <BaseMessage type="info" class="mb-4 break-keep">문장을 정리해보세요</BaseMessage>
              <div class="relative ailist" :class="aiList ? 'active' : ''">
                <div class="blur-sm ailist__list">
                  <BaseList class="mx-6 text-sm break-keep">
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('-고객: \n음식점 검색 및 메뉴 조회음식 주문 및 결제이전 주문 목록 확인\n-배달원:\n가능한 배달원 식별 및 연락위치 통보 및 배달 루트 제안배달 시간 예상 및 결과 통지배달료 결제 및 공정한 배분상호간 연락을 위한 메신저 기능\n-음식점주:\n주문 수락 및 조리시간 지정배달원 호출 및 도착 시간 통지주문 완료 확인 및 매상 관리')">Case 1</p>
                      -고객: <br />
                      음식점 검색 및 메뉴 조회
                      음식 주문 및 결제
                      이전 주문 목록 확인<br />
                      -배달원:<br />
                      가능한 배달원 식별 및 연락
                      위치 통보 및 배달 루트 제안
                      배달 시간 예상 및 결과 통지
                      배달료 결제 및 공정한 배분
                      상호간 연락을 위한 메신저 기능<br />
                      -음식점주:<br />
                      주문 수락 및 조리시간 지정
                      배달원 호출 및 도착 시간 통지
                      주문 완료 확인 및 매상 관리
                    </li>
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('고객은 음식점을 검색하고 메뉴를 확인한 뒤 음식을 주문하고 결제하며, 이전 주문 목록도 확인할 수 있습니다. 배달원은 가능한 배달원을 식별하고 컨택하며, 위치를 통보받고 배달 루트를 제안하며, 배달 시간과 결과를 통지하고, 배달료를 결제하고 공정하게 배분하며, 메신저를 통한 상호간 연락이 가능합니다. 음식점주는 주문을 수락하고 조리시간을 지정하며, 배달원을 호출하고 도착 시간을 알려주며, 주문 완료를 확인하고 매상을 관리합니다.')">Case 2</p>
                      고객은 음식점을 검색하고 메뉴를 확인한 뒤 음식을 주문하고 결제하며, 이전 주문 목록도 확인할 수 있습니다. 배달원은 가능한 배달원을 식별하고 컨택하며, 위치를 통보받고 배달 루트를 제안하며, 배달 시간과 결과를 통지하고, 배달료를 결제하고 공정하게 배분하며, 메신저를 통한 상호간 연락이 가능합니다. 음식점주는 주문을 수락하고 조리시간을 지정하며, 배달원을 호출하고 도착 시간을 알려주며, 주문 완료를 확인하고 매상을 관리합니다.
                    </li>
                    <li>
                      <p class="cursor-pointer underline" @click="updateValue('고객은 음식 주문 및 결제와 함께 음식점 검색과 이전 주문 목록 확인이 가능하며, 배달원은 식별과 컨택, 위치 통보, 배달 루트 제안, 시간 및 결과 통지, 배달료 결제 및 배분이 가능합니다. 음식점주는 주문 수락, 조리시간 지정, 배달원 호출, 도착 시간 통지, 주문 완료 확인 및 매상 관리가 가능합니다.')">Case 3</p>
                      고객은 음식 주문 및 결제와 함께 음식점 검색과 이전 주문 목록 확인이 가능하며, 배달원은 식별과 컨택, 위치 통보, 배달 루트 제안, 시간 및 결과 통지, 배달료 결제 및 배분이 가능합니다. 음식점주는 주문 수락, 조리시간 지정, 배달원 호출, 도착 시간 통지, 주문 완료 확인 및 매상 관리가 가능합니다.
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