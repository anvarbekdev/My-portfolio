import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticlesBack = () => {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
	}, []);

	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			className="h-screen"
			options={{
				fullScreen: false,
				background: {
					// color: {
					// 	value: "#0d47a1",
					// },
				},
				fpsLimit: 60,
				interactivity: {
					events: {
						onClick: {
							enable: false,
							mode: "push",
						},
						onHover: {
							enable: true,
							mode: "repulse",

							distance: 400,
						},
						resize: true,
					},
					modes: {
						push: {
							quantity: 4,
						},
						repulse: {
							distance: 150,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: "#ffffff",
					},
					links: {
						color: "#ffffff",
						distance: 120,
						enable: true,
						opacity: 0.6,
						width: 1,
					},
					collisions: {
						enable: true,
					},
					move: {
						directions: "none",
						enable: true,
						outModes: {
							default: "bounce",
						},
						random: false,
						speed: 3,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 1200,
						},
						value: 80,
					},
					opacity: {
						value: 0.5,
					},
					shape: {
						type: "circle",
					},
					size: {
						value: { min: 1, max: 2 },
					},
				},
				detectRetina: true,
			}}
		/>
	);
};

export default ParticlesBack;
