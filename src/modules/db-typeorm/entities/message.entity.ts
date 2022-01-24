import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ type: 'jsonb' })
  data!: string;

  message: string;

  name: string;

  phone: string;

  subject: string;

  when: string;
}
