import { Request, Response} from 'express';
import { AdventageSection } from '@models/AdventageSection'
import { Citi, Crud} from '../global'

export default class AdventageSectionController implements Crud {
    
    async create(req: Request, res: Response){
        const {title, description} = req.body;

        const isAnyUndefined = Citi.areValuesUndefined(title, description);

        if (isAnyUndefined){
            return res.status(400).send()
        }

        const newAdventage = { title, description}

        const {httpStatus, message} = await Citi.insertIntoDatabase(AdventageSection, newAdventage);

        return res.status(httpStatus).send({message})
    }

    async get(req: Request, res: Response){
        const {httpStatus, values} = await Citi.getAll(AdventageSection);
        return res.status(httpStatus).send(values)
    }

    async delete(req: Request, res: Response){
        const {id} = req.params;
        const {value: AdventageFound, message} = await Citi.findByID(AdventageSection, id);

        if(!AdventageFound){
            return Response.status(400).send({message});
        }
        
        const {httpStatus, messageFromDelete} = await Citi.deleteValue(AdventageSection, AdventageFound);
        return res.status(httpStatus).send({messageFromDelete})
    }

    async update(req: Request, res: Response){
        const {id} = req.params;
        const {title, description} = req.body;

        const isAnyUndefined = Citi.areValuesUndefined(title, description, id);
        if(isAnyUndefined){
            return res.status(400).send();
        }

        const AdventageSectionUpdated = {title, description};

        const {httpStatus, messageFromUpdate} = await Citi.updateValue(AdventageSection, id, AdventageSectionUpdated);
        return res.status(httpStatus).send({messageFromUpdate})
    }
}