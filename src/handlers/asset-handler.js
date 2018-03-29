export class AssetHandler {
  constructor(assetFiles) {
    this.assets = {};
    this.assets.all = [];
    this.assets.imageAssets = [];

    let filePath;
    let newAsset;
    for (var i = 0; i < assetFiles.imageResources.length; i++) {
      filePath = assetFiles.imageResources[i];
      newAsset = this.buildAsset(filePath, 'image', `img-ast-${i}`);
      this.assets.imageAssets.push(newAsset);
      this.assets.all.push(newAsset);
    }
    console.log('Assethandler created', this, assetFiles);
  }

  buildAsset(astResource, astType, astId) {
    return {
      id: astId,
      resource: astResource,
      type: astType,
    }
  }
}
