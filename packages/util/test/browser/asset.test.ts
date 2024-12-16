import { describe, expect, it } from 'vitest'
import { FAssetUtil } from '../../src'

describe('@fibbojs/util/FAssetUtil should', () => {
  it('interprete a given path', () => {
    expect(FAssetUtil.interpretPath('http://localhost:5173/custom/my-asset.png')).toEqual('http://localhost:5173/custom/my-asset.png')
    expect(FAssetUtil.interpretPath('/my-asset.png')).toEqual('http://localhost:5173/my-asset.png')
    expect(FAssetUtil.interpretPath('my-asset.png')).toEqual('http://localhost:5173/assets/my-asset.png')
  })
})
