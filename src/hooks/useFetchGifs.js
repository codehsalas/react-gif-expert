import React, {useState, useEffect} from "react";
import { getGifts } from "../helpers/getGifs";



export const useFetchGifs = ( category ) => {

  const[images, setImages] = useState([]);
  const[isLoading, setIsLoading] = useState( true );

  const getImagesApi = async() => {
    const newImages = await getGifts(category);
      setImages(newImages)
      setIsLoading(false)
  }

  useEffect (() => {
    getImagesApi();
  },[])

  return {
    images,
    isLoading
  };
}
