import { Map, MapMarker, ZoomControl } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";

export default function Home() {
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const center = { lat: 37.5665, lng: 126.978 };
  const category = [
    "한식",
    " 중식",
    " 일식",
    "양식",
    "분석",
    "구이",
    "회/초밥",
    "기타",
  ];
  useEffect(() => {
    if (!map) return;

    const handleResize = () => {
      map.relayout();
      map.setCenter(new kakao.maps.LatLng(center.lat, center.lng));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [map]);
  return (
    <div className="mx-5 mt-5 ">
      <div className="flex justify-between">
        <h3 className="text-md font-bold">맛집지도</h3>
        <h3 className="font-light">contact</h3>
      </div>
      <div className="pt-5">
        <h2 className="text-xl font-bold mb-3">
          맛집지도 카테고리를 선택해보세요
        </h2>
        <div className="grid grid-cols-4 justify-between">
          {category.map((item, val) => (
            <button className="rounded-sm py-2 hover:text-[#e69a06] ">
              {item}
            </button>
          ))}
        </div>
        <div className="w-full h-[450px] rounded mt-5">
          <Map
            center={{ lat: 37.5665, lng: 126.978 }}
            style={{ width: "100%", height: "100%" }}
            level={8}
            zoomable={true}
            onCreate={setMap}
          >
            <ZoomControl position={"TOPRIGHT"} />
            <MapMarker position={{ lat: 37.5665, lng: 126.978 }} />
          </Map>
        </div>
      </div>
    </div>
  );
}
