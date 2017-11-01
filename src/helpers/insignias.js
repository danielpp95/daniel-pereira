const insignias = [
  { id: 110, curso: 'Carrera de Inteligencia Artificial', img: require('@/assets/carreras/badge-machine-learning.png') },
  { id: 111, curso: 'Carrera de Desarrollo Backend con Python', img: require('@/assets/carreras/badge-carrera-python.png') },
  { id: 112, curso: 'Carrera de Desarrollo con WordPress', img: require('@/assets/carreras/Wordpress.png') },
  { id: 113, curso: 'Carrera de Desarrollo Backend con Ruby', img: require('@/assets/carreras/badge-carrera-Ruby.png') },
  { id: 114, curso: 'Carrera de Desarrollo Backend con GO', img: require('@/assets/carreras/badge-carrera-go.png') },
  { id: 115, curso: 'Carrera de Desarrollo con Java ', img: require('@/assets/carreras/badge-carrera-JAVA.png') },
  { id: 116, curso: 'Carrera de Fundamentos de Programación', img: require('@/assets/carreras/badge-carrera-fundamentos-.png') },
  { id: 117, curso: 'Carrera de Desarrollo Backend con PHP', img: require('@/assets/carreras/badge-lamp.png') },
  { id: 118, curso: 'Carrera de Desarrollo de Aplicaciones con ASP .NET', img: require('@/assets/carreras/badge-carrera-net.png') },
  { id: 119, curso: 'Carrera de Email Marketing', img: require('@/assets/carreras/badge-email-marketing.png') },
  { id: 120, curso: 'Carrera de Arquitecto Frontend', img: require('@/assets/carreras/golden_frontend2x.png') },
  { id: 121, curso: 'Carrera de Videojuegos', img: require('@/assets/carreras/carrera-de-video-juegos.png') },
  { id: 122, curso: 'Carrera de Marketing y Estrategia Digital', img: require('@/assets/carreras/c-marketing2x.png') },
  { id: 123, curso: 'Carrera de Seguridad Informática', img: require('@/assets/carreras/goldenbadge_seguridad.png') },
  { id: 124, curso: 'Carrera de Apple Fullstack Developer', img: require('@/assets/carreras/golden_apple2x.png') },
  { id: 125, curso: 'Carrera de Diseño de productos digitales y UX', img: require('@/assets/carreras/c-design2x.png') },
  { id: 126, curso: 'Carrera de Big Data y Data Science', img: require('@/assets/carreras/badge-datascience-1.png') },
  { id: 127, curso: 'Carrera de Desarrollador JavaScript', img: require('@/assets/carreras/badge-JavaScript.png') },
  { id: 128, curso: 'Carrera de Negocios Online', img: require('@/assets/carreras/c-business2x.png') },
  { id: 129, curso: 'Carrera de Bases de Datos', img: require('@/assets/carreras/c-databases2x.png') },
  { id: 130, curso: 'Carrera de Administración de Servidores y DevOps', img: require('@/assets/carreras/c-devops2x.png') },
  { id: 131, curso: 'Carrera de Google Fullstack Developer', img: require('@/assets/carreras/c-google-stack2x.png') },
  { id: 132, curso: 'Carrera de Producción Audiovisual ', img: require('@/assets/carreras/badge-carrera-audiovisual.png') },
  { id: 133, curso: 'Carrera de Desarrollo de Apps multiplataforma', img: require('@/assets/carreras/badge-desarrollo-de-apps-multiplataformas.png') },
  { id: 1, curso: 'Curso de Python', img: require('@/assets/insignias/phyton-django2x.png') },
  { id: 2, curso: 'Curso de Introducción a Machine Learning', img: require('@/assets/insignias/badge-INTRO-machine-learning-.png') },
  { id: 3, curso: 'Curso de Machine Learning Aplicado con Python', img: require('@/assets/insignias/badge-Scikit-learn.png') },
  { id: 4, curso: 'Curso de Redes Neuronales y Backpropagation', img: require('@/assets/insignias/badge-redes-neuronales.png') },
  { id: 5, curso: 'Curso Gratis de Programación Básica', img: require('@/assets/insignias/badge-prog-basica-2017.png') },
  { id: 6, curso: 'Curso profesional de Git y GitHub ', img: require('@/assets/insignias/badge-github.png') },
  { id: 7, curso: 'Fundamentos de Bases de Datos ', img: require('@/assets/insignias/badge-Fundamentos-de-Bases-de-Datos.png') },
  { id: 8, curso: 'Curso de Python y Django', img: require('@/assets/insignias/Badge-django.png') },
  { id: 9, curso: 'Curso de PostgreSQL', img: require('@/assets/insignias/postgresql2x.png') },
  { id: 10, curso: 'Curso de Administración de Servidores Linux', img: require('@/assets/insignias/linux2x.png') },
  { id: 11, curso: 'Introducción a PHP', img: require('@/assets/insignias/badge-intro-php-nuevo.png') },
  { id: 12, curso: 'Curso de Temas y Plugins en WordPress', img: require('@/assets/insignias/badge-WordPress.png') },
  { id: 13, curso: 'Curso de Ruby', img: require('@/assets/insignias/badge-Ruby.png') },
  { id: 14, curso: 'Curso de Ruby on Rails', img: require('@/assets/insignias/badge-ROR.png') },
  { id: 15, curso: 'Curso de Heroku', img: require('@/assets/insignias/heroku2x.png') },
  { id: 16, curso: 'Curso de Programación en Go', img: require('@/assets/insignias/badge-GO-2017.png') },
  { id: 17, curso: 'Curso de Go Avanzado', img: require('@/assets/insignias/badge-Go-avanzado.png') },
  { id: 18, curso: 'Curso básico de Java', img: require('@/assets/insignias/badge-Java-basico-2017.png') },
  { id: 19, curso: 'Curso Profesional de Java EE', img: require('@/assets/insignias/badge-java-ee.png') },
  { id: 20, curso: 'Fundamentos de Ingeniería de Software', img: require('@/assets/insignias/badge-ing-software-2017.png') },
  { id: 21, curso: 'Curso de Algoritmos con C', img: require('@/assets/insignias/badge-algoritmos-ad65b237-2c3f-4921-9f5f-8e9d0ce24f15.png') },
  { id: 22, curso: 'Introducción a terminal y línea de comandos', img: require('@/assets/insignias/Badge_platzi_terminal.png') },
  { id: 23, curso: 'Curso de Programación para Padres y Niños', img: require('@/assets/insignias/badge-prog-padres-y-ninos.png') },
  { id: 24, curso: 'Curso de PHP con Laravel', img: require('@/assets/insignias/badge-laravel-e7fa92d7-56a1-4af2-8a71-756ce0068d41.png') },
  { id: 25, curso: 'Curso básico de C#', img: require('@/assets/insignias/badge-curso-c-d78a8000-511f-4b9f-805d-2eb5742f60f3.png') },
  { id: 26, curso: 'Curso Profesional de C# y ASP.Net', img: require('@/assets/insignias/badge-aspnet-b735b869-9b0a-49c7-8b51-2a16411efb89.png') },
  { id: 27, curso: 'Curso de Azure IaaS', img: require('@/assets/insignias/azure2x.png') },
  { id: 28, curso: 'Introducción al Marketing Digital', img: require('@/assets/insignias/online-advertising2x.png') },
  { id: 29, curso: 'Curso Gratis de Marketing Voz a Voz', img: require('@/assets/insignias/badgeWOM.png') },
  { id: 30, curso: 'Curso de Growth Marketing', img: require('@/assets/insignias/01-1.png') },
  { id: 31, curso: 'Curso de Marketing Móvil', img: require('@/assets/insignias/badge-mkt-movil.png') },
  { id: 32, curso: 'Curso de Email Marketing', img: require('@/assets/insignias/badge-email-marketing_1.png') },
  { id: 33, curso: 'Curso de Diseño HTML y CSS para Emails', img: require('@/assets/insignias/badge-html-css-email.png') },
  { id: 34, curso: 'Curso de Desarrollo Web Online ', img: require('@/assets/insignias/badge-html-y-css-para-mails.png') },
  { id: 35, curso: 'Curso de Responsive Design', img: require('@/assets/insignias/badge-responsive-design.png') },
  { id: 36, curso: 'Diseño web con PostCSS, el futuro de CSS', img: require('@/assets/insignias/badge-post-css.png') },
  { id: 37, curso: 'Curso de Frontend con Bootstrap y Foundation', img: require('@/assets/insignias/badge-bootstrap.png') },
  { id: 38, curso: 'Curso de Animaciones para la Web', img: require('@/assets/insignias/badge-animaciones-para-web.png') },
  { id: 39, curso: 'Curso de JavaScript y jQuery', img: require('@/assets/insignias/badge-JQuery.png') },
  { id: 40, curso: 'Curso de Diseño HTML y CSS para Emails', img: require('@/assets/insignias/badge-html-css-email.png') },
  { id: 41, curso: 'Curso de Creación de Videojuegos', img: require('@/assets/insignias/_Badge-Intro-a-la-Industria-de-Videojuegos-1.png') },
  { id: 42, curso: 'Curso de animación y arte de videojuegos', img: require('@/assets/insignias/Curso-de-Animacion-para-Videojuegos_1.png') },
  { id: 43, curso: 'Curso de marketing y negocios para Videojuegos', img: require('@/assets/insignias/Curso-del-negocio--de-videojuegos-y-marketing-1.png') },
  { id: 44, curso: 'Curso de Programación de Videojuegos con Unity', img: require('@/assets/insignias/Curso-de-programacion-de-videojuegos.png') },
  { id: 45, curso: 'Curso de Desarrollo de Videojuegos con Unreal Engine', img: require('@/assets/insignias/Badge-Unreal-Engine.png') },
  { id: 46, curso: 'Curso de Content Marketing', img: require('@/assets/insignias/badge-content-marketing01-d33dd1ae-98d9-4cfe-bb9a-88472ff119e2.png') },
  { id: 47, curso: 'Curso Profesional de Google AdWords', img: require('@/assets/insignias/adwords2x.png') },
  { id: 48, curso: 'Curso de Social Media Marketing y Estrategia Digital', img: require('@/assets/insignias/badge_CM.png') },
  { id: 49, curso: 'Curso de SEO: Posicionamiento en buscadores', img: require('@/assets/insignias/seo-tecnico.png') },
  { id: 50, curso: 'Curso Profesional de Google Analytics', img: require('@/assets/insignias/analytics.png') },
  { id: 51, curso: 'Curso de Google Analytics para Desarrolladores', img: require('@/assets/insignias/badge-GAJS.png') },
  { id: 52, curso: 'Curso Profesional de Google Analytics 2015', img: require('@/assets/insignias/analitycs2x.png') },
  { id: 53, curso: 'Curso de Construcción de Marca', img: require('@/assets/insignias/badge_marcadigital.png') },
  { id: 54, curso: 'Curso de Facebook Ads', img: require('@/assets/insignias/facebook-ads2x.png') },
  { id: 55, curso: 'Curso de Relaciones Públicas y Prensa', img: require('@/assets/insignias/PR.png') },
  { id: 56, curso: 'Fundamentos de Outbound Marketing y SEM', img: require('@/assets/insignias/badge-Fundamentos-outbound.png') },
  { id: 57, curso: 'Introducción al marketing con influencers', img: require('@/assets/insignias/Badge_SIM.png') },
  { id: 58, curso: 'Curso de Análisis de Vulnerabilidades Web', img: require('@/assets/insignias/badge-infosec-b0c11b21-2a1a-43d7-b615-916586ef6ee9.png') },
  { id: 59, curso: 'Introducción a la Seguridad Informática', img: require('@/assets/insignias/badge-curso-seguridad-informatica.png') },
  { id: 60, curso: 'Curso de Pentesting', img: require('@/assets/insignias/badge-pentesting.png') },
  { id: 61, curso: 'Curso de programación para iOS con Swift', img: require('@/assets/insignias/badge_iOS_2.png') },
  { id: 62, curso: 'Curso de Diseño de Interfaces y UX', img: require('@/assets/insignias/ux2x.png') },
  { id: 63, curso: 'Cómo ser un Product Designer por Aerolab', img: require('@/assets/insignias/product-design2x.png') },
  { id: 64, curso: 'Curso de Desarrollo de Productos con Metodología Lean', img: require('@/assets/insignias/Badge_platzi_leanUX.png') },
  { id: 65, curso: 'Curso de Sketch', img: require('@/assets/insignias/sketch2x.png') },
  { id: 66, curso: 'Curso de Adobe XD', img: require('@/assets/insignias/badge-xd.png') },
  { id: 67, curso: 'Curso de Illustrator', img: require('@/assets/insignias/illustrator_2x_360.png') },
  { id: 68, curso: 'Curso Básico de Photoshop', img: require('@/assets/insignias/photoshop.png') },
  { id: 69, curso: 'Curso Profesional de Photoshop para Fotografía', img: require('@/assets/insignias/psd_avanzado.png') },
  { id: 70, curso: 'Curso de Fotografía y Lightroom', img: require('@/assets/insignias/badge-fotograf.png') },
  { id: 71, curso: 'Curso Profesional de After Effects', img: require('@/assets/insignias/aftereffects.png') },
  { id: 72, curso: 'Curso de Diseño Visual de Marcas', img: require('@/assets/insignias/identidadvisual.png') },
  { id: 73, curso: 'Curso de Big Data y Ciencia de Datos', img: require('@/assets/insignias/Badge-datascience-basico.png') },
  { id: 74, curso: 'Curso Profesional de Data Science', img: require('@/assets/insignias/Badge-data-Science-Advanced.png') },
  { id: 75, curso: 'Fundamentos de JavaScript', img: require('@/assets/insignias/badge-Fundamentos-js.png') },
  { id: 76, curso: 'Curso Definitivo de JavaScript', img: require('@/assets/insignias/badge-JavaScript.png') },
  { id: 77, curso: 'Curso Avanzado de Node.js ', img: require('@/assets/insignias/badge-NodeAvanzado.png') },
  { id: 78, curso: 'Curso de MongoDB y Redis 2015', img: require('@/assets/insignias/MongoDB2x.png') },
  { id: 79, curso: 'Curso básico de Vue.js', img: require('@/assets/insignias/badge-Vuejs.png') },
  { id: 80, curso: 'Curso Profesional de VueJS', img: require('@/assets/insignias/badge-Vue-JS-profesional.png') },
  { id: 81, curso: 'Curso profesional de React con Redux', img: require('@/assets/insignias/react.png') },
  { id: 82, curso: 'Curso de Realidad Virtual para Web', img: require('@/assets/insignias/badge-Curso-de-Realidad-Virtual-para-Web-3.png') },
  { id: 83, curso: 'Curso de Angular 4', img: require('@/assets/insignias/badge-angular-4.png') },
  { id: 84, curso: 'Curso de MEAN', img: require('@/assets/insignias/badge-mean.png') },
  { id: 85, curso: 'Curso de Webpack', img: require('@/assets/insignias/badge-webpack-a5cc6702-7344-4973-931b-6981858ae6a7.png') },
  { id: 86, curso: 'Introducción a la Creación de Empresas y Startups', img: require('@/assets/insignias/badge-intro-startups-2-7cec514a-b694-497a-b7e3-9518111bbf5b.png') },
  { id: 87, curso: 'Taller de creación de Startups', img: require('@/assets/insignias/c-business2x.png') },
  { id: 88, curso: 'Curso de Gestión de Proyectos', img: require('@/assets/insignias/Badges-Pryectos.png') },
  { id: 89, curso: 'Curso de eCommerce', img: require('@/assets/insignias/ecommerce.png') },
  { id: 90, curso: 'Curso de Inbound Sales ', img: require('@/assets/insignias/badge-inbound-sales-3.png') },
  { id: 91, curso: 'Curso de Metodologías Ágiles y SCRUM', img: require('@/assets/insignias/badge_scrum.png') },
  { id: 92, curso: 'Curso de Bitcoin y Blockchain', img: require('@/assets/insignias/bitcoin.png') },
  { id: 93, curso: 'Curso de Marca Personal', img: require('@/assets/insignias/badged.png') },
  { id: 94, curso: 'Curso de Inglés Técnico para Profesionales', img: require('@/assets/insignias/badge-ingles-tecnico-40d0b777-3047-4e5c-ad6e-36dadfb5a28d.png') },
  { id: 95, curso: 'Curso de Finanzas Personales', img: require('@/assets/insignias/badge-finanzas-personales-9dad7da3-422b-4bf8-9e58-a530cffa0684.png') },
  { id: 96, curso: 'Curso de SQL y MySQL', img: require('@/assets/insignias/mysql.png') },
  { id: 97, curso: 'Curso de MongoDB y Redis ', img: require('@/assets/insignias/badge-mongo-db-30aeaa5f-6db3-48bd-8ad7-8d59625a8d3d.png') },
  { id: 98, curso: 'Curso de Deploy con Now.sh', img: require('@/assets/insignias/badge-deploy.png') },
  { id: 99, curso: 'Curso de Docker', img: require('@/assets/insignias/docker2x.png') },
  { id: 100, curso: 'Curso Profesional de DevOps', img: require('@/assets/insignias/badge-devops-curso.png') },
  { id: 101, curso: 'Curso Definitivo de Android', img: require('@/assets/insignias/android.png') },
  { id: 102, curso: 'Curso Profesional de Firebase para Android', img: require('@/assets/insignias/badge-android-avanzado-3.png') },
  { id: 103, curso: 'Curso de Angular JS', img: require('@/assets/insignias/angular2x.png') },
  { id: 104, curso: 'Curso de Kotlin', img: require('@/assets/insignias/kotlin_badge.png') },
  { id: 105, curso: 'Curso de edición de video con Premiere Pro', img: require('@/assets/insignias/badge-premiere.png') },
  { id: 106, curso: 'Curso de Producción para Youtube', img: require('@/assets/insignias/Badges-youtube.png') },
  { id: 107, curso: 'Curso de Xamarin', img: require('@/assets/insignias/badge-xamarin.png') },
  { id: 108, curso: 'Curso de React Native', img: require('@/assets/insignias/badge-react-native.png') },
  { id: 109, curso: 'Curso de Electron: Apps de escritorio en Windows y Mac', img: require('@/assets/insignias/badge-electron-apps.png') }

]

export default insignias