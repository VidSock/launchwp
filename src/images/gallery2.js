import React from "react";

// import { photos } from "../../components/photos";


// import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images"






  
  const images = [{ src: '../../static/0a161b34bb6ef5ed84ae5a8a9cdfaf7e/5bc26/4B4A6344.jpg', src: '../../static/0b07bbdfa3dad2eb20abb0e5678bce32/5bc26/2010-04-30-dallas-168.jpg' }];
  
  
class Component extends React.Component {
  state = { modalIsOpen: false };
  toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
  };



class Component extends React.Component {
  state = { modalIsOpen: false };
  toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
  };
  render() {
    const { modalIsOpen } = this.state;

    return (
      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={this.toggleModal}>
            <Carousel views={images} />
          </Modal>
        ) : null}
      </ModalGateway>
    );
  }
}    

  
  
  

  
};

export default SingleCategory;
