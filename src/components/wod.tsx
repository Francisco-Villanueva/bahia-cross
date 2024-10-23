import { IWod } from '../types/index';
import Work from './work';


interface WodProps {
    wod: IWod
}

const Wod: React.FC<WodProps> = ({ wod }) => {
    return (
        <div className="flex flex-col">
            <h3 className="text-center font-bold">{wod.title}</h3>
            <hr />
            <div>
                {wod.works.map((work) => (
                    <div className="flex space-x-2">
                        <Work key={work.id} work={work} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Wod;