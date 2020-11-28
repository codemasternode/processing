import { Table, Column, Model, CreatedAt, DeletedAt, UpdatedAt, DataType, Default, BelongsToMany } from 'sequelize-typescript';

@Table
class User extends Model<User>{

    @Column(DataType.STRING)
    firstname: string;

    @Column(DataType.STRING)
    lastname: string;

    @Column(DataType.TEXT)
    logo: string;

    @Column(DataType.TEXT)
    password: string;

    @CreatedAt
    creationDate: Date;

    @UpdatedAt
    updatedOn: Date;

    @DeletedAt
    deletionDate: Date;

}

export default User