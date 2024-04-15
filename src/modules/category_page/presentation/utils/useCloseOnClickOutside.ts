import {useEffect} from "react";

const useCloseOnClickOutside = (
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
    menuRef: React.RefObject<HTMLElement>,
    menuButtonRef: React.RefObject<HTMLElement>
) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isActive &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                menuButtonRef.current &&
                !menuButtonRef.current.contains(event.target as Node)
            ) {
                setIsActive(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isActive, setIsActive, menuRef, menuButtonRef]);
}
export default useCloseOnClickOutside;