export default defineAppConfig({
  tairo: {
    sidebar: {
      circularMenu: {
        enabled: false,
        tools: [],
      },
      toolbar: {
        enabled: true,
        showTitle: true,
        showNavBurger: false,
        tools: [],
      },
      navigation: {
        enabled: true,
        startOpen: true,
        logo: {
          component: 'TairoLogo',
          props: { class: 'text-primary-600 h-10' },
        },
        items: [
          {
            // Title displayed in the sidebar
            title: 'Dashboards',
            // Icon displayed in the sidebar
            // see https://icones.js.org/
            icon: { name: 'ph:sidebar-duotone', class: 'w-5 h-5' },
            // Path where the item is considered active
            activePath: '/dashboards',
            // Subsidebar global component to display
            // when clicking on the item
            subsidebar: { component: 'DemoSubsidebarDashboards' },
            // OR Path to navigate to when clicking on the item
            to: '/dashboards/messaging',
            // OR Custom action to trigger
            // when clicking on the item
            click: () => {
              alert('clicked on layouts')
            },
          },
        ],
      },
    },
  },
})
