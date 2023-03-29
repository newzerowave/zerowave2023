import React from 'react';

import axios from 'axios';

import styles from './styles/MapModal.module.css';

type MapModalProps = {
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
  setShowFavModal?: React.Dispatch<React.SetStateAction<boolean>>;
};

const MapModal = ({ setShowModal }: MapModalProps) => {
  /*     function addPlace(){
        const mapNameEl : HTMLInputElement = document.querySelector('input[name="radio"]:checked')!;
        const mapName : string = mapNameEl.value;
        // console.log(searchLon, searchLat, searchPlaceName, searchAddress, mapName);

        axios({ 
                method: "post", 
                url: "map/addPlaces",
                data: {
                    spot_name : searchPlaceName,
                    address : searchAddress,
                    lat : searchLat,
                    lon : searchLon,
                    selectedVal : mapName }
            }).then(function(res){
                if(res.data.check == true) { alert(res.data.msg);} 
                else { alert(res.data.msg);} 
                // var spotList = res.data; 
                // displayPlaces(spotList);
            });
        
            
        } */

  return (
    <div id={styles.addPlaceModal}>
      <section>
        <span id={styles.placeName}>잭슨피자</span>
        <form action="" id={styles.addPlaceModalForm}>
          <label htmlFor="zeroWasteMap">제로웨이스트</label>
          <input
            type="radio"
            name="radio"
            id="zeroWasteMap"
            value="zero"
            defaultChecked
          />
          <label htmlFor="ygnMap">용기내챌린지</label>
          <input type="radio" name="radio" value="ygn" id="ygnMap" />
        </form>
        <div id={styles.addPlaceModalBtns}>
          <button type="button" id="addPlaceBtn">
            추가
          </button>
          <button type="button" onClick={() => setShowModal!(false)}>
            닫기
          </button>
        </div>
      </section>
    </div>
  );
};

const MapFavModal = ({ setShowFavModal }: MapModalProps) => {
  return (
    <>
      <div id={styles.favForm} className="transparent">
        <form action="" name="favForm">
          <input type="text" name="" id={styles.memoInput} placeholder="메모" />
          <div id={styles.favFormBtns}>
            <button
              type="button"
              id="cancleFavBtn"
              onClick={() => setShowFavModal!(false)}
            >
              취소
            </button>
            <button type="button" id="addFavBtn">
              등록
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MapModal;
export { MapFavModal };
