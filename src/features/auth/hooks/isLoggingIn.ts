import { useState } from "react";

export const useIsLoggingIn = () => {
    const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
    return { isLoggingIn, setIsLoggingIn };
};
