import React from "react";
import fondo from '../../img/fondo.jpg';




const Home = () => {
	return (
		<div className="text-center" style={{ 
			backgroundImage: `url(${fondo})`,
			backgroundSize: 'cover',
			height: '100vh'
		  }}>
			<h1 className="text-center">Hello </h1>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
