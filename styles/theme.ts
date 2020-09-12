import { theme, DefaultTheme } from "@chakra-ui/core";

const CustomTheme: DefaultTheme = {
  ...theme, //Estou copiando o tema padrão do chakra UI, que está dentro de theme
};

export default CustomTheme;
