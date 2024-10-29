import { IExercice } from '../types/index'

interface ExerciceProps {
    exercice: IExercice
}

const Exercice: React.FC<ExerciceProps> = ({ exercice }) => {
    return (
        <div>
            <div className='flex flex-row gap-2 ml-4'>
                <h3>{exercice.name}</h3>
                <p>{exercice.reps}</p>
            </div>
            {exercice.description && <p>{exercice.description}</p>}
            {exercice.video && (
                <a href={exercice.video} target="_blank">
                    Mirar video
                </a>
            )}
        </div>
    )
}

export default Exercice;