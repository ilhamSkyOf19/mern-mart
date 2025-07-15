import type { FC } from "react"


type Props = {
    text1: string;
    text2: string;

}
const SubJudulSection: FC<Props> = ({ text1, text2 }) => {
    return (
        <h3 className="text-lg font-bold uppercase">
            <span className="text-matcha">{text1}</span> {text2}
        </h3>
    )
}

export default SubJudulSection
