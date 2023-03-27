import React from "react";

const ImageList = ({ images }) => {
	return (
		<div>
			{images.map((location) => (
				<img src={location} alt="budgetMe images" />
			))}
		</div>
	);
};

export default ImageList;
