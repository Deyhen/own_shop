import { useMemo, useState } from "react"
import { createPortal } from "react-dom";

export const Portal = ({children}: any) => {
    const [container, setContainer] = useState<HTMLDivElement>();

    useMemo(() => {
        if(!container) {
            setContainer(document.createElement("div"));
            return
        }
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container)
        }
    }, [container])

    return container ? createPortal(children, container) : null
}