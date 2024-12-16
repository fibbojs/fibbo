/**
 * A class that provides asset management utilities.
 * @category Core
 */
export class FAssetUtil {
  // Config
  /**
   * The path to the assets directory.
   * @default 'assets'
   */
  static __ASSETS_PATH__ = 'assets'

  /**
   * Smartly interpret a path to an asset.
   * - URL paths are returned as is.
   * - Absolute paths are interpreted as relative to the origin.
   * - Relative paths are interpreted as relative to the assets folder.
   * This method uses the current window location to determine the origin, so it should only be used in a browser environment.
   * @param path The path to interpret.
   * @returns The interpreted path.
   */
  static interpretPath(path: string) {
    // Resource URL (if it starts http, treat as a URL)
    if (path.startsWith('http')) {
      return path
    }
    // Absolute path (if it starts with /), add the current domain + path
    else if (path.startsWith('/')) {
      return `${window.location.origin}${path}`
    }
    // Otherwise, treat as a relative path starting to the assets folder
    else {
      return `${window.location.origin}/${FAssetUtil.__ASSETS_PATH__}/${path}`
    }
  }
}
