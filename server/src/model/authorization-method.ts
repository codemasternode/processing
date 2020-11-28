import { Table, Column, Model, HasMany, CreatedAt, DeletedAt, UpdatedAt, DataType, Default, BelongsToMany, AllowNull } from 'sequelize-typescript';
import authorizationMethodsEnum from '../types/authorization-methods/authorization-methods-enum';

@Table
class AuthorizationMethod extends Model<AuthorizationMethod>{

    @Column({
        values: Object.keys(authorizationMethodsEnum)
    })
    name: string;

    @CreatedAt
    creationDate: Date;

    @UpdatedAt
    updatedOn: Date;

    @DeletedAt
    deletionDate: Date;

}

export default AuthorizationMethod