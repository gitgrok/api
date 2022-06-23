import { IBranch } from './branch.interface';
import { IRepo } from './repo.interface';
import { ISearchCriteria } from './search-criteria.interface';

export interface IRepoSearchCriteria {
  repo: IRepo;
  branch: IBranch;
  search: ISearchCriteria;
}
