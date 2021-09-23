export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '614cfd8360a53c19bea325b3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-uomgenxo',
                  apiId: '71c92c33-bf48-4d07-9d67-2f55a7ca8ad3'
                },
                {
                  buildHookId: '614cfd83fc593d28932990ba',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-q2hbjiob',
                  apiId: '46f9fe91-caad-4ca5-83c3-d3c037ce5bc4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jwwilson29322/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-q2hbjiob.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
