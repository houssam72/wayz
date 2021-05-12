import React from 'react';
import {  withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';
import { Descriptions } from 'antd';
import car2 from './car2.png';
import man from './man.png';
 
Geocode.setApiKey("AIzaSyB6Up16Hpna6lEpVn0JQmkKI9ny0ulJNYg");
Geocode.enableDebug();

class LocationSearchModal extends React.Component {
  

    state = {
       isOpen: false,
       indexOpen:-1,
        address: '',
        city: '',
        area: '',
        state: '',
        zoom: 15,
        height: 400,
        mapPosition: {
            lat: 0,
            lng: 0,
        },
        markerPosition: {
            lat: 0,
            lng: 0,
        }
    }


    componentDidMount() {
        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    mapPosition: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    },
                    markerPosition: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    }
                },
                    () => {
                        Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
                            response => {
                                console.log(response)
                                const address = response.results[0].formatted_address,
                                    addressArray = response.results[0].address_components,
                                    city = this.getCity(addressArray),
                                    area = this.getArea(addressArray),
                                    state = this.getState(addressArray);
                                console.log('city', city, area, state);
                                this.setState({
                                    address: (address) ? address : '',
                                    area: (area) ? area : '',
                                    city: (city) ? city : '',
                                    state: (state) ? state : '',
                                })
                            },
                            error => {
                                console.error(error);
                            }
                        );

                    })
            });
        } else {
            console.error("Geolocation is not supported by this browser!");
        }
    };

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if (
    //         this.state.markerPosition.lat !== this.state.center.lat ||
    //         this.state.address !== nextState.address ||
    //         this.state.city !== nextState.city ||
    //         this.state.area !== nextState.area ||
    //         this.state.state !== nextState.state
    //     ) {
    //         return true
    //     } else if (this.state.mapPosition.lat === nextState.mapPosition.lat) {
    //         return false
    //     }
    // }

    handleToggleOpen = (index) => {
    this.setState({
      isOpen: true,
      indexOpen:index
    });
  };

  handleToggleClose = () => {
    this.setState({
      isOpen: false,
    });
  };


    getCity = (addressArray) => {
        let city = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
                city = addressArray[i].long_name;
                return city;
            }
        }
    };

    getArea = (addressArray) => {
        let area = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0]) {
                for (let j = 0; j < addressArray[i].types.length; j++) {
                    if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
                        area = addressArray[i].long_name;
                        return area;
                    }
                }
            }
        }
    };

    getState = (addressArray) => {
        let state = '';
        for (let i = 0; i < addressArray.length; i++) {
            for (let i = 0; i < addressArray.length; i++) {
                if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
                    state = addressArray[i].long_name;
                    return state;
                }
            }
        }
    };

    
   

    onMarkerDragEnd = (event) => {
        let newLat = event.latLng.lat(),
            newLng = event.latLng.lng();

        Geocode.fromLatLng(newLat, newLng).then(
            response => {
                const address = response.results[0].formatted_address,
                    addressArray = response.results[0].address_components,
                    city = this.getCity(addressArray),
                    area = this.getArea(addressArray),
                    state = this.getState(addressArray);
                this.setState({
                    address: (address) ? address : '',
                    area: (area) ? area : '',
                    city: (city) ? city : '',
                    state: (state) ? state : '',
                    markerPosition: {
                        lat: newLat,
                        lng: newLng
                    },
                    mapPosition: {
                        lat: newLat,
                        lng: newLng
                    },
                })
            },
            error => {
                console.error(error);
            }
        );
    };

    onPlaceSelected = (place) => {
        console.log('plc', place);
        const address = place.formatted_address,
            addressArray = place.address_components,
            city = this.getCity(addressArray),
            area = this.getArea(addressArray),
            state = this.getState(addressArray),
            latValue = place.geometry.location.lat(),
            lngValue = place.geometry.location.lng();

        console.log('latvalue', latValue)
        console.log('lngValue', lngValue)

        // Set these values in the state.
        this.setState({
            address: (address) ? address : '',
            area: (area) ? area : '',
            city: (city) ? city : '',
            state: (state) ? state : '',
            markerPosition: {
                lat: latValue,
                lng: lngValue
            },
            mapPosition: {
                lat: latValue,
                lng: lngValue
            },
        })
    };

    // const AsyncMap = compose(
    //     withProps({
    //         googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyALVjLwOIM1gf7EzdJJVmWLKdLP-yZGTcw&v=3.exp&libraries=geometry,drawing,places",
    //         loadingElement: <div style={{ height: `100%` }} />,
    //         containerElement: <div style={{ height: `400px` }} />,
    //         mapElement: <div style={{ height: `100%` }} />,
    //     }),
    //     withScriptjs,
    //     withGoogleMap
    // )((props) =>
    //     <GoogleMap

    render() {
   
        const AsyncMap = withScriptjs(
            withGoogleMap(
                props => (
                    <GoogleMap
                        defaultZoom={this.state.zoom}
                        defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
                    >
                        {/* InfoWindow on top of marker */}

                        {/*Marker*/}
                        <Marker
                            key={0}
                            google={this.props.google}
                            name={'Dolores park'}
                            draggable={true}
                            onDragEnd={this.onMarkerDragEnd}
                            position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
                            
                             icon={{

                                  url: man,
                                  scaledSize : new window.google.maps.Size(25,25 ),

    }}

        
                            
                         onClick={() => this.handleToggleOpen(0)}

        
                            
                        >
                       {this.state.isOpen && 0===this.state.indexOpen &&( 
                        <InfoWindow
                            
                        >
                         
                            <div>
                                <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                            </div>
                        </InfoWindow>)}
                    </Marker>
                       

                         <Marker
                             key={1}
                            google={this.props.google}
                            name={'Dolores park'}
                            position={{ lat: 33.5846, lng: -7.5911 }}
                            
                             icon={{

                              url: car2,
                              scaledSize : new window.google.maps.Size(50,50 ),

    }}

        
                            
                         onClick={() => this.handleToggleOpen(1)}

        
                            
                        >
                       {this.state.isOpen && 1===this.state.indexOpen && ( <InfoWindow
                            
                        >
                         
                            <div>
                                <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                            </div>
                        </InfoWindow>)}
                    </Marker>
                        
                        <Marker
                             key={2}
                            google={this.props.google}
                            name={'Dolores park'}
                            position={{ lat: 33.5688, lng: -7.5877 }}
                            
                             icon={{

                               url: car2,
                               scaledSize : new window.google.maps.Size(50,50 ),

    }}

        
                            
                         onClick={() => this.handleToggleOpen(2)}

        
                            
                        >
                       {this.state.isOpen && 2===this.state.indexOpen && ( <InfoWindow
                            
                        >
                         
                            <div>
                                <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                            </div>
                        </InfoWindow>)}
                    </Marker>
                        <Marker />
                        <Marker
                             key={3}
                            google={this.props.google}
                            name={'Dolores park'}
                            position={{ lat: 33.5795, lng: -7.5829 }}
                            
                             icon={{

                             url: car2,
                             scaledSize : new window.google.maps.Size(50,50 ),

    }}

        
                            
                         onClick={() => this.handleToggleOpen(3)}

        
                            
                        >
                       {this.state.isOpen && 3===this.state.indexOpen && ( <InfoWindow
                            
                        >
                         
                            <div>
                                <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                            </div>
                        </InfoWindow>)}
                    </Marker>
                        
                         <Marker
                            key={4}
                            google={this.props.google}
                            name={'Dolores park'}
                            position={{ lat: 33.5739472, lng: -7.594480099999999}}
                            
                             icon={{

                                 url: car2,
                                 scaledSize : new window.google.maps.Size(50,50 ),

                              }}
                              onClick={() => this.handleToggleOpen(4)}

        
                            
                        >
                       {this.state.isOpen && 4===this.state.indexOpen &&( <InfoWindow
                            
                        >
                         
                            <div>
                                <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                            </div>
                        </InfoWindow>)}
                    </Marker>
                        <Marker />

                        {/* <MarkerWithLabel
                            position={{ lat: -34.397, lng: 150.644 }}
                            labelAnchor={new google.maps.Point(0, 0)}
                            labelStyle={{ backgroundColor: "yellow", fontSize: "32px", padding: "16px" }}
                        >
                            <div>Hello There!</div>
                        </MarkerWithLabel> */}


                        {/* For Auto complete Search Box */}
                        <Autocomplete
                            style={{
                                width: '100%',
                                height: '40px',
                                paddingLeft: '16px',
                                marginTop: '2px',
                                marginBottom: '2rem'
                            }}
                            onPlaceSelected={this.onPlaceSelected}
                            types={['(regions)']}
                        />
                    </GoogleMap>
                )
            )
        );

        return (
            <div style={{ padding: '1rem', margin: '0 auto', maxWidth: 1000 }}>
                <h1>Google Map Basic</h1>
                <Descriptions bordered>
                    <Descriptions.Item label="City">{this.state.city}</Descriptions.Item>
                    <Descriptions.Item label="Area">{this.state.area}</Descriptions.Item>
                    <Descriptions.Item label="State">{this.state.state}</Descriptions.Item>
                    <Descriptions.Item label="Address">{this.state.address}</Descriptions.Item>
                </Descriptions>

                <AsyncMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB6Up16Hpna6lEpVn0JQmkKI9ny0ulJNYg&libraries=places"
                    loadingElement={
                        <div style={{ height: `100%` }} />
                    }
                    containerElement={
                        <div style={{ height: this.state.height }} />
                    }
                    mapElement={
                        <div style={{ height: `100%` }} />
                    }
                />
            </div>
        )
    }

}

export default LocationSearchModal;




































/*import React, { Component } from "react";
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import Geocode from "react-geocode";
import { Descriptions} from 'antd';
import 'antd/dist/antd.css';
import AutoComplete from 'react-google-autocomplete'

Geocode.setApiKey("AIzaSyB6Up16Hpna6lEpVn0JQmkKI9ny0ulJNYg");

class Map extends Component {


  constructor(){
  super();
   this.state={
   address:"",
   city:"",
   area:"",
   state:"",
   zoom:15,
   height:400,
   mapPosition:{
    lat:0,
    lng:0,
   },
   markerPosition:{
    lat:0,
    lng:0,
   }



  }  }  

 componentDidMount(){



   if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(position =>{
    console.log('position',position)
      this.setState({
         mapPosition:{
             lat:position.coords.latitude,
             lng:position.coords.longitude,
          },
         markerPosition:{
             lat:position.coords.latitude,
             lng:position.coords.longitude,
         }
      },()=>{
        Geocode.fromLatLng(position.coords.latitude,position.coords.longitude)
  .then(response=>{
    console.log('response',response);

    const address=response.results[0].formatted_address,
          addressArray=response.results[0].address_components,
          city=this.getCity(addressArray),
          area=this.getArea(addressArray),
          state=this.getState(addressArray);

          this.setState({
           address:(address) ? address :"",
            area:(area) ? area :"",
            city:(city) ? city :"",
            state:(state) ? state :"",
                
          })
  })
      })
  })

   }
 }

 getCity=(addressArray)=>{
  let city=''
  for(let i=0;i<addressArray.length;i++){
     if(addressArray[i].types[0] && 'administrative_area_level_2'===addressArray[i].types[0]){
      city=addressArray[i].long_name;
      return city;
     }

  }
 

 }

 getArea=(addressArray)=>{
  let area=''
  for(let i=0;i<addressArray.length;i++){
     if(addressArray[i].types[0]){
        for(let j=0;j<addressArray.length;j++){
     if('sublocality_level_1'===addressArray[i].types[j] || 'locality'===addressArray[i].types[j] )
           area=addressArray[i].long_name;
         return area;
        }

      
    
     }

  }


 }


  getState=(addressArray)=>{
  let state=''
  for(let i=0;i<addressArray.length;i++){
  for(let i=0;i<addressArray.length;i++){
    if(addressArray[i].types[0] && 'administrative_area_level_1'===addressArray[i].types[0]){
      state=addressArray[i].long_name;
      return state

    }
  }   

     
     }

  }





 onMarkerDragEnd=(event)=>{

  let newLat=event.latLng.lat();
  let newLng=event.latLng.lng();

  console.log('new lat',newLat,'newLng',newLng);

  Geocode.fromLatLng(newLat,newLng)
  .then(response=>{
    console.log('response',response);

    const address=response.results[0].formatted_address,
          addressArray=response.results[0].address_components,
          city=this.getCity(addressArray),
          area=this.getArea(addressArray),
          state=this.getState(addressArray);

          this.setState({
           address:(address) ? address :"",
            area:(area) ? area :"",
            city:(city) ? city :"",
            state:(state) ? state :"",
            mapPosition:{
              lat:newLat,
              lng:newLng
            },
            markerPosition:{
              lat:newLat,
              lng:newLng
            }      
          })
  })

  }


   onPlaceSelected=(place)=>{
     const address=place.formatted_address,
          addressArray=place.address_components,
          city=this.getCity(addressArray),
          area=this.getArea(addressArray),
          state=this.getState(addressArray),
          newLat=place.geometry.location.lat(),
          newLng=place.geometry.location.lng();

          this.setState({
           address:(address) ? address :"",
            area:(area) ? area :"",
            city:(city) ? city :"",
            state:(state) ? state :"",
            mapPosition:{
              lat:newLat,
              lng:newLng
            },
            markerPosition:{
              lat:newLat,
              lng:newLng
            }      
          })
  }

  render(){




 
 

  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
  >
    <Marker
      draggable={true}
      onDragEnd={this.onMarkerDragEnd}
      position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
    >
<InfoWindow>
  <p> Hello </p>

</InfoWindow>


    </Marker>

    <AutoComplete
    style={{width:"100%",height:'40px' ,paddingLeft:16,marginTop:2,marginBottom:'2rem'}}
    types={ ["(regions)"]}
     onPlaceSelected={this.onPlaceSelected}
    />

  </GoogleMap>
));

  return (
    <div>

 <Descriptions title="User Info" bordered>
    <Descriptions.Item label="City">{this.state.city}</Descriptions.Item>
    <Descriptions.Item label="Area">{this.state.area}</Descriptions.Item>
    <Descriptions.Item label="State">{this.state.state}</Descriptions.Item>
    <Descriptions.Item label="Address">{this.state.address}</Descriptions.Item>
    
   
  </Descriptions>,

  <MapWithAMarker
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB6Up16Hpna6lEpVn0JQmkKI9ny0ulJNYg&v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
    </div>
  
  );
}
}

export default Map;*/