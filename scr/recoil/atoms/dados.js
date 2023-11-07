import { atom } from "recoil";

export const dadosState = atom({
  key: "dadosEstado",
  default: {
    categorias: [],
    marcas: [],
    produtos: [],
  },
});
