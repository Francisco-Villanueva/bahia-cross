import { IBlock } from '../types/index'
import Wod from './wod';

interface BlockProps {
    block: IBlock
}

const Block: React.FC<BlockProps> = ({ block }) => {
    return (
        <div className='flex space-x-10 uppercase '>
            {block.wods.map((wod) => (
                <Wod key={wod.id} wod={wod} />
            ))}
        </div>
    )
}

export default Block;