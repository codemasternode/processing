import { Table, Column, Model, HasMany, CreatedAt, DeletedAt, UpdatedAt, DataType, Default, BelongsToMany } from 'sequelize-typescript';

@Table
class Project extends Model<Project>{

    @Column(DataType.STRING)
    name: string;

    @Column(DataType.TEXT)
    description: string;

    @Column(DataType.TEXT)
    logo: string;

    @Column(DataType.NUMBER)
    @Default(10)
    users_limit: number;

    @Column(DataType.NUMBER)
    @Default(100)
    endpoint_limit: number;

    @CreatedAt
    creationDate: Date;

    @UpdatedAt
    updatedOn: Date;

    @DeletedAt
    deletionDate: Date;

}

export default Project