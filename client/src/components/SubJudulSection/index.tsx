import type { FC } from "react"


type Props = {
    text1: string;
    text2: string;
    parallax?: boolean

}
const SubJudulSection: FC<Props> = ({ text1, text2, parallax }) => {
    return (
        <h3 className={`text-lg font-bold uppercase transisi-700 ${parallax ? 'parallax-0' : 'translate-y-10 opacity-0'}`}>
            <span className="text-matcha">{text1}</span> {text2}
        </h3>
    )
}

export default SubJudulSection
