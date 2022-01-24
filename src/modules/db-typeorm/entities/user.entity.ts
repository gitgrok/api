import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ type: 'jsonb', nullable: true })
  data?: any;

  @Column({ type: 'varchar' })
  email!: string;

  @Column({ type: 'varchar' })
  password!: string;

  @Column({ type: 'varchar', nullable: true })
  hash?: string;

  @Column({ type: 'varchar', nullable: true })
  refreshToken?: string;
}
