import React, { useState, useEffect } from "react";
import fondo from '../../img/fondo.jpg';


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
			backgroundImage: `url(${fondo})`,
			backgroundSize: 'cover',
			height: '100vh'
		}}>
			<h3 className="count text-center">-- countdown to -- </h3>
			<h1 className="new text-center">New Year</h1>

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
