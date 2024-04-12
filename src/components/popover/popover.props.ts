export interface PopoverProps {
    children: React.ReactNode,
    className?: string,
    onClose: () => void,
    open: boolean,
    title: string

}