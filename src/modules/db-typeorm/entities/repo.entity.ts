import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Repo {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ type: 'jsonb', nullable: true })
  data?: any;

  @Column({ type: 'varchar' })
  url?: string;
}
