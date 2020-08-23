import React from 'react'
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
function group(props) {
  let defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  return (
    <div>
      <h2>Chúng tôi có 4 văn phòng. Với các thành viên tới từ 30 quốc gia và sử dụng hơn 30 ngôn ngữ.
      </h2>
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
      <h2>Chúng tôi quan tâm về bình đẳng giới tính.</h2>
    </div>
  )
}

export default group

