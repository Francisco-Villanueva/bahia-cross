import { IWork } from '../types/index'
import Exercice from './exercice'

interface WorkProps {
    work: IWork,
}

const Work: React.FC<WorkProps> = ({ work }) => {
    return (
        <div className="text-[white] space-y-2 m-3 w-full">
            {work.title === "rest" ? (
                <div className='flex justify-center w-full'>
                    <div className="w-full text-center bg-gray-400 rounded h-10 flex items-center justify-center uppercase">
                        <h2>{work.title}</h2>
                        <p className='ml-2'>{work.time}'</p>
                    </div>
                </div>
            ) : (
                <div className='text-[white] uppercase'>
                    <div className="flex flex-row space-x-2">
                        <h2>{work.title}</h2>
                        <p>{work.time}'</p>
                    </div>
                    <hr className='w-full border-gray-300 mt-1' />
                </div>
            )}
            <div className='flex flex-col w-full'>
                {work.exercices.map((exercice) => (
                    <Exercice key={exercice.id} exercice={exercice} />
                ))}
            </div>
        </div>
    )
}

export default Work