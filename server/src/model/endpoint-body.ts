import { Table, Column, Model, HasMany, CreatedAt, DeletedAt, UpdatedAt, DataType, Default, BelongsToMany, AllowNull } from 'sequelize-typescript';
import endpointBodyEnum from '../types/endpoint/methods-enum';

@Table
class EndpointBody extends Model<EndpointBody>{

    @Column({
        values: Object.keys(endpointBodyEnum)
    })
    name: string;



    @CreatedAt
    creationDate: Date;

    @UpdatedAt
    updatedOn: Date;

    @DeletedAt
    deletionDate: Date;

}

export default EndpointBody