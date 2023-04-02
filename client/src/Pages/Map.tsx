import React, { useState, useRef, useEffect } from 'react';

import MapModal, { MapFavModal } from '../Components/MapModal';
import MapList from '../Components/MapList';
import Nav from '../Components/Nav';

import styles from './styles/Map.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducer/index';

declare global {
  interface Window {
    kakao: any;
  }
}

interface Position {
  lat: string;
  lon: string;
}

interface Fav {
  lat: number;
  lon: number;
  name: string;
}

const Map = () => {
  const [showList, setShowList] = useState<boolean>(true); //리스트를 보여줄지 말지에 대한 변수
  const [showModal, setShowModal] = useState<boolean>(false); // 장소 추가를 위한 모달
  const [showFavModal, setShowFavModal] = useState<boolean>(false); // 즐겨찾기 장소 추가를 위한 모달

  const [myFav, setMyFav] = useState<Array<Fav>>([]); // 유저의 즐겨찾기 장소 배열
  const [mapName, setMapName] = useState<string>('default');

  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.userReducer.user);

  //지도 및 Fav 가져오기
  useEffect(() => {
    //지도생성
    const mapContainer = document.getElementById('mapContainer');
    let Position = new window.kakao.maps.LatLng(
      37.53367689999959,
      126.95917989999991
    );
    let options = { center: Position, level: 6 };
    let map = new window.kakao.maps.Map(mapContainer, options);

    //Fav 가져오기
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      setShowList(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', checkWindowSize);
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  //화면 사이즈 확인 함수
  const checkWindowSize: () => void = () => {
    if (window.innerWidth <= 1200) {
      if (showList !== true) {
        setShowList(false);
      }
    } else {
      setShowList(true);
    }
  };

  //Fav 가져오기 요청 함수
  const loadMyFav = () => {};

  return (
    <div id={styles.mapPage}>
      <Nav />
      <>{showModal ? <MapModal setShowModal={setShowModal} /> : ''}</>
      <>
        {showFavModal ? <MapFavModal setShowFavModal={setShowFavModal} /> : ''}
      </>
      <div className={styles.map_wrap}>
        <div id="mapContainer" style={{ width: '90vw', height: '75vh' }}></div>
        {showList ? <MapList setMapName={setMapName} /> : ''}
        {!showList ? (
          <button
            onClick={() => setShowList(true)}
            className={`${styles.mapListBtn} ${styles.search}`}
          >
            검색하기
          </button>
        ) : (
          <button
            onClick={() => setShowList(false)}
            className={`${styles.mapListBtn} ${styles.hide}`}
          >
            숨기기
          </button>
        )}
      </div>
    </div>
  );
};

export default Map;
