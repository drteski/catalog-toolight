import { useEffect, useState } from "react";
// import {
//   DocumentDirectoryPath,
//   writeFile,
//   readFile,
//   unlink,
// } from "react-native-fs";
export const useGetProducts = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState();
  useEffect(() => {
    const data = async () => {
      return await fetch(
        `https://files.lazienka-rea.com.pl/toolight-catalog.json`,
        {
          method: "GET",
        },
      )
        .then((res) => res.json())
        .then((data) => {
          // writeFile(`${DocumentDirectoryPath}/ToolightCatalog/data.json`,JSON.stringify(data),'utf8')
          setLoading(false);
          setProducts(data);
        });
    };

    data();
  }, [loading]);

  return { products, loading };
};
