import tags from '../meta/tags.yml';

function generateTagMap() {
  const result = {};
  for (const tag of tags.tags) {
    result[tag.slug] = tag;
  }
  return result;
}

const tagMap = generateTagMap();

export function getTag(slug) {
  return tagMap[slug];
}

export function listTags() {
  return tags.tags;
}
