export function getStartingPrice(product) {
  return Math.min(...product.priceTiers.map((item) => item.unitPrice));
}

export function getProductImage(product) {
  return product?.image || "/assets/media/pdf/polo-001.jpg";
}

export function sortProducts(products, sortKey) {
  const list = [...products];

  if (sortKey === "price-asc") {
    return list.sort((a, b) => getStartingPrice(a) - getStartingPrice(b));
  }

  if (sortKey === "price-desc") {
    return list.sort((a, b) => getStartingPrice(b) - getStartingPrice(a));
  }

  if (sortKey === "min-order") {
    return list.sort((a, b) => a.minOrder - b.minOrder);
  }

  return list.sort((a, b) => a.name.localeCompare(b.name));
}

export function filterProducts(products, filters) {
  return products.filter((product) => {
    const keywordMatch =
      !filters.keyword ||
      [product.name, product.shortDescription, product.description, product.material, product.useCase].some((field) =>
        field.toLowerCase().includes(filters.keyword.toLowerCase()),
      );

    const categoryMatch = filters.category === "Semua" || product.categoryId === filters.category;
    const brandingMatch = filters.branding === "Semua" || product.brandingOptions.some((item) => item.toLowerCase().includes(filters.branding.toLowerCase()));
    const minOrderMatch = filters.minOrder === "Semua" || product.minOrder <= Number(filters.minOrder);

    return keywordMatch && categoryMatch && brandingMatch && minOrderMatch;
  });
}
