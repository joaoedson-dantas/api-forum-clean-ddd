import { randomUUID } from "node:crypto"
import { UniqueEntityID } from "./unique-entity-id"

export class Entity<TProps> // generic param tips 
{
    private _id: UniqueEntityID
    protected props: TProps 


    get id()
    {
        return this._id
    }

    constructor(props: TProps, id?: string)
    {   
        this.props = props
        this._id = new UniqueEntityID(id)
    }
}