export function About() {
	const benefits = [
		"Ahorrar tiempo y dinero en la gestión de tus ofertas laborales",
		"Atraer a los mejores candidatos para tus vacantes.",
		"Mejorar la experiencia del candidato y aumentar la tasa de retención.",
		"Tomar decisiones más acertadas basadas en datos reales.",
	];

	return (
		<section>
			<p className="my-5">
				¿Te gustaría tener un sistema que te permita publicar ofertas gestionar
				candidatos de manera eficiente y analizar sus resultados? ¡Entonces no
				te pierdas nuestro próximo webinar sobre Tech Talent Hub! En este
				webinar, te mostraremos cómo este innovador sistema puede ayudarte a:
			</p>

			<ul className="my-4 list-disc pl-6">
				{benefits.map((benefit, index) => {
					return (
						<li className="my-2 pl-1" key={index}>
							{benefit}
						</li>
					);
				})}
			</ul>

			<p className="my-5">
				Tech Talent Hub es la solución perfecta para empresas de todos los
				tamaños que buscan optimizar su proceso de reclutamiento.
			</p>
		</section>
	);
}
