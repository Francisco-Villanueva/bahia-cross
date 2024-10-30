import { IWork } from '../types/index'
import Exercice from './exercice'

interface WorkProps {
    work: IWork,
}

export default function ({ work }: WorkProps) {
    return (
        <div className="text-[#fff] space-y-2 m-3 w-full">
            {work.title === "rest" ? (
                <div className='flex justify-center w-full'>
                    <div className="w-full text-center bg-[#9CA3AF] rounded h-10 flex items-center justify-center uppercase">
                        <h2>{work.title}</h2>
                        <p className='ml-2'>{work.time}&apos;</p>
                    </div>
                </div>
            ) : (
                <div className='text-[#fff] uppercase'>
                    <div className="flex flex-row gap-2">
                        <h2>{work.title}</h2>
                        <p>{work.time}&apos;</p>
                    </div>
                    <hr className='w-full border-[#D1D5DB] mt-1' />
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