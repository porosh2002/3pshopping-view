  import React, { PureComponent } from 'react'
  import ImageCard from "./ImageCard";
  import axios from "axios";
  import {URL} from '../../serverUrl'
  export default class ImageCardList extends PureComponent {
      componentDidUpdate() {
        if(this.state.SearchField !== this.props.SearchField && this.props.SearchField !== null){
          this.setState({SearchField:this.props.SearchField})
          axios.get(`${URL}api/images/${this.props.SearchField}`).then((res) => {
            this.setState({ ImagesArray: res.data });
            console.log(res.data);
          });
      }
      // if(this.state.SearchField !== this.props.SearchField && this.props.SearchField !== ''){
      //     axios.get(`${URL}api/images/${this.props.SearchField}`).then((res) => {
      //       this.setState({ ImagesArray: res.data });
      //       console.log(res.data)
      //       this.setState({SearchField:this.props.SearchField})
      //     });
      // }
  }
    state={
      ImagesArray:[],
      SearchField:null
    }
    render() {
    const { ImagesArray } = this.state;
    return (
      <div>
  {ImagesArray.map((data, i) => {
        return <ImageCard key={i} data={data} />;
  })}
      </div>
    )
  }
}
