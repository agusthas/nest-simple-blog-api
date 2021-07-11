import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  AllowNull,
} from 'sequelize-typescript';

import { User } from '../../users/entities/user.entity';

@Table
export class Post extends Model {
  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  title: string;

  @AllowNull(false)
  @Column({
    type: DataType.TEXT,
  })
  body: string;

  @ForeignKey(() => User) // describe that userId column is the id of the User table
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @BelongsTo(() => User) // specify the relationship between the Post and User table
  user: User;
}
