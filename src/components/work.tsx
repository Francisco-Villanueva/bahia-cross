import { IWork } from '../types/index'
import Exercice from './exercice'

interface WorkProps {
    work: IWork,
}

const Work: React.FC<WorkProps> = ({ work }) => {
    return (
        <div className="text-primary space-y-2 mt-5">
            <div className='flex flex-row space-x-2 border border-orange-500 bg-yellow-200'>
                <h2>{work.title}</h2>
                <p>{work.time}'</p>
            </div>
            <div className='flex flex-col'>
                {work.exercices.map((exercice) => (
                    <Exercice key={exercice.id} exercice={exercice} />
                ))}
            </div>
        </div>
    )
}

export default Work