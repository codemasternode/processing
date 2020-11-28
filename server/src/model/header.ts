import { Table, Column, Model, HasMany, CreatedAt, DeletedAt, UpdatedAt, DataType, Default, BelongsToMany, AllowNull } from 'sequelize-typescript';

@Table
class Header extends Model<Header>{

    @Column(DataType.STRING)
    name: string;

    @Column(DataType.TEXT)
    description: string;

    @CreatedAt
    creationDate: Date;

    @UpdatedAt
    updatedOn: Date;

    @DeletedAt
    deletionDate: Date;

}

export default Header