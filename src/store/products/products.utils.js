/**
 * Normalize the products collection array into an object map
 *
 * @param {*} collectionsArray
 */
export const normalizeProductCollectionsArray = (collectionsArray) => {
  return collectionsArray.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};
