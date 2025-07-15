import type { FC } from "react";

type Props = {
    children: React.ReactNode;
}
const ScrollX: FC<Props> = ({ children }) => {
    return (
        <div className="w-[95%] h-full flex-row-start-center gap-5 overflow-x-auto custom-scrollbar">
            {children}
        </div>
    )
}

export default ScrollX
