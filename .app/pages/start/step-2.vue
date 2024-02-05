<script setup lang="ts">
import type { Project, ProjectStepData } from '../../types'

definePageMeta({
  title: 'Wizard — Step 2',
  preview: {
    title: 'Wizard — Step 2',
    description: 'For onboarding and step forms',
    categories: ['dashboards', 'wizard', 'forms'],
    src: '/img/screens/wizard-2.png',
    srcDark: '/img/screens/wizard-2-dark.png',
    order: 31,
  },
})

const { data: project } = useMultiStepForm<Project, ProjectStepData>()

useHead({
  title: 'Project info',
})

const avatarPreview = useNinjaFilePreview(() => project.value.avatar)

// BaseInputFileHeadless gives us a listfile input, but we need to
// extract the file from the list and set it to the form
const inputFile = ref<FileList | null>(null)
watch(inputFile, (value) => {
  const file = value?.item(0) || null
  project.value.avatar = file
})
</script>

<template>
  <div>
    <DemoWizardStepTitle />

    <div class="w-full break-keep">
      <div class="mx-auto w-full">
        <div class="w-full">
          <div class="flex items-center">
            <div class="me-8 mb-8">
              <BaseRadio v-model="value" name="checkbox_base" value="default1" color="primary" />
            </div>
            <div class="mx-auto mb-8 grid max-w-8xl gap-6 sm:grid-cols-4 w-full">
              <BaseCheckboxHeadless
                v-model="twoFaMode"
                name="radio_custom"
                value="email_address"
              >
                <BaseCard
                  shape="curved"
                  class="peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"
                >
                  <div class="flex flex-col text-center">
                    <p class="text-2xl mb-2"><strong>UNIT 1</strong></p>
                    <BaseHeading size="md" weight="medium"
                      >기획 노트</BaseHeading
                    >
                    <BaseParagraph
                      size="xs"
                      lead="snug"
                      class="mt-2 text-muted-500 dark:text-muted-400"
                    >
                    서비스 순서별로 노트 형태로 정리해볼 수 있습니다. (컨셉부터 와이어프레임까지)
                    </BaseParagraph>
                  </div>
                  <div class="child absolute end-2 top-3 opacity-0">
                    <Icon
                      name="ph:check-circle-duotone"
                      class="text-primary-500 h-7 w-7"
                    />
                  </div>
                </BaseCard>
              </BaseCheckboxHeadless>
              <BaseCheckboxHeadless
                v-model="twoFaMode"
                name="radio_custom"
                value="phone_number"
              >
                <BaseCard
                  shape="curved"
                  class="peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"
                >
                  <div class="flex flex-col text-center">
                    <p class="text-2xl mb-2"><strong>UNIT 2</strong></p>
                    <BaseHeading size="md" weight="medium"
                      >보고서</BaseHeading
                    >
                    <BaseParagraph
                      size="xs"
                      lead="snug"
                      class="mt-2 text-muted-500 dark:text-muted-400"
                    >
                      기획 노트에서 정리된 내용을 보고서 형태로 작성합니다.
                    </BaseParagraph>
                  </div>
                  <div class="child absolute end-2 top-3 opacity-0">
                    <Icon
                      name="ph:check-circle-duotone"
                      class="text-primary-500 h-7 w-7"
                    />
                  </div>
                </BaseCard>
              </BaseCheckboxHeadless>
              <BaseCheckboxHeadless
                v-model="twoFaMode"
                name="radio_custom"
                value="app_id"
              >
                <BaseCard
                  shape="curved"
                  class="peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"
                >
                  <div class="flex flex-col text-center">
                    <p class="text-2xl mb-2"><strong>UNIT 3</strong></p>
                    <BaseHeading size="md" weight="medium"
                      >사업계획서</BaseHeading
                    >
                    <BaseParagraph
                      size="xs"
                      lead="snug"
                      class="mt-2 text-muted-500 dark:text-muted-400"
                    >
                      보고서 작성 기준으로 제출처에 따른 사업계획서 작성합니다.
                    </BaseParagraph>
                  </div>
                  <div class="child absolute end-2 top-3 opacity-0">
                    <Icon
                      name="ph:check-circle-duotone"
                      class="text-primary-500 h-7 w-7"
                    />
                  </div>
                </BaseCard>
              </BaseCheckboxHeadless>
              <BaseCheckboxHeadless
                v-model="twoFaMode"
                name="radio_custom"
                value="app_id"
              >
                <BaseCard
                  shape="curved"
                  class="peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"
                >
                  <div class="flex flex-col text-center">
                    <p class="text-2xl mb-2"><strong>UNIT 4</strong></p>
                    <BaseHeading size="md" weight="medium"
                      >피칭 문서</BaseHeading
                    >
                    <BaseParagraph
                      size="xs"
                      lead="snug"
                      class="mt-2 text-muted-500 dark:text-muted-400"
                    >
                    피칭 시 필요한 문서 작성을 할 수 있습니다.<br /><br />
                    </BaseParagraph>
                  </div>
                  <div class="child absolute end-2 top-3 opacity-0">
                    <Icon
                      name="ph:check-circle-duotone"
                      class="text-primary-500 h-7 w-7"
                    />
                  </div>
                </BaseCard>
              </BaseCheckboxHeadless>
            </div>
          </div>
          <div class="flex items-center">
            <div class="me-8 mb-8">
              <BaseRadio v-model="value" name="checkbox_base" value="default2" color="primary" />
            </div>
            <div class="mx-auto mb-8 grid max-w-8xl gap-6 sm:grid-cols-4 w-full">
              <BaseCheckboxHeadless
                v-model="twoFaMode"
                name="radio_custom"
                value="email_address"
                disabled
              >
                <BaseCard
                  shape="curved"
                  class="peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"
                >
                  <div class="flex flex-col text-center">
                    <p class="text-2xl mb-2"><strong>STEP 5</strong></p>
                    <BaseHeading size="md" weight="medium"
                      >화면설계</BaseHeading
                    >
                    <BaseParagraph
                      size="xs"
                      lead="snug"
                      class="mt-2 text-muted-500 dark:text-muted-400"
                    >
                    서비스 기획 중심으로 화면 설계 작성 
                    </BaseParagraph>
                  </div>
                  <div class="child absolute end-2 top-3 opacity-0">
                    <Icon
                      name="ph:check-circle-duotone"
                      class="text-primary-500 h-7 w-7"
                    />
                  </div>
                </BaseCard>
              </BaseCheckboxHeadless>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
