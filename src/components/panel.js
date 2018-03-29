import React from 'react';
import classNames from 'classnames';

import { PANEL_TYPES } from '../constants';
import './panel.css'

const triggerEvents = (scrollCoord, novelEvents) => {
  const panelTop = 1000000; // TODO - get actual panel top
  novelEvents.forEach(evt => {
    if(scrollCoord >= panelTop) {
      evt.activate();
    }
  });
}

export const Panel = ({
  panelId,
  className,
  children,
  type = PANEL_TYPES.IMAGE,
  asset = null,
  zIndexDiff = 0,
  parallaxCoeff = 0,
  transparency = 100,
  subPanels = [],
  events = [],
  triggerEvents = triggerEvents,
}) => {
  if(!asset) {
    return null;
  }

  const subClass = `panel--${type}`;
  const classes = classNames(
    'panel',
    className,
    subClass,
  );
  
  let panelContents;
  switch (type) {
    case PANEL_TYPES.IMAGE:
    panelContents = <img alt={`${panelId}-contents`} src={asset}/>
  }

  return (
    <div className={classes}>
      {panelContents}
      <div className='panel-children'>
        {children}
      </div>
    </div>
  );
}
