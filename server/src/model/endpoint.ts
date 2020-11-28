import { Table, Column, Model, HasMany, CreatedAt, DeletedAt, UpdatedAt, DataType, Default, BelongsToMany, AllowNull } from 'sequelize-typescript';
import methodsEnum from '../types/endpoint/methods-enum';

@Table
class Endpoint extends Model<Endpoint>{

    @Column(DataType.STRING)
    name: string;

    @Column(DataType.TEXT)
    @AllowNull
    description: string;

    @Column(DataType.TEXT)
    path: string;

    @Column({
        type: DataType.ENUM({ values: Object.keys(methodsEnum) })
    })
    method: string;

    @CreatedAt
    creationDate: Date;

    @UpdatedAt
    updatedOn: Date;

    @DeletedAt
    deletionDate: Date;

}

export default Endpoint