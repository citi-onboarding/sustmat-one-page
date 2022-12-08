import { Request, Response } from 'express';
import { HiringSection } from '@models/HiringSection';
import { Citi, Crud } from '../global'

export default class HiringSectionController implements Crud {

    async create(request: Request, response: Response){
        const {jobtitle, requirement} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(jobtitle, requirement);
        if(isAnyUndefined) return response.status(400).send();

        const newHiringSection = {jobtitle, requirement};
        const {httpStatus, message} = await Citi.insertIntoDatabase(HiringSection, newHiringSection);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(HiringSection);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: HiringFound, message } = await Citi.findByID(HiringSection, id); 
           
        if(!HiringFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(HiringSection, HiringFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {jobtitle, requirement} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(jobtitle, requirement, id);
        if(isAnyUndefined) return response.status(400).send();

        const userWithUpdatedValues = {jobtitle, requirement};

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(HiringSection, id, userWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    
}