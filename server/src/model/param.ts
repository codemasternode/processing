import { Table, Column, Model, HasMany, CreatedAt, DeletedAt, UpdatedAt, DataType, Default, BelongsToMany, AllowNull } from 'sequelize-typescript';
import paramTypeEnum from '../types/params/param-type-enum';

@Table
class Param extends Model<Param>{

    @Column(DataType.STRING)
    key: string;

    @Column(DataType.TEXT)
    value: string;

    @Column({
        type: DataType.ENUM({ values: Object.keys(paramTypeEnum) })
    })
    @Default("string")
    type: string;

    @CreatedAt
    creationDate: Date;

    @UpdatedAt
    updatedOn: Date;

    @DeletedAt
    deletionDate: Date;

}

export default Param