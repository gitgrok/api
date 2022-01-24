import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {
  IArticle,
  IAuthor,
  IElemental,
  INavigable,
  OpenGraphObjectType,
} from '@onivoro/isomorphic-seo';

@Entity()
export class Post implements IArticle {
  type: OpenGraphObjectType = OpenGraphObjectType.article;
  authors?: IAuthor[];
  image?: string;
  url?: string;
  label: string;
  icon: string;
  children?: INavigable[];
  keywords: string[];
  published?: boolean;

  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  slug!: string;

  @Column({ type: 'jsonb' })
  elements!: IElemental[];
}
