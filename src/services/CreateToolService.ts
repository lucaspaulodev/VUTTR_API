import { getCustomRepository } from 'typeorm'

import Tool from '../models/Tool'
import ToolRepository from '../repositories/ToolRepository'

interface Request {
    title: string;
    link: string;
    description: string;
    tags: string[];
}

class CreateToolService {
    public async execute({ title, link, description, tags }: Request): Promise<Tool> {
        const toolRepository = getCustomRepository(ToolRepository)

        const tool = toolRepository.create({
            title,
            link,
            description,
            tags
        })

        await toolRepository.save(tool)

        return tool;
    }
}

export default CreateToolService