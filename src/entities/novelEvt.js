export const NOVEL_EVT_TYPES = {
  ANIMATION: 'animation',
  MUSIC: 'music',
}

export class NovelEvt {
  constructor() {
    this.id = 0;
    this.type = 'thing';
    this.asset = {};
    this.active = false;
    this.startPoint = 0;
    this.endPoint = 0;
  }

  activate() {
    if(!this.active) {
      if(this.debugMode) { console.log('Activating event', this); }
      this.active = true;
      // do thing with asset
    }
  }
  
  deactivate() {
    if(this.active) {
      this.active = false;
    }
  }
}
