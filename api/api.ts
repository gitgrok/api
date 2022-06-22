/* tslint:disable */
/* eslint-disable */
/**
 * API DOCUMENTATION
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface CreateRepoDto
 */
export interface CreateRepoDto {
    /**
     * 
     * @type {string}
     * @memberof CreateRepoDto
     */
    'url': string;
}
/**
 * 
 * @export
 * @interface Repo
 */
export interface Repo {
    /**
     * 
     * @type {string}
     * @memberof Repo
     */
    'id': string;
    /**
     * 
     * @type {object}
     * @memberof Repo
     */
    'data'?: object;
    /**
     * 
     * @type {string}
     * @memberof Repo
     */
    'url'?: string;
}

/**
 * QueryApi - axios parameter creator
 * @export
 */
export const QueryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryControllerList: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/query`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * QueryApi - functional programming interface
 * @export
 */
export const QueryApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = QueryApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async queryControllerList(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.queryControllerList(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * QueryApi - factory interface
 * @export
 */
export const QueryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = QueryApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryControllerList(options?: any): AxiosPromise<Array<string>> {
            return localVarFp.queryControllerList(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * QueryApi - object-oriented interface
 * @export
 * @class QueryApi
 * @extends {BaseAPI}
 */
export class QueryApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueryApi
     */
    public queryControllerList(options?: AxiosRequestConfig) {
        return QueryApiFp(this.configuration).queryControllerList(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * ReposApi - axios parameter creator
 * @export
 */
export const ReposApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} url 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        repoControllerBranches: async (url: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'url' is not null or undefined
            assertParamExists('repoControllerBranches', 'url', url)
            const localVarPath = `/repos/{url}/branches`
                .replace(`{${"url"}}`, encodeURIComponent(String(url)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        repoControllerList: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/repos`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {CreateRepoDto} createRepoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        repoControllerOpenDir: async (createRepoDto: CreateRepoDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createRepoDto' is not null or undefined
            assertParamExists('repoControllerOpenDir', 'createRepoDto', createRepoDto)
            const localVarPath = `/repos/open-dir`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createRepoDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} url 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        repoControllerOpenRepo: async (url: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'url' is not null or undefined
            assertParamExists('repoControllerOpenRepo', 'url', url)
            const localVarPath = `/repos/{url}/open-repo`
                .replace(`{${"url"}}`, encodeURIComponent(String(url)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {CreateRepoDto} createRepoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        repoControllerTrack: async (createRepoDto: CreateRepoDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createRepoDto' is not null or undefined
            assertParamExists('repoControllerTrack', 'createRepoDto', createRepoDto)
            const localVarPath = `/repos`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createRepoDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ReposApi - functional programming interface
 * @export
 */
export const ReposApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ReposApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} url 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async repoControllerBranches(url: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.repoControllerBranches(url, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async repoControllerList(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Repo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.repoControllerList(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {CreateRepoDto} createRepoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async repoControllerOpenDir(createRepoDto: CreateRepoDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.repoControllerOpenDir(createRepoDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} url 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async repoControllerOpenRepo(url: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.repoControllerOpenRepo(url, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {CreateRepoDto} createRepoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async repoControllerTrack(createRepoDto: CreateRepoDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.repoControllerTrack(createRepoDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ReposApi - factory interface
 * @export
 */
export const ReposApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ReposApiFp(configuration)
    return {
        /**
         * 
         * @param {string} url 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        repoControllerBranches(url: string, options?: any): AxiosPromise<object> {
            return localVarFp.repoControllerBranches(url, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        repoControllerList(options?: any): AxiosPromise<Array<Repo>> {
            return localVarFp.repoControllerList(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CreateRepoDto} createRepoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        repoControllerOpenDir(createRepoDto: CreateRepoDto, options?: any): AxiosPromise<object> {
            return localVarFp.repoControllerOpenDir(createRepoDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} url 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        repoControllerOpenRepo(url: string, options?: any): AxiosPromise<object> {
            return localVarFp.repoControllerOpenRepo(url, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CreateRepoDto} createRepoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        repoControllerTrack(createRepoDto: CreateRepoDto, options?: any): AxiosPromise<void> {
            return localVarFp.repoControllerTrack(createRepoDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ReposApi - object-oriented interface
 * @export
 * @class ReposApi
 * @extends {BaseAPI}
 */
export class ReposApi extends BaseAPI {
    /**
     * 
     * @param {string} url 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReposApi
     */
    public repoControllerBranches(url: string, options?: AxiosRequestConfig) {
        return ReposApiFp(this.configuration).repoControllerBranches(url, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReposApi
     */
    public repoControllerList(options?: AxiosRequestConfig) {
        return ReposApiFp(this.configuration).repoControllerList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CreateRepoDto} createRepoDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReposApi
     */
    public repoControllerOpenDir(createRepoDto: CreateRepoDto, options?: AxiosRequestConfig) {
        return ReposApiFp(this.configuration).repoControllerOpenDir(createRepoDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} url 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReposApi
     */
    public repoControllerOpenRepo(url: string, options?: AxiosRequestConfig) {
        return ReposApiFp(this.configuration).repoControllerOpenRepo(url, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CreateRepoDto} createRepoDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReposApi
     */
    public repoControllerTrack(createRepoDto: CreateRepoDto, options?: AxiosRequestConfig) {
        return ReposApiFp(this.configuration).repoControllerTrack(createRepoDto, options).then((request) => request(this.axios, this.basePath));
    }
}

