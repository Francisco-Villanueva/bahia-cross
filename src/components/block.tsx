import { IBlock } from '../types/index'
import Wod from './wod';

interface BlockProps {
    block: IBlock
}

const Block: React.FC<BlockProps> = ({ block }) => {
    return (
        <div className='flex align-items w-full h-full p-4 gap-5'>
            {block.wods.map((wod) => (
                <div key={wod.id} className='  bg-gray-950 border rounded w-full h-full'>
                    <Wod wod={wod} />
                </div>
            ))}
        </div>
    )
}

export default Block;