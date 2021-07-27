exports.createPages = async ({actions, graphql}) => {

    const { data } = await graphql(`
        query {
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                    node {
                        id
                        frontmatter {
                          path
                        }
                    }
                }
            }
        }
    `)

    // paginated blog entries

    const postPerPage = 3
    const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)

    Array.from({length: numPages}).forEach((_,i) => {
        actions.createPage({
            path: 'blog-page' + (i+1),
            component: require.resolve("./src/templates/all-posts.js"),
            context: {
                limit: postPerPage,
                skip: i * postPerPage,
                numPages: numPages,
                currentPage: i + 1,
            }
        })
    })

    // single blog entries

    const postTemplate = require.resolve('./src/templates/blog-post.js')

    data.allMdx.edges.forEach(({node}) => {
        actions.createPage({
            path: node.frontmatter.path,
            component: postTemplate,
            context: {
                id: node.id
            },
        })
    })


    //
    // const postTemplate = require.resolve('src/pages/blog-post.js')
    //
    // data.allMdx.edges.forEach(edge => {
    //     const path = edge.node.frontmatter.path
    //     const id = edge.node.id
    //     console.log("Creating page " + path)
    //     actions.createPages({
    //         path: path,
    //         component: postTemplate,
    //         context: {
    //             id
    //         },
    //     })
    // })

    // return graphql(`
    // {
    //     allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    //         edges {
    //             node {
    //                 id
    //                 frontmatter {
    //                   path
    //                 }
    //             }
    //         }
    //     }
    // }
    // `).then(res => {
    //     if (res.errors) {
    //         return Promise.reject(res.errors)
    //     }
    //
    //     // paginated pages for posts
    //
    //     const postPerPage = 3
    //     const numPages = Math.ceil(res.data.allMdx.edges.length / postPerPage)
    //
    //     Array.from({length: numPages}).forEach((_,i) => {
    //       actions.createPage({
    //           path: 'blog-page' + (i+1),
    //           component: require.resolve("./src/templates/all-posts.js"),
    //           context: {
    //               limit: postPerPage,
    //               skip: i * postPerPage,
    //               numPages: numPages,
    //               currentPage: i + 1,
    //           }
    //       })
    //     })


    //     // single blog entries
    //
    //     const postTemplate = require.resolve('./src/templates/blog-post.js')
    //
    //     res.data.allMdx.edges.forEach(({node}) => {
    //         actions.createPage({
    //             path: node.frontmatter.path,
    //             component: postTemplate,
    //             context: {
    //                 id: node.id
    //             },
    //         })
    //     })
    // })
}