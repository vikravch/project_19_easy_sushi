import React, {useEffect} from "react";

const useCloseByEscape = (setIsActive: React.Dispatch<React.SetStateAction<boolean>>) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if(event.key === 'Escape') {
                setIsActive(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    },[]);
};
export default useCloseByEscape;