import { Router } from 'express'
import { getCustomRepository } from 'typeorm'

import ToolRepository from '../repositories/ToolRepository'

import CreateToolService from '../services/CreateToolService'

const toolsRouter = Router()

toolsRouter.get('/tools', async (request, response) => {
    const toolRepository = getCustomRepository(ToolRepository)

    const tools = await toolRepository.find()

    return response.json(tools)
})

toolsRouter.get('/tools', () => { })

toolsRouter.post('/tools', async (request, response) => {
    try {
        const { title, link, description, tags } = request.body

        const createTool = new CreateToolService()

        const tool = await createTool.execute({
            title,
            link,
            description,
            tags
        })

        return response.json(tool)
    }
    catch (err) {
        return response.status(400).json({ error: err.message })
    }
})

toolsRouter.delete('/tools', () => { })


export default toolsRouter

