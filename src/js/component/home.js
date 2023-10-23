import React, { useState, useEffect } from "react";
import fondo1 from '../../img/fondo.jpg';
import fondo2 from '../../img/pexels-inga-seliverstova-3394222.jpg';
import fondo3 from '../../img/pexels-inga-seliverstova-3394288.jpg';
import fondo4 from '../../img/pexels-rakicevic-nenad-769525.jpg';


const Home = () => {
	const [tiempoTotal, setTiempoTotal] = useState(0);

	const nocheVieja = new Date(2023, 11, 31, 23, 59, 59);
	const ahora = new Date();
	const diferenciaEnSegundos = Math.floor((nocheVieja - ahora) / 1000);

	const Segundos = tiempoTotal % 60;
	const Minutos = Math.floor((tiempoTotal / 60) % 60);
	const Horas = Math.floor((tiempoTotal / 3600) % 24);
	const Dias = Math.floor(tiempoTotal / 86400);
	const Meses = Math.floor(tiempoTotal / 2629743);

	useEffect(() => {
		setTiempoTotal(diferenciaEnSegundos)
		const interval = setInterval(() => {
			setTiempoTotal(prevTiempoTotal => prevTiempoTotal - 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);



	return (
		<div className="text-center" style={{
			backgroundImage: `url(${fondo4})`,
			backgroundSize: 'cover',
			height: '100vh',
			width: '100vw'
			// backgroundImage::before
		}}>
			<div id="fondo"></div>

			<h3 className="count text-center">-- cuenta atrás para -- </h3>
			<h1 className="new text-center">Año Nuevo</h1>

			<div className="container" id="contador">
				<div className="row">
					<div className="col">
						<h2>{Meses}</h2>
						<div>meses</div>
					</div>
					<div className="col">
						<h2>{Dias}</h2>
						<div>días</div>
					</div>
					<div className="col">
						<h2>{Horas}</h2>
						<div>horas</div>
					</div>
					<div className="col">
						<h2>{Minutos}</h2>
						<div>minutos</div>
					</div>
					<div className="col">
						<h2>{Segundos}</h2>
						<div>segundos</div>
					</div>
				</div>
			</div>


		</div>
	);
};

export default Home;
