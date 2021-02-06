module.exports = {
  title: 'Bible First Online | Docs',
  description: 'Documentation for users of Bible First Online',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/bf-favicon.png' }]],
  themeConfig: {
    repo: 'euroteamoutreach/bfo-docs',
    docsDir: 'docs',
    logo: '/bfo-logo-mini.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Students', link: '/students/' },
      { text: 'Coaches', link: '/coaches/' },
      { text: 'biblefirst.online', link: 'https://biblefirst.online' },
    ],
    sidebar: {
      '/students/': [
        '',
        'signing-up',
        'working-through-a-lesson',
        'contacting-your-coach',
        'editing-your-profile',
        'student-faq',
      ],

      '/coaches/': [
        '',
        'signing-up',
        'adding-students',
        'messaging-a-student',
        'grading-quizzes',
        'student-profile-page',
        'reminders',
        'deleting-students',
        'multiple-coaches',
        'account-settings',
        'coach-faq',
      ],

      '/': [
        '',
        ['/guide/', 'Guide'],
        ['/faq/', 'Frequently Asked Questions'],
        ['/support/', 'Support'],
      ],
    },
    editLinks: true,
    lastUpdated: true,
    smoothScroll: true,
  },
};
