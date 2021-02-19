import { Request, Response } from "express";

import { getCustomRepository } from "typeorm";

import ToolRepository from "../repositories/ToolRepository";

import CreateToolService from "../services/CreateToolService";

export default class ToolController {
  async show(request: Request, response: Response) {
    const toolRepository = getCustomRepository(ToolRepository);

    const tools = await toolRepository.find();

    return response.json(tools);
  }

  async index(request: Request, response: Response) {
    const tags = request.query.tags;

    //const toolRepository = getCustomRepository(ToolRepository);

    /*const tools = await toolRepository
      .createQueryBuilder("tools")
      .where(":tags = ANY(tools.tags)", { tags: tags })
      .getMany();
    */

    return response.json(tags);
  }

  async create(request: Request, response: Response) {
    try {
      const { title, link, description, tags } = request.body;

      const createTool = new CreateToolService();

      const tool = await createTool.execute({
        title,
        link,
        description,
        tags,
      });

      return response.json(tool);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const numberId = Number(id);

      const toolRepository = getCustomRepository(ToolRepository);

      const tool = await toolRepository.findById(numberId);

      await toolRepository.remove(tool);

      return response.json(tool);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}