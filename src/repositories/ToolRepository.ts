import { EntityRepository, getRepository, Repository } from 'typeorm';
import Tool from '../models/Tool'

@EntityRepository(Tool)
class ToolRepository extends Repository<Tool> {
    private ormRepository: Repository<Tool>

    constructor() {
        super()
        this.ormRepository = getRepository(Tool)
    }

    public async findById(id: number) {
        const tool = await this.ormRepository.findOne(id)

        return tool;
    }
}

export default ToolRepository;