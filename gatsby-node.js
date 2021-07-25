exports.createPages = function ({actions, graphql}) {

    // const { data } = await graphql`
    //     query {
    //         allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    //             edges {
    //                 node {
    //                     id
    //                     frontmatter {
    //                       path
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `
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

    return graphql(`
    {
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
    `).then(res => {
        if (res.errors) {
            return Promise.reject(res.errors)
        }

        const postTemplate = require.resolve('./src/templates/blog-post.js')

        res.data.allMdx.edges.forEach(({node}) => {
            actions.createPage({
                path: node.frontmatter.path,
                component: postTemplate,
                context: {
                    id: node.id
                },
            })
        })
    })
}