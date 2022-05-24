
export function containsHashtag(node, hashtag) {
    node.frontmatter.hashtags.split(',').filter(tag => tag !== undefined).map(tag => tag.trim()).filter(tag => tag === hashtag)

    let result = node.frontmatter.hashtags.split(',')
                     .filter(tag => tag !== undefined)
                     .map(tag => tag.trim())
                     .filter(tag => tag === hashtag)

    return result !== undefined && result.length !== 0

}
