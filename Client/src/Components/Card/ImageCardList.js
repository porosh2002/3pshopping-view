  import React, { PureComponent } from 'react'
  import ImageCard from "./ImageCard";
  import axios from "axios";
  import {URL} from '../../serverUrl'
  export default class ImageCardList extends PureComponent {
    componentDidMount() {
      axios.get(`${URL}api/image/info`).then(res=>{
        this.setState({ImagesArray:res.data})
      })
    }
    state={
      ImagesArray:[],
      SearchField:null
    }
    render() {
    const { ImagesArray } = this.state;
    const filteredImageInfo = ImagesArray.filter(data =>{
      return data.ImageName.toLowerCase().includes(this.props.SearchField.toLowerCase());
    })
    return (
      <div>
  {filteredImageInfo.map((data, i) => {
        return <ImageCard key={i} data={data} />;
  })}
      </div>
    )
  }
}
