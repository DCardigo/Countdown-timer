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
			<div className="card" style={{width: "18rem"}}>
				<img src="..." className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" className="btn btn-primary">Go somewhere</a>
					</div>
			</div>
		</div>
	);
};

export default Home;
