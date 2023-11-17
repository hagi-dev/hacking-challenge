import choqueCobertura from "../../../assets/images/choqueCobertura.png";
import llantaRobadaCobertura from "../../../assets/images/llantaRobadaCobertura.png";
import atropelloCobertura from "../../../assets/images/atropelloCobertura.jpg";
import { ProductList, SelectOption, SkuList } from "../../../types/models";
import {
  VALUE_INITIAL_PAYMENT,
  VALUE_INITIAL_SUM_ASSURED,
} from "../../../types/constants";

export const listProductData: ProductList[] = [
  {
    productId: 1,
    title: "Protege a tu auto",
  },
  {
    productId: 2,
    title: "Protege a los que te rodean",
  },
  {
    productId: 3,
    title: "Mejora tu plan",
  },
];

export const listSkuData: SkuList[] = [
  {
    productId: 1,
    skuId: 1,
    price: 15,
    title: "Llanta robada",
    urlImage: llantaRobadaCobertura,
    description:
      "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más",
  },
  {
    productId: 1,
    skuId: 2,
    price: 20,
    title: "Choque y/o pasarte la luz roja",
    urlImage: choqueCobertura,
    description:
      "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más",
  },
  {
    productId: 1,
    skuId: 3,
    price: 50,
    title: "Atropello en la vía Evitamiento",
    urlImage: atropelloCobertura,
    description:
      "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más",
  },
  {
    productId: 2,
    skuId: 4,
    price: 15,
    title: "Llanta robada 2",
    urlImage: llantaRobadaCobertura,
    description:
      "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más",
  },
  {
    productId: 2,
    skuId: 5,
    price: 20,
    title: "Choque y/o pasarte la luz roja 2",
    urlImage: choqueCobertura,
    description:
      "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más",
  },
  {
    productId: 2,
    skuId: 6,
    price: 50,
    title: "Atropello en la vía Evitamiento 2",
    urlImage: atropelloCobertura,
    description:
      "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más",
  },
  {
    productId: 3,
    skuId: 7,
    price: 15,
    title: "Llanta robada 3",
    urlImage: llantaRobadaCobertura,
    description:
      "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más",
  },
  {
    productId: 3,
    skuId: 8,
    price: 20,
    title: "Choque y/o pasarte la luz roja 3",
    urlImage: choqueCobertura,
    description:
      "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más",
  },
  {
    productId: 3,
    skuId: 9,
    price: 50,
    title: "Atropello en la vía Evitamiento 3",
    urlImage: atropelloCobertura,
    description:
      "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona)",
  },
];

export const parseProductList = (list: ProductList[]): SelectOption[] => {
  return list.map((item: ProductList) => ({
    value: item.productId,
    label: item.title,
  }));
};

export const findSkuByProductId = (
  skuId: number,
  data: SkuList[]
): SkuList | undefined => {
  return data.find((item: SkuList) => item.skuId === skuId);
};

export const getTitles = (list: SkuList[], idsSku: number[]): string[] => {
  const filterData = list.filter((item: SkuList) =>
    idsSku.includes(item.skuId)
  );
  return filterData.map((item: SkuList) => item.title);
};

// use reducer

type State = {
  productCurrent: SkuList[];
  skuIdsSelected: number[];
  productIdCurrent: number;
  cost: { sumAssured: number; totalAmount: number };
  skuIdsVariant: { label: null | string; value: number; price: number };
};

type Action =
  | { type: "SET_PRODUCT_CURRENT"; payload: SkuList[] }
  | { type: "SET_SKU_IDS_SELECTED"; payload: number[] }
  | { type: "SET_PRODUCT_ID_CURRENT"; payload: number }
  | { type: "SET_COST"; payload: { sumAssured: number; totalAmount: number } }
  | {
      type: "SET_SKU_IDS_VARIANT";
      payload: { label: null | string; value: number; price: number };
    };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PRODUCT_CURRENT":
      return { ...state, productCurrent: action.payload };
    case "SET_SKU_IDS_SELECTED":
      return { ...state, skuIdsSelected: action.payload };
    case "SET_PRODUCT_ID_CURRENT":
      return { ...state, productIdCurrent: action.payload };
    case "SET_COST":
      return { ...state, cost: action.payload };
    case "SET_SKU_IDS_VARIANT":
      return { ...state, skuIdsVariant: action.payload };
    default:
      return state;
  }
};

export const initialState: State = {
  productCurrent: [],
  skuIdsSelected: [],
  productIdCurrent: listProductData[0].productId,
  cost: {
    sumAssured: VALUE_INITIAL_SUM_ASSURED,
    totalAmount: VALUE_INITIAL_PAYMENT,
  },
  skuIdsVariant: { label: null, value: 2, price: 20 },
};

export const setProductCurrent = (payload: SkuList[]) => ({
  type: "SET_PRODUCT_CURRENT",
  payload,
});

export const setSkuIdsSelected = (payload: number[]) => ({
  type: "SET_SKU_IDS_SELECTED",
  payload,
});

export const setProductIdCurrent = (payload: number) => ({
  type: "SET_PRODUCT_ID_CURRENT",
  payload,
});

export const setCost = (payload: { sumAssured: number; totalAmount: number }) => ({
  type: "SET_COST",
  payload,
});

export const setSkuIdsVariant = (payload: {
  label: null | string;
  value: number;
  price: number;
}) => ({
  type: "SET_SKU_IDS_VARIANT",
  payload,
});

