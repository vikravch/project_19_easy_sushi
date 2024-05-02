import {useEffect} from "react";
const useCloseOnClickOutside = (
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
    refs: React.RefObject<HTMLElement>[]
) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const isMustBeClosed = refs.every(ref => {
                return ref.current && !ref.current.contains(event.target as Node);
            });
            if (isActive && isMustBeClosed) {
                setIsActive(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isActive, refs, setIsActive]);
}
export default useCloseOnClickOutside;