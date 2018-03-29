import React from 'react';
import { Panel } from '../components/panel';

export class PanelHandler {
  constructor(assets) {
    this.panels = [];

    for(var i = 0; i < assets.imageAssets.length; i++) {
      const currentAsset = assets.imageAssets[i];
      const filename = currentAsset.resource.split('/').pop();
      this.panels.push(
        <Panel
        panelId={filename}
        className={`panel-${currentAsset.type}`}
        asset={currentAsset.resource}
        />
      );
    }
    console.log('PanelHandler initialized!', this);
  }

  checkPanelEvents(scrollCoord) {
    // Check each panel, see if this scrollCoord triggers any of their events!
    console.log(`Checking panel events. scrollCoord = ${scrollCoord}`);
    this.panels.forEach(currentPanel => {
      console.log('Checking event for panel ', currentPanel);
      currentPanel.triggerEvents();
    });
  }
}
