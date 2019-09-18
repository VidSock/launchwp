import React, { useState, useCallback } from "react";
import LayoutFull from '../components/LayoutFull';
import { Helmet } from "react-helmet";
// import { photos } from "../../components/photos";


import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images"

const SingleCategory = props => {



const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);


  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  
  
  
  





  const photos = [
	{src: '../../static/0a161b34bb6ef5ed84ae5a8a9cdfaf7e/5bc26/4B4A6344.jpg', width:3, height:2},
    {src: '../../static/0b07bbdfa3dad2eb20abb0e5678bce32/5bc26/2010-04-30-dallas-168.jpg', width:3, height:2},
    {src: '../../static/ceeb5c5c582be94d827b9f07466f4f48/c0f8b/how-i-see-daylight.jpg', width:2, height:3},
    {src: '../../static/09d2d473b1399678bc39269c6f6a1e26/5bc26/after-the-storm.jpg', width:3, height:2},
    {src: '../../static/a38d8d8f1ddca558d8b38a408e8b6fa6/5bc26/DSC03138.jpg', width:3, height:2},
    {src: '../../static/5679c188bc80d34daab7f8c01e62ef03/3d25e/2011-01-02-untitled-6111.jpg', width:3, height:2},
    {src: '../../static/e041b09e55c3dfdc5503fcce6717f46b/5bc26/2011-05-28-untitled-6240.jpg', width:3, height:2},
    {src: '../../static/d2ccbe5a3fc4d21524c9598bea8d87f6/5bc26/4B4A6911.jpg', width:3, height:2},
    {src: '../../static/09545d45e7b01f81bb117292895af445/5bc26/2013-03-16-untitled-51522.jpg', width:3, height:2},
    {src: '../../static/fc7afe1f39ea2d8b3041973e47d14b5c/5bc26/2012-10-08-utah-fall-2012-49173-Version-2.jpg', width:3, height:2},
    {src: '../../static/0ea1caacf954a32390c9a313994e9abf/5bc26/4B4A6896.jpg', width:3, height:2},
    {src: '../../static/3437b9e4ab118fbe1818002707125181/5bc26/2010-10-22-dallas-4379.jpg', width:3, height:2},
    {src: '../../static/91200ddf1936edd4fe0e39110bb9a1b3/5bc26/IMG_0490.jpg', width:3, height:2},
    {src: '../../static/f7186d79203692f25e01357a52af9488/5bc26/IMG_3738.jpg', width:3, height:2},
    {src: '../../static/6a0769beca9fcb27e105beaa38e338db/5bc26/2012-05-26-kansas-47559.jpg', width:3, height:2},
    {src: '../../static/c1ce1503fedb93bef08f28927a89927c/5bc26/2011-05-30-untitled-7169.jpg', width:3, height:2},
    {src: '../../static/bd91fa59edb856b7b366914a8c37ebee/5bc26/2013-02-16-untitled-50848.jpg', width:3, height:2},
    {src: '../../static/a2fd22b012404f657b224546cd6c81af/5bc26/2010-12-26-cisco-5769.jpg', width:3, height:2},
    {src: '../../static/52410d269fe97752d18346e9dd0dd38a/5bc26/IMG_1842.jpg', width:3, height:2},
    {src: '../../static/2e40272c61de5e0550b10b41179992ce/5bc26/come-in-pieces.jpg', width:3, height:2},
    
    
    
    
    
    
    
    
    
    
/*
    {src: '../../static/', width:3, height:2},
   
*/
   
   
  ];
  
  
  

  return (
	  
    <LayoutFull>
    
      <Helmet>
          <meta charSet="utf-8" />
          <title>Gallery 1 | Urban Fetish - Abandoned Urbex Urban Exploration Photos and Locations</title>
	  </Helmet>
        
      <h1>Gallery 1</h1>
  
    <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    
 
      

      
    </LayoutFull>
  );
};

export default SingleCategory;
