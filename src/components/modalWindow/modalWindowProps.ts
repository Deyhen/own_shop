export interface ModalProps{
    open?: boolean,
    onClose?: () => void,
    children?: React.ReactNode,
    className?: string
}