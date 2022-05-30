
export function containsHashtags(edge, args) {

    let hashtags = [...arguments]
    hashtags.shift()

    let result = edge.node.frontmatter.hashtags.split(',')
                     .filter(tag => tag !== undefined)
                     .map(tag => tag.trim())
                     .filter(tag => hashtags.includes(tag))

    return result !== undefined && result.length !== 0
}
