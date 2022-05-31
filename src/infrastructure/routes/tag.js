import { Router } from 'express';
import "reflect-metadata"
import { getTagById, getTags, removeTagById, savetag } from '../../repository/tagRepository.js';

const tagRouter = Router();

tagRouter.post('/', async (req, res) => {
  const dataTag = req.body

  try {
    const tags = await savetag(dataTag)
    return res.status(200).send(tags);
  } catch (error) {
    return res.status(500).send({status: false, msg: "Server Error, tente novamente"});
  }
});

tagRouter.get('/model/:model', async (req, res) => {
  try {
    const model = req.params.model
    console.log(model)
    const tags = await getTags(model)
    return res.status(200).send(tags);
  } catch (error) {
    return res.status(500).send({status: false, msg: "Server Error, tente novamente"});
  }
});

tagRouter.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const tags = await getTagById(id)
    return res.status(200).send(tags);
  } catch (error) {
    console.log(error)
    return res.status(500).send({status: false, msg: "Server Error, tente novamente"});
  }
});

tagRouter.delete('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const tags = await removeTagById(id)
    return res.status(200).send(tags);
  } catch (error) {
    console.log(error)
    return res.status(500).send({status: false, msg: "Server Error, tente novamente"});
  }
});
export default tagRouter;
