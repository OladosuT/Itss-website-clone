import React from 'react'

const ImageSlide = () => {

    const NextArrow = ({ onClick }) => {
		return (
			<div onClick={onClick}>
				<FaArrowRight className="arrow next" />
			</div>
		)
	}

	const PrevArrow = ({ onClick }) => {
		return (
			<div onClick={onClick}>
				<FaArrowLeft className="arrow prev" />
			</div>
		)
	}

	const [ImageIndex, setImageIndex] = useState(0)

	const settings = {
		infinite: true,
		lazylaod: true,
		speed: 300,
		slidesToShow: 5,
		centerMode: true,
		centerPadding: 0,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		beforeChange: (current, next) => setImageIndex(next),
	}

  return (
    <div className="slider ">
						<Slider {...settings}>
							{Content.map((item, index) => (
								// <Card index={index} item={item} ImageIndex={ImageIndex} />
								<div
									className={
										index === ImageIndex ? "slide activeSlide show" : "slide"
									}
								>
									<img src={`./images/Home/${item.image}`} alt={item.title} />
									{index === ImageIndex && (
										<div className="show_body">
											<h2>{item.title}</h2>
											<h4>{item.body}</h4>
										</div>
									)}
								</div>
							))}
						</Slider>
					</div>
  )
}

export default ImageSlide