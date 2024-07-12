export const topics: Array<{
    id: string,
	title: string;
	description: string;
	content: string;
}> = [
	{
        id: "01",
		title: "01. Introducción al desarrollo web",
		description: "Documentación del proyecto",
		content: `**Requerimientos**:  
					Desarrollar una plataforma web que facilite la contratación de personal informático poniendo en contacto a candidatos cualificados con posibles empleadores.  
				**Objetivos:**  
					- Reducir el tiempo y el coste de la contratación especificando los pasos necesarios para encontrar candidatos adecuados.  
					- Aumentar los índices generales de éxito en la contratación proporcionando a las organizaciones búsquedas avanzadas basadas en sus necesidades.  
					- Mejorar la experiencia del candidato proporcionando una plataforma fácil de usar con oportunidades de empleo relevantes y sugerencias.  
				**Público objetivo:**  
					- Reclutadores y responsables de contratación para una empresa en particular.  
					- Profesionales y graduados en campos relacionados con IT buscando oportunidades de empleo.  
				**Requisitos funcionales**  
					Por candidato:  
					- Registro de una cuenta por correo electrónico.  
					- Gestión del perfil.  
					- Busqueda de empleos disponibles.  
					- Presentar solicitudes de empleo.  
					- Panel general para observar el estado de las candidaturas.
					- Notificaciones basadas en las preferencias del usuario.  
					Por empleador:  
					- Publicación de ofertas de empleo.  
					- Herramienttas de gestión de ofertas de empleo.  
					- Busqueda y filtrado de candidatos.  
					- Seguimiento de candidatos  
					Generales:  
					- Interfaz intuitiva
					- Sección dedicada con artículos, consejos y recursos relevantes para la industria de TI  
				**Requisitos no funcionales**  
					- Garantizar la seguridad de la información.  
					- Sistema escalable.  
					- Ofrecer tiempos de carga optimizados.  
					- Accesible para usuarios con discapacidad.  
		`,
	},
	{
        id: "02",
		title: "02. Diseño UI/UX y Accesibilidad para la Web Moderna",
		description: "Principios y prácticas clave del diseño de interfaces de usuario",
		content: `**Prototipo de la web**  
				El prototipo de la web ha sido meticulosamente diseñado en Figma, un potente herramienta de diseño de interfaces, para ofrecer una experiencia de usuario fluida y atractiva en el sistema de reclutamiento IT. A continuación, se detallan las vistas clave que componen este prototipo:  
				- Landing Page:  
					Diseñada para captar la atención de los visitantes de inmediato. Presenta una interfaz limpia y moderna, con un mensaje claro y llamadas a la acción prominentes que invitan a los usuarios a registrarse o explorar las ofertas de trabajo disponibles.  
				- Perfil de usuario:  
					Permite a los usuarios registrados gestionar su información personal y profesional de manera eficiente. Los usuarios pueden editar su perfil, subir su currículum, listar sus habilidades y experiencia, y personalizar sus preferencias de notificación para estar al tanto de las oportunidades laborales más relevantes.  
				- Sección de ofertas de empleos:  
					Tanto candidatos como empleadores pueden acceder a una amplia gama de ofertas de trabajo en el sector IT. Los candidatos pueden buscar empleos por categoría, ubicación, tipo de contrato, y otros filtros avanzados, mientras que los empleadores pueden publicar nuevas ofertas y gestionar las aplicaciones recibidas.  
				- Sección de candidatos:  
					Diseñada específicamente para empleadores, esta sección les permite revisar perfiles de candidatos, filtrar por habilidades y experiencia, y ponerse en contacto directamente con aquellos que cumplan con los requisitos de sus ofertas de trabajo.  
				- Sección de notificaciones:  
					Mantiene a los usuarios informados sobre las actividades relevantes en su cuenta, como actualizaciones en sus aplicaciones de trabajo, mensajes de empleadores, y noticias sobre la plataforma. Las notificaciones son personalizables para asegurar que los usuarios reciban solo la información que les interesa.  
				- Sección de artículos:  
					Ofrece contenido valioso y actualizado sobre temas relacionados con la industria IT, incluyendo consejos para mejorar el currículum, tendencias tecnológicas, y entrevistas con profesionales destacados. Esta sección no solo es educativa sino también una herramienta para mejorar la visibilidad de la plataforma.  
		`,
	},
	{
        id: "03",
		title: "03. Despliegue, Colaboración y Mantenimiento de Proyectos Web",
		description: "Capacitación en el uso de plataformas gratuitas para el despliegue de proyectos web",
		content: `**Despliegue del proyecto en Railway**  
					Después de una cuidadosa evaluación de las opciones disponibles, se decidió utilizar Railway para el despliegue de la aplicación web Tech Talent Hub. Esta decisión se basó en las características y la facilidad de uso que ofrece Railway, lo cual ha resultado ser una elección acertada para nuestro flujo de trabajo y necesidades de mantenimiento.  
					- Se configuró la integración continua para que cada push a nuestro repositorio en GitHub desencadenara un nuevo despliegue en Railway. Esto nos permitió iterar rápidamente y desplegar actualizaciones sin esfuerzo.  
					- Se verificó que cada despliegue se realizara sin errores y que la aplicación estuviera disponible y funcionando correctamente en línea.  
					- Se utilizan las herramientas de monitoreo integradas en Railway para mantener un ojo en el rendimiento y la salud de nuestra aplicación. De esta forma se facilita el identificar y resolver cualquier problema de manera rápida y eficiente.  
					- Los registros detallados proporcionados por Railway fueron invaluables para depurar problemas y entender el comportamiento de la aplicación bajo diferentes condiciones.
		`,
	},
	{
        id: "04",
		title: "04. Creación de Contenido Web con HTML y CSS",
		description: "Uso de git para versionar y colaborar en un proyecto web",
		content: `**Control de versiones**  
					Git es, efectivamente, una herramienta poderosa para el control de versiones que facilita el trabajo en equipo y el seguimiento de cambios en proyectos de desarrollo. En este caso, el uso de repositorios locales y en línea fue estratégico para mantener un flujo de trabajo eficiente y colaborativo.  
					**Uso de Repositorios Locales**  
					Los repositorios locales son esenciales para el desarrollo porque permiten a los desarrolladores trabajar en sus propias máquinas sin necesidad de estar conectados a una red o a un servidor central. Esto ofrece varias ventajas como:  
					- Los desarrolladores pueden realizar pruebas y desarrollar nuevas características sin afectar el trabajo de otros miembros del equipo.  
					- Se pueden hacer commits y experimentar con diferentes versiones del código sin riesgo de afectar el repositorio principal.  
					- Las operaciones de Git en un repositorio local son generalmente más rápidas que aquellas que involucran un servidor remoto.      
					**Uso de Repositorios en Linea**  
					Los repositorios en línea, como los que ofrecen GitHub, GitLab o Bitbucket, son cruciales para la colaboración y el mantenimiento de un código centralizado. Algunas de las ventajas de usar repositorios en línea incluyen:  
					- Permiten que múltiples desarrolladores trabajen en el mismo proyecto y fusionen sus cambios de manera controlada.  
					- Proporcionan un backup remoto del código, reduciendo el riesgo de pérdida de datos.  
					- Mantienen un registro completo de todos los cambios, quién los hizo y cuándo, lo que facilita la auditoría y la resolución de problemas.
		`,
	},
    {
        id: "05",
		title: "05. Interactividad Web con JavaScript y Herramientas Front-end",
		description: "Uso de scripts en tiempo real para interactividad web",
		content: `**Implementación de scripts**  
					Los scripts de validación en tiempo real implementados en la web de Tech Talent Hub mejoran significativamente la experiencia del usuario al garantizar que los datos ingresados en los formularios de registro, inicio de sesión, oferta de empleo y postulado sean correctos y completos antes de ser enviados. Estos scripts, desarrollados con JavaScript, verifican campos como nombres, emails, contraseñas, teléfonos, descripciones y archivos de CV, mostrando mensajes de error inmediatos si algún dato no cumple con los requisitos mínimos, lo que facilita la corrección y evita envíos erróneos. Esta interactividad en tiempo real no solo aumenta la eficiencia del proceso de registro y postulación, sino que también fortalece la confianza del usuario en la plataforma al proporcionar una interfaz amigable y de fácil uso.
		
		`,
	},
    {
        id: "06",
		title: "06. Introducción al Desarrollo Back-end y Gestión de Datos",
		description: "Interacción entre los sistemas Back-end y Bases de Datos",
		content: `**Funcionalidades**  
					- Login: Permite a usuarios registrados (candidatos y empleadores) iniciar sesión en la aplicación al validar el correo electrónico y contraseña ingresados contra los almacenados en la base de datos. Si la validación es exitosa, se genera un token de sesión que se almacena en el lado del cliente para identificar al usuario durante la sesión.  
					- Registro: Permite a nuevos usuarios crear una cuenta de candidato en la aplicación. El usuario ingresa sus datos relevantes (nombre, correo electrónico, contraseña, etc.). Al finalizar el registro se agrega la información del usuario en la base de datos.  
					- Perfil: Permite a los usuarios registrados ver y editar su información personal. La aplicación recupera los datos del usuario desde la base de datos en función de su ID y los muestra en un formulario editable. Los cambios realizados se actualizan en la colección correspondiente de MongoDB.  
					- Crear Oferta: Sólo accesible para usuarios registrados como empleadores. Permite a los empleadores publicar nuevas ofertas de empleo. El empleador ingresa detalles como el título, la descripción, los requisitos, el tipo de empleo (tiempo completo, parcial, etc.) y la fecha de publicación de la oferta.  
				**Arquitectura de la aplicación**  
					- API REST: Implementada con NestJS (sobre Express.js) y conectada con una base de datos documental manejada por MongoDB.  
				**Desafios encontrados**  
					- Template base: La aplicación parte de otra, si bien se ahorra trabajo en ciertos casos, en otros es necesario entender el funcionamiento original para una posterior adaptación.  
					- Solución: Implementar funcionalidades de forma externa y, una vez operativas, aplicar adaptación.  
					- Delimitación de tareas: Se requiere de un orden lógico tanto para la implementación de una nueva característica, como su posterior verificación.  
					- Solución: Indicar en el repositorio de GitHub, mediante Issues, el paso a paso de cada nueva funcionalidad.  
					- Acceso no permitido: Se presentaron múltiples casos de personas que no podían acceder al repositorio.   
					- Solución: Notificar la situación al Tech Lead para re-asignar acceso.  

		`,
	},
].sort((a, b) => a.title.localeCompare(b.title));