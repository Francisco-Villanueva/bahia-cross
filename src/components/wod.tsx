import { IWod } from '../types/index';
import Work from './work';


interface WodProps {
    wod: IWod
}

export default function ({ wod }: WodProps) {
    return (
        <div className="flex flex-col w-full">
            <h3 className="text-[#fff] text-center font-bold uppercase mt-2">{wod.title}</h3>
            <div>
                {wod.works.map((work) => (
                    <div key={work.id} className="flex space-x-2">
                        <Work key={work.id} work={work} />
                    </div>
                ))}
            </div>
        </div>
    )
}