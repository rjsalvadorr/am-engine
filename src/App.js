import React, { Component } from 'react';
import { Panel } from './components'
import './App.css';
import { NovelEvtHandler } from './handlers/event-handler';
import { AssetHandler } from './handlers/asset-handler';
import { PanelHandler } from './handlers/panel-handler';
import { assetFiles } from './config/assets'

class App extends Component {
  constructor() {
    super();
    this.assetHandler = new AssetHandler(assetFiles);
    this.assets = this.assetHandler.assets;
    this.panelHandler = new PanelHandler(this.assets);
    this.novelEvtHandler = new NovelEvtHandler();
    console.log('App component created', this);
  }

  componentDidMount() {
    console.log('component mounted!')
    window.onscroll = (evt) => {
      const scrollCoord = document.documentElement.scrollTop || document.body.scrollTop;
      this.panelHandler.checkPanelEvents(scrollCoord);
      // this.novelEvtHandler.checkEvents(scrollCoord);
    }
  }

  render() {
    const panels = this.panelHandler.panels.map((pnl) =>
      <div key={pnl.props.panelId}>{pnl}</div>
    );
    return (
      <div className="app">
        <div className="panels">
          {panels}
        </div>
      </div>
    );
  }
}

export default App;
