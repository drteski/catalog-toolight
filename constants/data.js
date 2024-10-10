// import { useEffect } from "react";
//
// useEffect(() => {
//   if (search === "") return setProducts(catalogData);
//   setTab("");
//   setProducts(
//     catalogData.filter((data) =>
//       data.title.toLowerCase().includes(search.toLowerCase()),
//     ),
//   );
//   setCategories((prevState) => {
//     const reducedProducts = products.reduce((previousValue, currentValue) => {
//       const existingCategory = previousValue.findIndex(
//         (item) => item.name === currentValue.category,
//       );
//       if (existingCategory !== -1) {
//         previousValue[existingCategory].count++;
//         return previousValue;
//       } else {
//         return [
//           ...previousValue,
//           { name: currentValue.category, count: 1, active: false },
//         ];
//       }
//     }, []);
//
//     return prevState.map((state) => {
//       const reducedIndex = reducedProducts.findIndex(
//         (prods) => prods.name === state.name,
//       );
//       if (reducedIndex !== -1) {
//         return { ...state, count: reducedProducts[reducedIndex].count };
//       } else {
//         if (state.name === "Wszystko") {
//           return state;
//         } else {
//           return { ...state, count: 0 };
//         }
//       }
//     });
//   });
// }, [search]);
//
// useEffect(() => {
//   setCategories((prevState) => {
//     const items = products.filter((data) =>
//       data.category.toLowerCase().includes(tab.toLowerCase()),
//     );
//     const currentIndex = items.findIndex((state) => state.name === tab);
//     prevState.map((state, index) =>
//       index === currentIndex ? (state.active = true) : (state.active = false),
//     );
//     return prevState;
//   });
//   setProducts(
//     products.filter((data) =>
//       data.category.toLowerCase().includes(tab.toLowerCase()),
//     ),
//   );
// }, [tab]);
