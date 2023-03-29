import React, { useState } from 'react';
import styles from './styles/MapList.module.css';

type MapListProps = {
  setMapName?: React.Dispatch<React.SetStateAction<string>>;
};

const MapList = ({ setMapName }: MapListProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <div id={styles.mapList} className="bg_white">
      <div className={styles.option}>
        <form id={styles.searchForm}>
          <input type="text" defaultValue="" id="keyword" />
          <button type="submit" id="search">
            검색
          </button>
        </form>
        <div
          className={styles.dropdown}
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
        >
          <button className="dropbtn" defaultValue="default">
            Map
          </button>
          {isHovering ? (
            <div className={styles.dropdownContent}>
              <button className="mapBtn" defaultValue="zero">
                제로웨이스트
              </button>
              <button className="mapBtn" defaultValue="ygn">
                용기내
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default MapList;
