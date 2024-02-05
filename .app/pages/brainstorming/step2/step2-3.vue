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
const value = ref('주민, 커뮤니티, 참여, 활성화, 같이 놀기, 밥 같이 먹기, 같이 산책하기, 화투치기, 윳놀이하기')
const isModalLgOpen = ref(false)
const isModalLgOpen2 = ref(false)

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
                Step2 (브레인 스토밍) - 브레인 스토밍
              </p>
            </div>
            <div class="flex flex-col mx-auto" style="min-height:580px">
              <div class="text-center my-4">
                <div class="text-center my-4">
                  핵심 문제에 대한 연상되는 키워드를<br />
                  될 수 있으면 많이 나열해본다.
                </div>
                <BaseTextarea
                  v-model="value"
                  shape="rounded"
                  placeholder="내용을 입력해주세요."
                  color-focus
                  class="mt-6"
                  style="height: 200px;"
                  value=""
                />
                <div class="flex justify-center mt-10">
                  <BaseButton shadow="hover" color="muted" class="mx-2 py-4" shape="full" @click="isModalLgOpen = true" style="height: auto !important;">635<br />브레인라이팅</BaseButton>
                  <BaseButton shadow="hover" color="muted" class="mx-2 py-4" shape="full" @click="isModalLgOpen2 = true" style="height: auto !important;">SCAMPER<br />방법</BaseButton>
                </div>
              </div>
              <div class="flex justify-center mt-auto">
                <BaseButton shape="curved" class="mx-1" to="step2-2">
                  이전
                </BaseButton>
                <BaseButton shape="curved" class="mx-1">
                  수정
                </BaseButton>
                <BaseButton shape="curved" class="mx-1" color="primary" to="step2-4">
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
                제가 추천하는 키워드는 아래와 같으니 선택 수정하세요
              </BaseMessage>
              <div class="flex justify-end mb-4" >
                <BaseButton size="sm" class="mx-1">아니오</BaseButton>
                <BaseButton color="primary" size="sm" class="mx-1">예</BaseButton>
              </div>
              <div class="relative ailist" :class="aiList ? 'active' : ''" style="height: 534px;">
                <div class="blur-sm ailist__list">
                  <BaseList class="mx-6 text-sm break-keep">
                    <li>
                      <BaseTag shape="full" color="muted" class="mr-1 mb-1" @click="updateValue('커뮤니티 서비스')">커뮤니티 서비스</BaseTag>
                      <BaseTag shape="full" color="muted" class="mr-1 mb-1" @click="updateValue('김장 같이 담그기')">김장 같이 담그기</BaseTag>
                      <BaseTag shape="full" color="muted" class="mr-1 mb-1" @click="updateValue('사회봉사 이벤트')">사회봉사 이벤트</BaseTag>
                      <BaseTag shape="full" color="muted" class="mr-1 mb-1" @click="updateValue('사회복지사 센터')">사회복지사 센터</BaseTag>
                      <details class="group my-4">
                        <summary
                          class="nui-focus hover:bg-muted-100 dark:hover:bg-muted-700/70 text-muted-500 dark:text-muted-400 inline-flex cursor-pointer list-none items-center justify-center gap-2 rounded-lg px-2 py-1.5 font-sans text-[0.8rem] transition-all duration-100"
                        >
                          <span class="inline group-open:hidden">더 많은 사례 보기</span>
                          <span class="hidden group-open:inline">더 많은 사례 보기</span>
                          <Icon
                            name="lucide:chevron-down"
                            class="text-muted-400 h-4 w-4 transition-transform duration-200 group-open:rotate-180"
                          />
                        </summary>
                        <div class="mt-4">
                          <BaseList class="mx-6 text-sm break-keep">
                            <li>
                              문장 정리 케이스1 정리 해서 샘플로 제시한다
                            </li>
                            <li>
                              문장 정리 케이스1 정리 해서 샘플로 제시한다
                            </li>
                            <li>
                              문장 정리 케이스1 정리 해서 샘플로 제시한다
                            </li>
                          </BaseList>
                        </div>
                      </details>
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

  <!-- Modal component -->
  <TairoModal :open="isModalLgOpen" size="lg" @close="isModalLgOpen = false">
    <template #header>
      <!-- Header -->
      <div class="flex w-full items-center justify-between p-4 md:p-6">
        <h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white">
          635 브레인 라이팅 
        </h3>
        <BaseButtonClose @click="isModalLgOpen = false" />
      </div>
    </template>

    <!-- Body -->
    <div class="p-4 md:p-6">
      <div class="mx-auto w-full">
        <BaseList ordered class="mx-5">
          <li>조용히 말 없이 진행되는 조용한 아이디어 만들기</li>
          <li>
            아래 시트 양식을 돌려가며 아이디어를 기입함<br />
            초기에 이 기법은 635 기법이라 불렀는데 그 이유는 6명의   참석 인원이/ 각자 3개씩의 아이디어를 / 5분 안에 생각해 내는 것을 의미함 
          </li>
        </BaseList>
        <TairoTable shape="straight" class="mt-5 text-center">
          <template #header>
            <TairoTableHeading class="p-4 text-center">
              ROUND
            </TairoTableHeading>
            <TairoTableHeading class="text-center">아이디어 A</TairoTableHeading>
            <TairoTableHeading class="text-center">아이디어 B</TairoTableHeading>
            <TairoTableHeading class="text-center">아이디어 C</TairoTableHeading>
          </template>

          <TairoTableRow>
            <TairoTableCell class="text-center">1</TairoTableCell>
            <TairoTableCell>학생들만 배달</TairoTableCell>
            <TairoTableCell>주부들만 배달 </TairoTableCell>
            <TairoTableCell>노약자들만 배달 </TairoTableCell>
          </TairoTableRow>
          <TairoTableRow>
            <TairoTableCell class="text-center">2</TairoTableCell>
            <TairoTableCell>제한거리 3KM</TairoTableCell>
            <TairoTableCell>오토바이는 5KM</TairoTableCell>
            <TairoTableCell>자동차는 7KM</TairoTableCell>
          </TairoTableRow>
          <TairoTableRow>
            <TairoTableCell class="text-center">3</TairoTableCell>
            <TairoTableCell>자전거 빌려주기</TairoTableCell>
            <TairoTableCell>자전가 차입</TairoTableCell>
            <TairoTableCell>자전거 보험</TairoTableCell>
          </TairoTableRow>
          <TairoTableRow>
            <TairoTableCell class="text-center">4</TairoTableCell>
            <TairoTableCell>걸리는 시간별 차등</TairoTableCell>
            <TairoTableCell>시간대별 차등</TairoTableCell>
            <TairoTableCell>나이별 차등</TairoTableCell>
          </TairoTableRow>
          <TairoTableRow>
            <TairoTableCell class="text-center">5</TairoTableCell>
            <TairoTableCell>배달 쿠폰 발행</TairoTableCell>
            <TairoTableCell>음식점 쿠폰 발행</TairoTableCell>
            <TairoTableCell>기름값 보전</TairoTableCell>
          </TairoTableRow>
          <TairoTableRow>
            <TairoTableCell class="text-center">6</TairoTableCell>
            <TairoTableCell>스테이션 구성</TairoTableCell>
            <TairoTableCell>배달 매니저 필요</TairoTableCell>
            <TairoTableCell>배달 보조 필요</TairoTableCell>
          </TairoTableRow>
        </TairoTable>        
      </div>
    </div>

    <template #footer>
      <!-- Footer -->
      <div class="p-4 md:p-6">
        <div class="flex gap-x-2">
          <BaseButton color="default">
            <Icon name="lucide:download" class="-ms-1 h-4 w-4" />
            <span>양식 다운로드</span>
          </BaseButton>
          <BaseButton color="primary" flavor="solid" @click="isModalLgOpen = false">
            확인
          </BaseButton>
        </div>
      </div>
    </template>
  </TairoModal>

  <TairoModal :open="isModalLgOpen2" size="lg" @close="isModalLgOpen2 = false">
    <template #header>
      <!-- Header -->
      <div class="flex w-full items-center justify-between p-4 md:p-6">
        <h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white">
          SCAMPER 방법
        </h3>
        <BaseButtonClose @click="isModalLgOpen2 = false" />
      </div>
    </template>

    <!-- Body -->
    <div class="p-4 md:p-6">
      <div class="mx-auto w-full">
        <BaseList class="mx-6 text-sm break-keep">
          <li>
            <p class="font-bold">Substitute (대체)</p>
            무엇인가 대체할 것을 찾다 보면 새로운 아이디어를 얻을 수 있다. 기존의 것에서 일부나 전체를 다른 것으로 대체할 수 있는가?
          </li>
          <li>
            <p class="font-bold">Combine (결합)</p>
            짝 지을 수 있는 것을 찾아보면 시너지를 내거나 새로운 것을 만들어낼 수 있다..
          </li>
          <li>
            <p class="font-bold">Adapt (변경)</p>
            어떤 부분을 바꿔보면 문제를 해결하거나 제품, 서비스를 변화시킬 수 있다.. 원래 있는 것을 다른 아이디어나 사물에 적용하기
          </li>
          <li>
            <p class="font-bold">Modify (수정)</p>
            이리저리 꼬여 있는 현상을 변화시키면 대안을 찾을 수 있다. 이미 존재하는 것을 축소하거나 확대하여 변형해 보기
          </li>
          <li>
            <p class="font-bold">Put to other uses (다른 용도로 활용)</p>
            현재 해결책을 다르게 적용하거나 혁신적으로 사용하여 새로운 아이디어를 만들 수 있다. 원래의 목적이나 용도와 다르게 사용함
          </li>
          <li>
            <p class="font-bold">Eliminate (제거)</p>
            기존의 것에서 무엇인가를 제거하면 새로운 실마리를 찾을 수 있음. 기존에 있던 기능을 과감히 없애기
          </li>
          <li>
            <p class="font-bold">Reverse (순서 바꾸기)</p>
            순서를 바꿔 봄으로써 색다를 아이디어를 낼 수 있다. 기존의 순서나 모양을 거꾸로 하거나 다시 배열해보기
          </li>
        </BaseList>     
      </div>
    </div>

    <template #footer>
      <!-- Footer -->
      <div class="p-4 md:p-6">
        <div class="flex gap-x-2">
          <BaseButton color="default">
            <Icon name="lucide:download" class="-ms-1 h-4 w-4" />
            <span>양식 다운로드</span>
          </BaseButton>
          <BaseButton color="primary" flavor="solid" @click="isModalLgOpen2 = false">
            확인
          </BaseButton>
        </div>
      </div>
    </template>
  </TairoModal>
</template>