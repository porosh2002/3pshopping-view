import React, { Component } from "react";
import ImageCard from "./ImageCard";
import axios from "axios";
import {URL} from '../../serverUrl'
export default class ImageCardList extends Component {
  state = {
    ImagesArray: [],
  };
  componentDidMount() {
    axios.get(`${URL}api/images`).then((res) => {
      this.setState({ ImagesArray: res.data });
    });
  }
  render() {
    const { ImagesArray } = this.state;
    return (
      <div>
        {ImagesArray.map((data, i) => {
          return <ImageCard key={i} data={data} />;
        })}
      </div>
    );
  }
}
