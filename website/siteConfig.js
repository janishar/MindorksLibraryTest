/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    image: '/MindorksLibraryTest/img/docusaurus.svg',
    infoLink: 'http://janishar.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'MindorksLibraryTest' /* title for your website */,
  tagline: 'A website for testing',
  url: 'http://janishar.com' /* your website url */,
  baseUrl: '/MindorksLibraryTest/' /* base url for your project */,
  projectName: 'MindorksLibraryTest',
  headerLinks: [
    {doc: 'doc1', label: 'Docs'},
    {doc: 'doc4', label: 'API'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },
  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Janishar Ali Anwar',
  organizationName: 'janishar', // or set an env variable ORGANIZATION_NAME
  projectName: 'MindorksLibraryTest', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/janishar/MindorksLibraryTest',
};

module.exports = siteConfig;