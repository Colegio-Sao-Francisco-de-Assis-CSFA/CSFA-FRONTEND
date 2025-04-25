import { useState } from "react";

export const useIsHovered = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return { isHovered, setIsHovered };
};
