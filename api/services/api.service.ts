/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CreateRepoDto } from '../models/create-repo-dto';
import { Repo } from '../models/repo';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation repoControllerList
   */
  static readonly RepoControllerListPath = '/repos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `repoControllerList()` instead.
   *
   * This method doesn't expect any request body.
   */
  private repoControllerList$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Repo>>> {

const rb = new RequestBuilder(this.rootUrl, ApiService.RepoControllerListPath, 'get');
if (params) {


}
return this.http.request(rb.build({
responseType: 'json',
accept: 'application/json'
})).pipe(
filter((r: any) => r instanceof HttpResponse),
map((r: HttpResponse<any>) => {
return r as StrictHttpResponse<Array<Repo>>;
})
);
}

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `repoControllerList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  repoControllerList(params?: {
  }): Observable<Array<Repo>> {

    return this.repoControllerList$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Repo>>) => r.body as Array<Repo>)
    );
  }

  /**
   * Path part for operation repoControllerTrack
   */
  static readonly RepoControllerTrackPath = '/repos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `repoControllerTrack()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  private repoControllerTrack$Response(params: {
    body: CreateRepoDto
  }): Observable<StrictHttpResponse<void>> {

const rb = new RequestBuilder(this.rootUrl, ApiService.RepoControllerTrackPath, 'put');
if (params) {


  rb.body(params.body, 'application/json');
}
return this.http.request(rb.build({
responseType: 'text',
accept: '*/*'
})).pipe(
filter((r: any) => r instanceof HttpResponse),
map((r: HttpResponse<any>) => {
return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
})
);
}

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `repoControllerTrack$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  repoControllerTrack(params: {
    body: CreateRepoDto
  }): Observable<void> {

    return this.repoControllerTrack$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation repoControllerBranches
   */
  static readonly RepoControllerBranchesPath = '/repos/{url}/branches';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `repoControllerBranches()` instead.
   *
   * This method doesn't expect any request body.
   */
  private repoControllerBranches$Response(params?: {
  }): Observable<StrictHttpResponse<{
}>> {

const rb = new RequestBuilder(this.rootUrl, ApiService.RepoControllerBranchesPath, 'get');
if (params) {


}
return this.http.request(rb.build({
responseType: 'json',
accept: 'application/json'
})).pipe(
filter((r: any) => r instanceof HttpResponse),
map((r: HttpResponse<any>) => {
return r as StrictHttpResponse<{
}>;
})
);
}

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `repoControllerBranches$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  repoControllerBranches(params?: {
  }): Observable<{
}> {

    return this.repoControllerBranches$Response(params).pipe(
      map((r: StrictHttpResponse<{
}>) => r.body as {
})
    );
  }

  /**
   * Path part for operation repoControllerOpenRepo
   */
  static readonly RepoControllerOpenRepoPath = '/repos/{url}/open-repo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `repoControllerOpenRepo()` instead.
   *
   * This method doesn't expect any request body.
   */
  private repoControllerOpenRepo$Response(params?: {
  }): Observable<StrictHttpResponse<{
}>> {

const rb = new RequestBuilder(this.rootUrl, ApiService.RepoControllerOpenRepoPath, 'get');
if (params) {


}
return this.http.request(rb.build({
responseType: 'json',
accept: 'application/json'
})).pipe(
filter((r: any) => r instanceof HttpResponse),
map((r: HttpResponse<any>) => {
return r as StrictHttpResponse<{
}>;
})
);
}

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `repoControllerOpenRepo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  repoControllerOpenRepo(params?: {
  }): Observable<{
}> {

    return this.repoControllerOpenRepo$Response(params).pipe(
      map((r: StrictHttpResponse<{
}>) => r.body as {
})
    );
  }

  /**
   * Path part for operation repoControllerOpenDir
   */
  static readonly RepoControllerOpenDirPath = '/repos/open-dir';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `repoControllerOpenDir()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  private repoControllerOpenDir$Response(params: {
    body: CreateRepoDto
  }): Observable<StrictHttpResponse<{
}>> {

const rb = new RequestBuilder(this.rootUrl, ApiService.RepoControllerOpenDirPath, 'put');
if (params) {


  rb.body(params.body, 'application/json');
}
return this.http.request(rb.build({
responseType: 'json',
accept: 'application/json'
})).pipe(
filter((r: any) => r instanceof HttpResponse),
map((r: HttpResponse<any>) => {
return r as StrictHttpResponse<{
}>;
})
);
}

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `repoControllerOpenDir$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  repoControllerOpenDir(params: {
    body: CreateRepoDto
  }): Observable<{
}> {

    return this.repoControllerOpenDir$Response(params).pipe(
      map((r: StrictHttpResponse<{
}>) => r.body as {
})
    );
  }

  /**
   * Path part for operation envControllerGetAll
   */
  static readonly EnvControllerGetAllPath = '/e/n/v';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `envControllerGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  private envControllerGetAll$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

const rb = new RequestBuilder(this.rootUrl, ApiService.EnvControllerGetAllPath, 'get');
if (params) {


}
return this.http.request(rb.build({
responseType: 'text',
accept: '*/*'
})).pipe(
filter((r: any) => r instanceof HttpResponse),
map((r: HttpResponse<any>) => {
return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
})
);
}

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `envControllerGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  envControllerGetAll(params?: {
  }): Observable<void> {

    return this.envControllerGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation envControllerGetOne
   */
  static readonly EnvControllerGetOnePath = '/e/n/v/{name}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `envControllerGetOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  private envControllerGetOne$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

const rb = new RequestBuilder(this.rootUrl, ApiService.EnvControllerGetOnePath, 'get');
if (params) {


}
return this.http.request(rb.build({
responseType: 'text',
accept: '*/*'
})).pipe(
filter((r: any) => r instanceof HttpResponse),
map((r: HttpResponse<any>) => {
return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
})
);
}

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `envControllerGetOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  envControllerGetOne(params?: {
  }): Observable<void> {

    return this.envControllerGetOne$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation queryControllerList
   */
  static readonly QueryControllerListPath = '/query';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `queryControllerList()` instead.
   *
   * This method doesn't expect any request body.
   */
  private queryControllerList$Response(params?: {
  }): Observable<StrictHttpResponse<Array<string>>> {

const rb = new RequestBuilder(this.rootUrl, ApiService.QueryControllerListPath, 'get');
if (params) {


}
return this.http.request(rb.build({
responseType: 'json',
accept: 'application/json'
})).pipe(
filter((r: any) => r instanceof HttpResponse),
map((r: HttpResponse<any>) => {
return r as StrictHttpResponse<Array<string>>;
})
);
}

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `queryControllerList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  queryControllerList(params?: {
  }): Observable<Array<string>> {

    return this.queryControllerList$Response(params).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

}
