<script setup lang="ts">
const navigation = [
  {
    name: 'Step 1',
    children: [
      {
        name: '아이디어 작성하기',
        icon: 'ph:circle',
        to: '/brainstorming',
        exact: true,
      },
      {
        name: '키워드 선정',
        icon: 'ph:circle',
        to: '/brainstorming/step1-2',
      },
      {
        name: '주제 및 목적 도출',
        icon: 'ph:circle',
        to: '/brainstorming/step1-3',
      },
      {
        name: '니즈 도출',
        icon: 'ph:circle',
        to: '/brainstorming/step1-4',
      },
      {
        name: '인터뷰 하기',
        icon: 'ph:circle',
        to: '/brainstorming/step1-5',
      },
      {
        name: '인터뷰 결과',
        icon: 'ph:circle',
        to: '/brainstorming/step1-6',
      },
      {
        name: '635 Brain Writing',
        icon: 'ph:circle',
        to: '/brainstorming/step1-7',
      },
      {
        name: '서비스 컨셉 도출',
        icon: 'ph:circle',
        to: '/brainstorming/step1-8',
      },
    ],
  },
  {
    name: 'Step 2',
  },
  {
    name: 'Step 3',
  },
  {
    name: 'Step 4',
  },
]
</script>

<template>
  <TairoSubsidebar>
    <div class="p-2">
      기획 노트 프로세스

    </div>

    <TairoSubsidebarMenu :navigation="navigation" />
  </TairoSubsidebar>
</template>
