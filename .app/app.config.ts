/**
 * This file is used to configure the app
 *
 * If you have the "Cannot find name 'defineAppConfig'.ts(2304)" error
 * update the root tsconfig.json file to include the following:
 *
 *  "extends": "./.demo/.nuxt/tsconfig.json"
 *
 */

export default defineAppConfig({
  nuxtIcon: {},
  nui: {
    defaultShapes: {},
  },
  tairo: {
    title: 'Tairo',
    sidebar: {
      toolbar: {
        showNavBurger: true,
        tools: [
          {
            component: 'DemoThemeToggle',
            props: {
              disableTransitions: true,
            },
          },
          {
            component: 'DemoToolbarLanguage',
          },
          {
            component: 'DemoToolbarNotifications',
          },
          {
            component: 'DemoToolbarActivity',
          },
          {
            component: 'DemoToolbarAccountMenu',
          },
        ],
      },
      circularMenu: {
        enabled: true,
        tools: [
          {
            component: 'DemoThemeToggle',
            props: {
              class: 'ms-auto',
              disableTransitions: true,
              inverted: true,
            },
          },
          {
            component: 'DemoCircularMenuLanguage',
          },
          {
            component: 'DemoCircularMenuNotifications',
          },
          {
            component: 'DemoCircularMenuActivity',
          },
        ],
      },
      navigation: {
        logo: {
          component: 'TairoLogo',
          props: { class: 'text-primary-600 h-10' },
        },
        items: [
          {
            title: 'Dashboards',
            icon: { name: 'ph:sidebar-duotone', class: 'w-5 h-5' },
            subsidebar: { component: 'DemoSubsidebarDashboards' },
            activePath: '/brainstorming',
          },
          {
            title: 'Layouts',
            icon: { name: 'ph:app-window-duotone', class: 'w-5 h-5' },
            subsidebar: { component: 'DemoSubsidebarLayouts' },
            activePath: '/layouts',
          },
          {
            title: 'Chat',
            icon: { name: 'ph:chat-circle-duotone', class: 'w-5 h-5' },
            to: '/dashboards/messaging',
          },
          {
            title: 'Customize',
            icon: { name: 'ph:drop-half-bottom-duotone', class: 'w-5 h-5' },
            click: () => {
              const isOpen = useState('switcher-open', () => false)
              isOpen.value = true
            },
            position: 'end',
          },
          {
            title: 'Search',
            icon: { name: 'ph:magnifying-glass-duotone', class: 'w-5 h-5' },
            click: () => {
              const isOpen = useState('search-open', () => false)
              isOpen.value = true
            },
            position: 'end',
          },
          {
            title: 'Settings',
            icon: { name: 'ph:gear-six-duotone', class: 'w-5 h-5' },
            to: '/layouts/profile-settings',
            position: 'end',
          },
          {
            title: 'My Account',
            component: 'DemoAccountMenu',
            position: 'end',
          },
        ],
      },
    },
    collapse: {
      toolbar: {
        enabled: true,
        showTitle: true,
        showNavBurger: true,
        tools: [
          {
            component: 'DemoThemeToggle',
          },
          // {
          //   component: 'DemoToolbarLanguage',
          // },
          // {
          //   component: 'DemoToolbarNotifications',
          // },
          // {
          //   component: 'DemoToolbarActivity',
          // },
          // {
          //   component: 'DemoToolbarAccountMenu',
          // },
        ],
      },
      circularMenu: {
        enabled: true,
        tools: [
          {
            component: 'DemoThemeToggle',
            props: {
              class: 'ms-auto',
              disableTransitions: true,
              inverted: true,
            },
          },
          {
            component: 'DemoCircularMenuLanguage',
          },
          {
            component: 'DemoCircularMenuNotifications',
          },
          {
            component: 'DemoCircularMenuActivity',
          },
        ],
      },
      navigation: {
        enabled: true,
        header: {
          component: 'DemoCollapseNavigationHeader',
        },
        // footer: {
        //   component: 'DemoCollapseNavigationFooter',
        // },
        items: [
          {
            name: 'Step 1',
            icon: { name: 'healthicons:1', class: 'w-5 h-5' },
            activePath: '/brainstorming/step1/',
            children: [
              {
                name: '아이디어 초안 작성',
                to: '/brainstorming/step1/',
                icon: { name: 'ph:circle', class: 'w-4 h-4' },
              },
            ],
          },
          {
            name: 'Step 2',
            icon: { name: 'healthicons:2', class: 'w-5 h-5' },
            activePath: '/brainstorming/step2/',
            children: [
              {
                name: '브레인 스토밍',
                to: '/brainstorming/step2',
                icon: { name: 'ph:circle', class: 'w-4 h-4' },
              },
              {
                name: '사용자 니즈 도출',
                to: '/brainstorming/step2',
                icon: { name: 'ph:circle', class: 'w-4 h-4' },
              },
              {
                name: '인터뷰하기',
                to: '/brainstorming/step2',
                icon: { name: 'ph:circle', class: 'w-4 h-4' },
              },
              {
                name: '벤치마킹',
                to: '/brainstorming/step2',
                icon: { name: 'ph:circle', class: 'w-4 h-4' },
              },
              {
                name: '3C, SWOT 분석',
                to: '/brainstorming/step2',
                icon: { name: 'ph:circle', class: 'w-4 h-4' },
              },
              {
                name: 'STP 분석',
                to: '/brainstorming/step2',
                icon: { name: 'ph:circle', class: 'w-4 h-4' },
              },
              {
                name: '비즈니스 모델 캔버스',
                to: '/brainstorming/step2',
                icon: { name: 'ph:circle', class: 'w-4 h-4' },
              },
              {
                name: '서비스 컨셉 도출',
                to: '/brainstorming/step2',
                icon: { name: 'ph:circle', class: 'w-4 h-4' },
              },
            ],
          },
          {
            name: 'Step 3',
            icon: { name: 'healthicons:3', class: 'w-5 h-5' },
            activePath: '/brainstorming3',
            children: [],
          },
          {
            name: 'Step 4',
            icon: { name: 'healthicons:4', class: 'w-5 h-5' },
            activePath: '/brainstorming4',
            children: [],
          },
        ],
      },
    },
    topnav: {
      navigation: {
        enabled: true,
        logo: {
          component: 'TairoLogo',
          props: { class: 'text-primary-600 h-10 w-10' },
        },
        header: {
          component: 'DemoTopnavWorkspaceDropdown',
        },
        items: [
          {
            name: 'Dashboard',
            icon: { name: 'ph:gauge-duotone', class: 'w-6 h-6' },
            activePath: '/dashboards/sales',
            to: '/dashboards/sales',
          },
          {
            name: 'Projects',
            icon: { name: 'ph:suitcase-duotone', class: 'w-6 h-6' },
            activePath: '/layouts/projects/project-list-3',
            to: '/layouts/projects/project-list-3',
          },
          {
            name: 'Freelancers',
            icon: { name: 'ph:users-duotone', class: 'w-6 h-6' },
            activePath: '/layouts/flex-list-1',
            to: '/layouts/flex-list-1',
          },
          {
            name: 'Files',
            icon: { name: 'ph:note-duotone', class: 'w-6 h-6' },
            activePath: '/layouts/table-list-3',
            to: '/layouts/table-list-3',
          },
          {
            name: 'Customers',
            icon: { name: 'ph:users-three-duotone', class: 'w-6 h-6' },
            activePath: '/layouts/user-grid-3',
            to: '/layouts/user-grid-3',
          },
          {
            name: 'Billing',
            icon: { name: 'ph:credit-card-duotone', class: 'w-6 h-6' },
            activePath: '/layouts/utility-billing',
            to: '/layouts/utility-billing',
          },
          {
            name: 'Settings',
            icon: { name: 'ph:gear-six-duotone', class: 'w-6 h-6' },
            activePath: '/layouts/profile-settings',
            to: '/layouts/profile-settings',
          },
          {
            name: 'Status',
            icon: { name: 'ph:notification-duotone', class: 'w-6 h-6' },
            activePath: '/layouts/utility-status',
            to: '/layouts/utility-status',
          },
        ],
      },
      circularMenu: {
        enabled: true,
        tools: [
          {
            component: 'DemoThemeToggle',
            props: {
              class: 'ms-auto',
              disableTransitions: true,
              inverted: true,
            },
          },
          {
            component: 'DemoCircularMenuLanguage',
          },
          {
            component: 'DemoCircularMenuNotifications',
          },
          {
            component: 'DemoCircularMenuActivity',
          },
        ],
      },
      toolbar: {
        enabled: true,
        showTitle: false,
        tools: [
          {
            component: 'DemoThemeToggle',
            props: {
              disableTransitions: true,
            },
          },
          {
            component: 'DemoToolbarSearch',
          },
          {
            component: 'DemoToolbarCustomize',
          },
          {
            component: 'DemoToolbarNotifications',
          },
          {
            component: 'DemoAccountMenu',
            props: {
              horizontal: true,
            },
          },
        ],
      },
      footer: {
        enabled: true,
        logoSeparator: {
          component: 'TairoLogo',
          props: { class: 'text-primary-500 h-7 w-7' },
        },
        logo: {
          component: 'TairoLogoText',
          props: {
            class:
              'text-muted-300 ltablet:mx-0 mx-auto h-4 transition-all duration-200 lg:mx-0',
          },
        },
        copyright: {
          name: 'Css Ninja',
          to: 'https://cssninja.io',
          since: '2018',
        },
        links: [
          {
            name: 'Demo pages',
            to: '/demo',
          },
          {
            name: 'Documentation',
            to: '/documentation',
          },
          {
            name: 'Shuriken UI',
            to: 'https://github.com/shuriken-ui',
            rel: 'noopener',
            target: '_blank',
          },
          {
            name: 'Support',
            to: 'https://cssninja.io/faq/support',
            rel: 'noopener',
            target: '_blank',
          },
        ],
      },
    },
    panels: [
      {
        name: 'language',
        position: 'right',
        component: 'DemoPanelLanguage',
      },
      {
        name: 'activity',
        position: 'right',
        component: 'DemoPanelActivity',
      },
      {
        name: 'search',
        position: 'left',
        component: 'DemoPanelSearch',
      },
      {
        name: 'task',
        position: 'right',
        component: 'DemoPanelTask',
      },
    ],
    error: {
      logo: {
        component: 'img',
        props: {
          src: '/img/illustrations/system/404-1.svg',
          class: 'relative z-20 w-full max-w-lg mx-auto',
        },
      },
    },
  },
})
