export const getWishlistIds = (): string[] => {
  const savedIds = localStorage.getItem('wishlistIds');
  return savedIds ? JSON.parse(savedIds) : [];
};

export const saveWishlistIds = (wishlistIds: string[]) => {
  localStorage.setItem('wishlistIds', JSON.stringify(wishlistIds));
};

export const isIdInWishlist = (wishlistIds: string[], bookId: string): boolean => {
  return wishlistIds.includes(bookId);
};