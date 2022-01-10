import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Name {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  artistName: string;
}
