import { createContext, useContext } from 'react';
import tags from '../meta/tags.yml';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function TagProvider({ children }) {
  function generateTagMap() {
    const result = {};
    for (const tag of tags.tags) {
      result[tag.slug] = tag;
    }
    return result;
  }

  const tagMap = generateTagMap();

  function getTag(slug) {
    return tagMap[slug];
  }

  function listTags() {
    return tags.tags;
  }

  return (
    <LocalStateProvider value={{ getTag, listTags }}>
      {children}
    </LocalStateProvider>
  );
}

function useTag() {
  const all = useContext(LocalStateContext);
  return all;
}

export { TagProvider, useTag };
