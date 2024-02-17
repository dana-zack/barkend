import { useParams, Link } from 'react-router-dom';
import './DogDetails.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import xBtn from "../../images/x-lg.svg"
import hrtBtn from "../../images/bookmark-heart.svg"
import hrtBtnFill from "../../images/bookmark-heart-fill.svg"



function DogDetails({ dogs }) {
  // const { id } = useParams()

  let dog = dogs[1]
  let images = dog.photos.map(photo => photo.full)

  return (
    <div className="details-container">
      <aside className="image-carousel">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {images.map(image => (
            <SwiperSlide><img className='dog-img' src={image} alt="" /></SwiperSlide>
          ))}
        </Swiper>
      </aside>
      <main className="dog-details">
      <img className='x-btn' src={xBtn} alt="close button" />
      <img className='hrt-btn' src={hrtBtn} alt="close button" />
      <img className='hrt-btn-fill hidden' src={hrtBtnFill} alt="close button" />
        <div className="main-details-container">
          <h1 className='name'>Hi, I'm {dog.name}</h1>
          <p className='sub-details'>{dog.age} • {dog.gender} • {dog.breeds.primary}</p>
          <p className='sub-details'>Qualities: {dog.tags.join(', ')}</p>
        </div>
        <div className="inquire-container">
          <h3>Interested in {dog.name}?</h3>
          {dog.contact.email && <p className='sub-details'>email: {dog.contact.email}</p>}
          {dog.contact.phone && <p className='sub-details'>phone: {dog.contact.phone}</p>}
        </div>
      </main>
    </div>
  )
}

export default DogDetails