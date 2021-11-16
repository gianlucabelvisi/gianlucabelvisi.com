exports.createSchemaCustomization = ({actions, schema, getNode}) => {
    actions.createTypes([
        schema.buildObjectType({
            name: 'Mdx',
            interfaces: ['Node'],
            fields: {
                isFuture: {
                    type: 'Boolean!',
                    resolve: (s) => new Date(s.frontmatter.date) > new Date(),
                },
            },
        }),
    ])
}

exports.createPages = async ({actions, graphql}) => {

    const {data} = await graphql(`
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

    const postPerPage = 7
    const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)

    Array.from({length: numPages}).forEach((_, i) => {
        actions.createPage({
            path: 'blog-page' + (i + 1),
            component: require.resolve("./src/templates/all-posts.js"),
            context: {
                limit: postPerPage,
                skip: i * postPerPage,
                numPages: numPages,
                currentPage: i + 1,
            }
        })
    })

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
}
