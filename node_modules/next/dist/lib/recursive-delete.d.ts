/**
 * Recursively delete directory contents
 * @param  {string} dir Directory to delete the contents of
 * @param  {RegExp} [filter] Filter for the relative file path
 * @param  {boolean} [ensure] Ensures that parameter dir exists, this is not passed recursively
 * @param  {string} [previousPath] Ensures that parameter dir exists, this is not passed recursively
 * @returns Promise void
 */
export declare function recursiveDelete(dir: string, filter?: RegExp, previousPath?: string, ensure?: boolean): Promise<void>;
