import { type FC } from 'react'
import noData from '../../assets/component/no-data.png'


type NoDataProps = {
    label: string;
}
const Nodata: FC<NoDataProps> = ({ label }) => {
    return (
        <div className="w-full h-full flex-row-center-center">
            <div className="w-[18rem] flex-col-center-center gap-2">
                <img src={noData} alt="no data" className="w-full h-full object-cover" />
                <h3 className="text-lg font-semibold text-slate-800">{label}</h3>
            </div>
        </div>
    )
}

export default Nodata
