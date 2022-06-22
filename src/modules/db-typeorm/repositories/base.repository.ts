import { Connection, DeepPartial, Repository } from 'typeorm';

export abstract class BaseRepository<TEntity> {
  private repository: Repository<TEntity>;
  protected abstract getEntityType(): any;
  protected abstract connection: Connection;

  async get(...args: any[]) {
    return await this.getRepository().find(...args);
  }

  async put(entities: DeepPartial<TEntity>[]) {
    return await this.getRepository().save(entities);
  }

  async post(entities: DeepPartial<TEntity>[]) {
    const metadata = await this.getRepository().insert(entities);
    return metadata.identifiers.map((id, i) => ({ ...entities[i], id: id.id }));
  }

  async delete(id: string[]) {
    return await this.getRepository().delete(id);
  }

  patch;

  protected getRepository() {
    return (this.repository =
      this.repository || this.connection.getRepository(this.getEntityType()));
  }
}
