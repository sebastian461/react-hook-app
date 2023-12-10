import { memo } from "react";

/*
 * la función 'memo' hace que el componente se dispare, solo cuando las
 * propiedades cambian y no cuando lo hace el componente padre
 * se recomienda usar solo con componentes grandes
 */
export const Small = memo(({ value }) => {
  console.log("Me volví a ejecutar :c");
  return <small>{value}</small>;
});
