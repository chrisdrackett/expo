import './Asset.fx';
import * as AssetSources from './AssetSources';
declare type AssetDescriptor = {
    name: string;
    type: string;
    hash?: string | null;
    uri: string;
    width?: number | null;
    height?: number | null;
};
declare type DownloadPromiseCallbacks = {
    resolve: () => void;
    reject: (error: Error) => void;
};
export declare type AssetMetadata = AssetSources.AssetMetadata;
export declare class Asset {
    static byHash: {};
    static byUri: {};
    name: string;
    type: string;
    hash: string | null;
    uri: string;
    localUri: string | null;
    width: number | null;
    height: number | null;
    downloading: boolean;
    downloaded: boolean;
    _downloadCallbacks: DownloadPromiseCallbacks[];
    constructor({ name, type, hash, uri, width, height }: AssetDescriptor);
    static loadAsync(moduleId: number | number[]): Promise<void[]>;
    static fromModule(virtualAssetModule: number | string): Asset;
    static fromMetadata(meta: AssetMetadata): Asset;
    static fromURI(uri: string): Asset;
    _downloadAsyncWeb(): Promise<void>;
    _downloadAsyncManagedEnv(): Promise<void>;
    _downloadAsyncUnmanagedEnv(): Promise<void>;
    downloadAsync(): Promise<void>;
}
export {};
