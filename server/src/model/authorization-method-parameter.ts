import { Table, Column, Model, HasMany, CreatedAt, DeletedAt, UpdatedAt, DataType, Default, BelongsToMany, AllowNull } from 'sequelize-typescript';

@Table
class AuthorizationMethodParameter extends Model<AuthorizationMethodParameter>{

    @Column(DataType.STRING)
    name: string;

    @Column(DataType.STRING)
    typeOfValue: string;

    @CreatedAt
    creationDate: Date;

    @UpdatedAt
    updatedOn: Date;

    @DeletedAt
    deletionDate: Date;

}

export default AuthorizationMethodParameter