export interface DropdownProps {
    children: React.ReactNode,
    title: string,
    buttonClassName?: string,
    containerClassName?: string
}
export interface DropdownItemProps {
    children: React.ReactNode,
    className?: string,
    onClick?: () => void

}