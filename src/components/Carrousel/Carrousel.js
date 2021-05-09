import Slider from 'react-slick'

import './Carrousel.sass'

const data = [
    {
        image: 'https://soe-sistema-cloud.s3-us-west-1.amazonaws.com/111.png',
        id: 1
    },
    {
        image: 'https://soe-sistema-cloud.s3-us-west-1.amazonaws.com/111.png',
        id: 2
    },
    {
        image: 'https://soe-sistema-cloud.s3-us-west-1.amazonaws.com/111.png',
        id: 4
    },
    {
        image: 'https://soe-sistema-cloud.s3-us-west-1.amazonaws.com/111.png',
        id: 5
    }
]

const Carrousel = () => {

    const settings = {
        className: "carrousel",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }

    return (
        <Slider {...settings}>
            {
                data.map(img => (
                    <img 
                        key={img.id}
                        src={img.image}
                        alt={img.id}
                    />
                ))
            }
        </Slider>
    )
}

export default Carrousel
