export class NovelEvtHandler {
  // This may not be necessary?
  constructor(debugMode = false, panels) {
    this.debugMode = debugMode;
    this.panels = panels;
    this.novelEvents = [];
  }

  addEvent(evt) {
    this.novelEvents.push(evt);
  }

  checkActiveEvents(scrollCoord) {
    const evtList = []
    this.novelEvents.forEach(evt => {
      if(scrollCoord >= evt.startPoint) {
        evt.activate();
      }
    });
    return evtList;
  }

  checkInactiveEvents(scrollCoord) {
    const evtList = []
    this.novelEvents.forEach(evt => {
      if(scrollCoord > evt.endPoint) {
        evt.deactivate();
      }
    });
    return evtList;
  }

  checkEvents(scrollCoord) {
    console.log('Checking events...');
    this.checkActiveEvents(scrollCoord);
    this.checkInactiveEvents(scrollCoord);
  }
}
