import {
  IArticle,
  IElemental,
  OpenGraphObjectType,
} from '@onivoro/isomorphic-seo';

export class CreatePostDto implements IArticle {
  description: string;
  title: string;
  label: string;
  type = OpenGraphObjectType.article;
  icon: string;
  slug: string;
  keywords: string[];
  image?: string;
  elements?: IElemental[];
}
