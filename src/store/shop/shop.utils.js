/**
 * Normalize the shop collection array into an object map
 *
 * @param {*} collectionsArray
 */
export const normalizeShopCollectionsArray = (collectionsArray) => {
  return collectionsArray.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};
