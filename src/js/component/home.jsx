import React from "react";
import fondo from '../../img/fondo.jpg';




const Home = () => {
	return (
		<div className="text-center" style={{
			backgroundImage: `url(${fondo})`,
			backgroundSize: 'cover',
			height: '100vh'
		}}>
			<h3 className="count text-center">-- countdown to -- </h3>
			<h1 className="new text-center">New Year</h1>

			<div class="container" id="contador">
				<div class="row">
					<div class="col">
						<h1>1</h1>
						<div>meses</div>
					</div>
					<div class="col">
						<h1>2</h1>
						<div>días</div>
					</div>
					<div class="col">
						<h1>1</h1>
						<div>horas</div>
					</div>
					<div class="col">
						<h1>1</h1>
						<div>minutos</div>
					</div>
					<div class="col">
						<h1>1</h1>
						<div>segundos</div>
					</div>
				</div>
			</div>


		</div>
	);
};

export default Home;
