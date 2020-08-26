import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
  move
} from "react-grid-dnd";
import "./styles.css";

function Gridhole() {
    const [items,setItems] = React.useState({
        bottom: [
            {id: 1,name: 'aatrox',picture_url:'www.theslap.com'},
            {id: 2,name: 'ashe',picture_url:'www.theslap.com'},
            {id: 3,name: 'annie',picture_url:'www.theslap.com'},
            {id: 4,name: 'anivia',picture_url:'www.theslap.com'},
        ]
    });
function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    if (targetId) {
      const result = move(
        items[sourceId],
        items[targetId],
        sourceIndex,
        targetIndex
      );
    return setItems({
        ...items,
        [sourceId]: result[0],
        [targetId]: result[1]
        });
    }

    const result = swap(items[sourceId], sourceIndex, targetIndex);
    return setItems({
        ...items,
        [sourceId]: result
    });
    }
    return (
    <GridContextProvider onChange={onChange}>
      <div className="container">
        <GridDropZone
          className="dropzone left"
          id="bottom"
          boxesPerRow={1}
          rowHeight={100}
        >
          {items.bottom.map(item => (
            <GridItem key={item.name}>
              <div className="grid-item">
                <div className="grid-item-content">
                  {item.name[0].toUpperCase()}
                </div>
              </div>
            </GridItem>
          ))}
        </GridDropZone>
        <GridDropZone
          className="dropzone right"
          id="right"
          boxesPerRow={4}
          rowHeight={70}
        >
          {items.right.map(item => (
            <GridItem key={item.name}>
              <div className="grid-item">
                <div className="grid-item-content">
                  {item.name[0].toUpperCase()}
                </div>
              </div>
            </GridItem>
          ))}
        </GridDropZone>
        <GridDropZone
          className="dropzone "
          id="right"
          boxesPerRow={4}
          rowHeight={70}
        >
          {items.right.map(item => (
            <GridItem key={item.name}>
              <div className="grid-item">
                <div className="grid-item-content">
                  {item.name[0].toUpperCase()}
                </div>
              </div>
            </GridItem>
          ))}
        </GridDropZone>
      </div>
    </GridContextProvider>
  );
}

export default Gridhole;