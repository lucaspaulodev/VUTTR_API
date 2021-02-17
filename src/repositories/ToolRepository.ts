import { EntityRepository, Repository } from 'typeorm';
import Tool from '../models/Tool'

@EntityRepository(Tool)
class ToolRepository extends Repository<Tool> {

}

export default ToolRepository;