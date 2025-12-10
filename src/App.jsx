// App.jsx
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
	Phone,
	Mail,
	MapPin,
	Clock,
	CheckCircle,
	Star,
	ChevronRight,
	Calendar,
	Sparkles,
	Shield,
	ArrowRight,
	Award,
	TrendingUp,
	UserCheck,
	Package,
	ShieldCheck,
	Heart,
	Zap,
	Instagram,
	Facebook,
	MessageCircle,
	Crown,
	Gem,
	X,
	Menu,
	Scissors,
	Users,
	Sparkle,
	BadgeCheck,
	Flower
} from 'lucide-react';

// Функция для плавного скролла
const scrollToSection = (e, sectionId) => {
	e.preventDefault();
	const element = document.getElementById(sectionId);
	if (element) {
		const headerOffset = 80;
		const elementPosition = element.getBoundingClientRect().top;
		const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth'
		});
	}
};

const AdvantageCard = ({ advantage, index }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className={`relative p-6 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${isHovered ? 'ring-1 ring-purple-200' : ''
				}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={{ animationDelay: `${index * 100}ms` }}
		>
			{/* Анимированный фон */}
			<div className={`absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
				}`}></div>

			<div className="relative z-10">
				<div className="flex items-start">
					<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mr-4 shadow-sm">
						{advantage.icon}
					</div>
					<p className="text-lg font-medium text-gray-800 pt-2 font-['Inter']">{advantage.text}</p>
				</div>
			</div>

			{/* Анимация при наведении */}
			{isHovered && (
				<div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-10 -z-10"></div>
			)}
		</div>
	);
};

const ServiceCard = ({ service }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className={`relative group overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Анимированный фон */}
			<div className={`absolute inset-0 bg-gradient-to-br ${service.color} transition-opacity duration-500 ${isHovered ? 'opacity-10' : 'opacity-5'
				}`}></div>

			{/* Индикатор популярности */}
			{service.popular && (
				<div className="absolute top-4 right-4">
					<div className="relative">
						<div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg font-['Inter']">
							Популярно
						</div>
						<div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur opacity-30 -z-10"></div>
					</div>
				</div>
			)}

			{/* Изображение услуги */}
			<div className="h-48 relative overflow-hidden">
				<div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80`}></div>
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
						<Package className="text-white" size={32} />
					</div>
				</div>
				<div className="absolute bottom-4 left-4">
					<div className="text-white text-sm font-medium px-3 py-1 bg-black/20 backdrop-blur-sm rounded-full font-['Inter']">
						{service.duration}
					</div>
				</div>
			</div>

			{/* Контент */}
			<div className="p-6 relative">
				<h3 className="text-xl font-bold text-gray-900 mb-2 font-['Playfair_Display']">{service.title}</h3>
				<p className="text-gray-600 mb-4 leading-relaxed font-['Inter']">{service.description}</p>

				<div className="flex items-center justify-between">
					<div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-['Inter']">
						{service.price}
					</div>
					<a
						href="#contact"
						onClick={(e) => scrollToSection(e, 'contact')}
						className="group relative flex items-center text-purple-600 font-medium hover:text-purple-700 font-['Inter']"
					>
						<span className="mr-2">Записаться</span>
						<ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
						<div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"></div>
					</a>
				</div>
			</div>
		</div>
	);
};

// Данные услуг
const services = [
	{
		id: 1,
		title: "Классический шугаринг",
		description: "Быстрое и эффективное удаление волос с любых зон с использованием профессиональной сахарной пасты",
		price: "от 800 ₽",
		duration: "15-60 мин",
		popular: true,
		color: "from-purple-500 to-pink-500"
	},
	{
		id: 2,
		title: "Глубокое бикини",
		description: "Максимально точное и бережное удаление волос в интимной зоне",
		price: "от 1500 ₽",
		duration: "30-45 мин",
		popular: true,
		color: "from-rose-500 to-orange-500"
	},
	{
		id: 3,
		title: "Шугаринг лица",
		description: "Аккуратное удаление волос на лице с уходом после процедуры",
		price: "от 500 ₽",
		duration: "10-20 мин",
		color: "from-blue-500 to-cyan-500"
	},
	{
		id: 4,
		title: "Комплексные программы",
		description: "Выгодные пакеты услуг для комплексного ухода",
		price: "от 2500 ₽",
		duration: "60-120 мин",
		popular: true,
		color: "from-emerald-500 to-teal-500"
	}
];

// Преимущества
const advantages = [
	{ text: "10+ лет профессионального опыта", icon: <Award className="text-purple-500" /> },
	{ text: "Сертифицированный специалист международного уровня", icon: <ShieldCheck className="text-rose-500" /> },
	{ text: "Использую только гипоаллергенные материалы", icon: <Heart className="text-pink-500" /> },
	{ text: "Индивидуальный подход к каждому клиенту", icon: <UserCheck className="text-blue-500" /> },
	{ text: "Стерильные условия и одноразовые инструменты", icon: <Shield className="text-emerald-500" /> },
	{ text: "Безболезненные техники для чувствительной кожи", icon: <Zap className="text-orange-500" /> }
];

const SubscriptionCard = ({ plan, isPopular }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className={`relative rounded-3xl p-1 transition-all duration-500 ${isPopular ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500' : 'bg-gradient-to-r from-gray-200 to-gray-300'}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="bg-white rounded-2xl p-6 h-full">
				{isPopular && (
					<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
						<div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg font-['Inter']">
							★ Рекомендуем
						</div>
					</div>
				)}

				<div className="text-center mb-6">
					<h3 className="text-xl font-bold text-gray-900 mb-2 font-['Playfair_Display']">{plan.name}</h3>
					<div className="flex items-center justify-center mb-1">
						<div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-['Inter']">
							{plan.price}
						</div>
					</div>
					<div className="text-gray-500 font-['Inter']">{plan.period}</div>
					{plan.saving && (
						<div className="text-emerald-600 font-bold text-sm mt-1 font-['Inter']">
							Экономия {plan.saving}
						</div>
					)}
				</div>

				<div className="space-y-3 mb-6">
					{plan.features.map((feature, idx) => (
						<div key={idx} className="flex items-start">
							<CheckCircle size={18} className="text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
							<span className="text-gray-700 font-['Inter']">{feature}</span>
						</div>
					))}
				</div>

				<a
					href="#contact"
					onClick={(e) => scrollToSection(e, 'contact')}
					className={`block w-full py-3 rounded-xl font-medium text-center transition-all duration-300 font-['Inter'] ${isPopular
						? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/40'
						: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
						} hover:scale-105`}
				>
					{isPopular ? 'Выбрать тариф' : 'Подробнее'}
				</a>

				{/* Анимация при наведении */}
				{isHovered && isPopular && (
					<div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 -z-10 animate-pulse"></div>
				)}
			</div>
		</div>
	);
}

const AnimatedForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);
	const { register, handleSubmit, formState: { errors }, reset } = useForm();

	const onSubmit = async (data) => {
		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
			setSubmitSuccess(true);
			reset();
			setTimeout(() => setSubmitSuccess(false), 5000);
		}, 1500);
	};

	return (
		<div className="relative rounded-3xl overflow-hidden">
			{/* Анимированный фон формы */}
			<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-rose-500/5">
				<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
				<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"></div>
			</div>

			<div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-purple-100">
				<h3 className="text-2xl font-bold text-gray-900 mb-2 font-['Playfair_Display']">Онлайн-запись</h3>
				<p className="text-gray-600 mb-6 font-['Inter']">Заполните форму и я свяжусь с вами в течение 15 минут</p>

				{submitSuccess ? (
					<div className="text-center py-12">
						<div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center animate-bounce">
							<CheckCircle size={40} className="text-white" />
						</div>
						<h4 className="text-2xl font-bold text-gray-900 mb-3 font-['Playfair_Display']">Заявка отправлена!</h4>
						<p className="text-gray-600 mb-8 font-['Inter']">Я свяжусь с вами в ближайшее время для подтверждения записи</p>
						<button
							onClick={() => setSubmitSuccess(false)}
							className="text-purple-600 hover:text-purple-700 font-medium underline font-['Inter']"
						>
							Отправить еще одну заявку
						</button>
					</div>
				) : (
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label className="block text-gray-700 mb-2 font-medium font-['Inter']">Ваше имя *</label>
								<input
									type="text"
									className={`w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:ring-2 transition-all font-['Inter'] ${errors.name
										? 'border-rose-300 bg-rose-50 focus:ring-rose-500 focus:border-rose-500'
										: 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'
										}`}
									placeholder="Имя"
									{...register("name", { required: "Введите ваше имя" })}
								/>
							</div>

							<div>
								<label className="block text-gray-700 mb-2 font-medium font-['Inter']">Телефон *</label>
								<input
									type="tel"
									className={`w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:ring-2 transition-all font-['Inter'] ${errors.phone
										? 'border-rose-300 bg-rose-50 focus:ring-rose-500 focus:border-rose-500'
										: 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'
										}`}
									placeholder="+7 (___) ___-__-__"
									{...register("phone", {
										required: "Введите телефон",
										pattern: {
											value: /^[+]?[7-8]?[0-9]{10}$/,
											message: "Введите корректный номер"
										}
									})}
								/>
							</div>
						</div>

						<div>
							<label className="block text-gray-700 mb-2 font-medium font-['Inter']">Услуга</label>
							<select
								className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all font-['Inter']"
								{...register("service")}
							>
								<option value="">Выберите услугу</option>
								{services.map(service => (
									<option key={service.id} value={service.title}>{service.title}</option>
								))}
							</select>
						</div>

						<div>
							<label className="block text-gray-700 mb-2 font-medium font-['Inter']">Сообщение</label>
							<textarea
								rows="4"
								className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all resize-none font-['Inter']"
								placeholder="Укажите удобные дату и время, зону для процедуры или задайте вопрос..."
								{...register("message")}
							></textarea>
						</div>

						<button
							type="submit"
							disabled={isSubmitting}
							className="group relative w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-medium text-lg hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed font-['Inter']"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							<div className="relative z-10 flex items-center justify-center">
								{isSubmitting ? (
									<>
										<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
										Отправка...
									</>
								) : (
									<>
										<Sparkles className="mr-3 group-hover:animate-pulse" />
										Отправить заявку
									</>
								)}
							</div>
						</button>
					</form>
				)}
			</div>
		</div>
	);
};

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [hoveredItem, setHoveredItem] = useState(null);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleNavClick = (e, item) => {
		const sectionMap = {
			'Услуги': 'services',
			'О мастере': 'about',
			'Контакты': 'contact'
		};

		if (sectionMap[item]) {
			scrollToSection(e, sectionMap[item]);
		}
		setIsMenuOpen(false);
	};

	const navItems = ['Услуги', 'О мастере', 'Акции', 'Отзывы', 'Контакты'];

	return (
		<header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
			? 'bg-white/95 backdrop-blur-xl shadow-2xl py-3'
			: 'bg-white/80 backdrop-blur-lg py-4'
			}`}>
			<div className="container mx-auto px-4 sm:px-6">
				<div className="flex justify-between items-center">
					{/* Логотип с анимацией */}
					<a
						href="#hero"
						onClick={(e) => scrollToSection(e, 'hero')}
						className="flex items-center space-x-3 group cursor-pointer no-underline flex-shrink-0 min-w-0"
					>
						<div className="relative flex-shrink-0">
							<div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-xl group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-105">
								<span className="text-white font-bold text-xl font-['Playfair_Display']">G</span>
							</div>
							<div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
						</div>
						<div className="min-w-0">
							<h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-['Playfair_Display'] truncate">
								GlowSculpt
							</h1>
							<p className="text-xs text-gray-500 font-['Inter'] tracking-wider truncate">студия эстетики</p>
						</div>
					</a>

					{/* Навигация */}
					<nav className="hidden lg:flex items-center space-x-1 mx-4">
						{navItems.map((item, index) => (
							<a
								key={index}
								href={`#${item.toLowerCase().replace(' ', '')}`}
								onClick={(e) => handleNavClick(e, item)}
								className="relative px-3 py-2 rounded-xl text-gray-700 hover:text-purple-600 transition-colors duration-300 group font-['Inter'] font-medium tracking-wide whitespace-nowrap"
								onMouseEnter={() => setHoveredItem(index)}
								onMouseLeave={() => setHoveredItem(null)}
							>
								<span className="relative z-10">{item}</span>
								{hoveredItem === index && (
									<div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl -z-10 animate-pulse"></div>
								)}
								<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-4 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"></div>
							</a>
						))}
					</nav>

					{/* Кнопки */}
					<div className="flex items-center space-x-3">
						{/* Кнопка записи на больших экранах (lg и выше) */}
						<a
							href="#contact"
							onClick={(e) => scrollToSection(e, 'contact')}
							className="hidden min-[1024px]:flex items-center px-4 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 group font-['Inter'] whitespace-nowrap"
						>
							<Calendar size={18} className="mr-2 group-hover:animate-pulse flex-shrink-0" />
							<span>Записаться</span>
						</a>

						{/* Иконка записи на экранах с бургер-меню (до lg) */}
						<a
							href="#contact"
							onClick={(e) => scrollToSection(e, 'contact')}
							className="lg:hidden flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-lg transition-all flex-shrink-0"
							aria-label="Записаться"
						>
							<Calendar size={18} />
						</a>

						{/* Бургер-меню (до lg) */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transition-all flex-shrink-0"
							aria-label="Меню"
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{/* Мобильное меню (до lg) */}
				<div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
					<div className="bg-white rounded-2xl shadow-2xl p-4 border border-purple-100">
						<div className="space-y-2">
							{navItems.map((item, index) => (
								<a
									key={index}
									href={`#${item.toLowerCase().replace(' ', '')}`}
									onClick={(e) => handleNavClick(e, item)}
									className="flex items-center justify-between p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all group font-['Inter']"
								>
									<span className="text-gray-700 group-hover:text-purple-600 font-medium">{item}</span>
									<ChevronRight size={16} className="text-gray-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-transform" />
								</a>
							))}
							<a
								href="#contact"
								onClick={(e) => scrollToSection(e, 'contact')}
								className="flex items-center justify-center p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium mt-2 hover:shadow-lg transition-all font-['Inter']"
							>
								<Calendar size={18} className="mr-2" />
								Записаться сейчас
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

// Главный блок (обновленный)
const HeroSection = () => {
	return (
		<section id="hero" className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24">
			{/* Декоративные элементы */}
			<div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl -z-10"></div>
			<div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl -z-10"></div>

			<div className="container mx-auto px-4 sm:px-6 relative z-10">
				<div className="flex flex-col lg:flex-row items-center gap-12">
					<div className="lg:w-1/2">
						<div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2.5 rounded-full text-sm font-medium mb-6 shadow-sm font-['Inter']">
							<Flower size={16} className="mr-2" />
							<span>Эксперт по эстетике тела</span>
						</div>

						<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight font-['Playfair_Display']">
							Искусство идеальной
							<span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600">
								гладкости кожи
							</span>
						</h1>

						<p className="text-lg text-gray-600 mb-8 max-w-xl font-['Inter']">
							Профессиональный шугаринг, который изменит ваше представление
							об уходе за собой. Авторские методики, премиальные составы
							и безболезненные техники для безупречного результата.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 mb-12">
							<a
								href="#contact"
								onClick={(e) => scrollToSection(e, 'contact')}
								className="group relative bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-medium hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 text-lg shadow-xl shadow-purple-500/30 inline-flex items-center justify-center overflow-hidden font-['Inter']"
							>
								<div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="relative z-10 flex items-center">
									<Calendar className="mr-3 group-hover:scale-110 transition-transform" />
									Записаться на процедуру
								</div>
							</a>

							<a
								href="#services"
								onClick={(e) => scrollToSection(e, 'services')}
								className="group relative bg-white text-purple-600 px-8 py-4 rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg shadow-lg border-2 border-purple-200 hover:border-purple-300 inline-flex items-center justify-center overflow-hidden font-['Inter']"
							>
								<div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="relative z-10 flex items-center">
									<Sparkle className="mr-3" />
									Узнать об услугах
									<ChevronRight className="ml-3 group-hover:translate-x-2 transition-transform" />
								</div>
							</a>
						</div>

						{/* Статистика */}
						<div className="grid grid-cols-3 gap-4 max-w-md">
							<div className="text-center p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm border border-purple-100">
								<div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-['Inter']">5000+</div>
								<div className="text-gray-600 text-sm font-['Inter']">успешных процедур</div>
							</div>
							<div className="text-center p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm border border-purple-100">
								<div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-['Inter']">98%</div>
								<div className="text-gray-600 text-sm font-['Inter']">довольных клиентов</div>
							</div>
							<div className="text-center p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm border border-purple-100">
								<div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-['Inter']">4.9</div>
								<div className="text-gray-600 text-sm font-['Inter']">средний рейтинг</div>
							</div>
						</div>
					</div>

					<div className="lg:w-1/2">
						<div className="relative mx-auto max-w-md">
							<div className="bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 rounded-3xl p-1.5 shadow-2xl shadow-purple-500/30">
								<div className="bg-white rounded-3xl overflow-hidden shadow-xl">
									<div className="h-64 bg-gradient-to-br from-purple-200 to-pink-200 relative overflow-hidden">
										<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
											<div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl mb-4">
												<div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
													<span className="text-white text-2xl font-bold font-['Playfair_Display']">АС</span>
												</div>
											</div>
											<h3 className="text-2xl font-bold text-gray-900 mb-1 font-['Playfair_Display']">Анна Смирнова</h3>
											<p className="text-gray-600 font-['Inter']">Ведущий мастер-эксперт</p>
										</div>
										<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium font-['Inter']">
											<TrendingUp size={14} className="inline mr-1" />
											Эксперт
										</div>
									</div>
									<div className="p-6">
										<div className="grid grid-cols-2 gap-3 text-sm">
											<div className="flex items-center bg-purple-50 rounded-lg p-3">
												<BadgeCheck className="text-emerald-500 mr-2" size={16} />
												<span className="font-medium font-['Inter']">12 сертификатов</span>
											</div>
											<div className="flex items-center bg-pink-50 rounded-lg p-3">
												<Users className="text-emerald-500 mr-2" size={16} />
												<span className="font-medium font-['Inter']">10+ лет опыта</span>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Декоративные элементы */}
							<div className="absolute -top-4 -left-4 w-20 h-20 bg-purple-300/30 rounded-full -z-10 blur-xl"></div>
							<div className="absolute -bottom-6 -right-6 w-24 h-24 bg-pink-300/30 rounded-full -z-10 blur-xl"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

// Блок "О мастере" (обновленный)
const AboutSection = () => {
	const [activeTab, setActiveTab] = useState('about');

	return (
		<section id="about" className="container mx-auto px-4 py-16">
			<div className="text-center mb-12">
				<div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4 font-['Inter']">
					<UserCheck size={16} className="mr-2" />
					<span>О мастере</span>
				</div>
				<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-['Playfair_Display']">
					Мастер с душой
				</h2>
				<p className="text-gray-600 max-w-2xl mx-auto text-lg font-['Inter']">
					Профессионал, который превращает каждую процедуру в искусство
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Левая колонка - фото и основные данные */}
				<div className="lg:col-span-1">
					<div className="sticky top-24">
						<div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-1 shadow-xl">
							<div className="bg-white rounded-2xl p-8 text-center">
								<div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl mb-6">
									<div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
										<span className="text-white text-4xl font-bold font-['Playfair_Display']">АС</span>
									</div>
								</div>

								<h3 className="text-2xl font-bold text-gray-900 mb-2 font-['Playfair_Display']">Анна Смирнова</h3>
								<div className="text-purple-600 font-medium mb-4 font-['Inter']">Ведущий мастер-эксперт</div>

								<div className="flex items-center justify-center mb-6">
									{[...Array(5)].map((_, i) => (
										<Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
									))}
									<span className="ml-2 font-bold text-gray-700 font-['Inter']">4.9</span>
								</div>

								<div className="space-y-4 mb-8">
									<div className="flex items-center justify-center text-gray-600 font-['Inter']">
										<Calendar size={18} className="mr-2 text-purple-500" />
										<span>В индустрии с 2012 года</span>
									</div>
									<div className="flex items-center justify-center text-gray-600 font-['Inter']">
										<Award size={18} className="mr-2 text-purple-500" />
										<span>12+ сертификатов</span>
									</div>
									<div className="flex items-center justify-center text-gray-600 font-['Inter']">
										<Users size={18} className="mr-2 text-purple-500" />
										<span>5000+ процедур</span>
									</div>
								</div>

								<a
									href="#contact"
									onClick={(e) => scrollToSection(e, 'contact')}
									className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 font-['Inter']"
								>
									<MessageCircle size={18} className="mr-2" />
									Задать вопрос мастеру
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Правая колонка - контент */}
				<div className="lg:col-span-2">
					<div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100">
						{/* Табы */}
						<div className="flex space-x-4 mb-8 border-b border-gray-200">
							<button
								onClick={() => setActiveTab('about')}
								className={`pb-3 px-1 font-medium transition-colors relative font-['Inter'] ${activeTab === 'about'
									? 'text-purple-600'
									: 'text-gray-500 hover:text-gray-700'
									}`}
							>
								Обо мне
								{activeTab === 'about' && (
									<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
								)}
							</button>
							<button
								onClick={() => setActiveTab('philosophy')}
								className={`pb-3 px-1 font-medium transition-colors relative font-['Inter'] ${activeTab === 'philosophy'
									? 'text-purple-600'
									: 'text-gray-500 hover:text-gray-700'
									}`}
							>
								Философия работы
								{activeTab === 'philosophy' && (
									<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
								)}
							</button>
						</div>

						{/* Контент табов */}
						<div className="space-y-6">
							{activeTab === 'about' && (
								<>
									<p className="text-gray-700 text-lg leading-relaxed font-['Inter']">
										Меня зовут Анна, и я профессиональный мастер шугаринга с более чем 10-летним опытом.
										Моя история в индустрии красоты началась в 2012 году, и за это время я помогла тысячам
										клиентов обрести идеально гладкую кожу без раздражений.
									</p>
									<p className="text-gray-700 text-lg leading-relaxed font-['Inter']">
										Я постоянно совершенствую свои навыки, регулярно посещаю международные мастер-классы
										и семинары ведущих экспертов индустрии. В своей работе использую только сертифицированные
										гипоаллергенные материалы премиум-класса.
									</p>
									<p className="text-gray-700 text-lg leading-relaxed font-['Inter']">
										Для меня важна не просто техническая сторона процедуры, а комфорт и удовлетворение
										каждого клиента. Я внимательно отношусь к индивидуальным особенностям кожи и всегда
										нахожу оптимальное решение для достижения идеального результата.
									</p>
								</>
							)}

							{activeTab === 'philosophy' && (
								<>
									<p className="text-gray-700 text-lg leading-relaxed font-['Inter']">
										Моя философия работы основана на трёх ключевых принципах: безопасность, комфорт и результат.
										Я верю, что каждая процедура должна приносить не только внешние изменения, но и внутреннее
										удовлетворение.
									</p>
									<div className="space-y-4 mt-6">
										<div className="flex items-start">
											<div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center mr-4 flex-shrink-0">
												<Shield className="text-purple-600" size={20} />
											</div>
											<div>
												<h4 className="font-bold text-gray-900 mb-1 font-['Inter']">Безопасность прежде всего</h4>
												<p className="text-gray-600 font-['Inter']">Строгое соблюдение стерильности и использование только гипоаллергенных материалов</p>
											</div>
										</div>
										<div className="flex items-start">
											<div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center mr-4 flex-shrink-0">
												<Heart className="text-pink-600" size={20} />
											</div>
											<div>
												<h4 className="font-bold text-gray-900 mb-1 font-['Inter']">Индивидуальный подход</h4>
												<p className="text-gray-600 font-['Inter']">Каждый клиент уникален, и я нахожу оптимальные решения для каждого типа кожи</p>
											</div>
										</div>
										<div className="flex items-start">
											<div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center mr-4 flex-shrink-0">
												<Sparkle className="text-rose-600" size={20} />
											</div>
											<div>
												<h4 className="font-bold text-gray-900 mb-1 font-['Inter']">Совершенство в деталях</h4>
												<p className="text-gray-600 font-['Inter']">Внимание к каждой детали для достижения безупречного результата</p>
											</div>
										</div>
									</div>
								</>
							)}
						</div>

						{/* Карточки преимуществ */}
						<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
							{advantages.map((advantage, index) => (
								<div key={index} className="flex items-start p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100">
									<div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mr-4 shadow-sm">
										{advantage.icon}
									</div>
									<p className="text-gray-800 font-medium pt-2 font-['Inter']">{advantage.text}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};


const Footer = () => {
	return (
		<footer className="bg-gradient-to-br from-gray-50 to-purple-50/30 pt-12 pb-8 border-t border-gray-200">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
					<div>
						<div className="flex items-center space-x-3 mb-4">
							<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
								<span className="text-white font-bold text-xl font-['Playfair_Display']">G</span>
							</div>
							<div>
								<span className="text-2xl font-bold font-['Playfair_Display'] bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
									GlowSculpt
								</span>
								<p className="text-gray-500 text-sm font-['Inter']">студия эстетики</p>
							</div>
						</div>
						<p className="text-gray-600 max-w-md text-sm font-['Inter']">
							Профессиональный шугаринг и уход за кожей. Авторские методики,
							премиальные составы и индивидуальный подход к каждому клиенту.
						</p>
					</div>

					<div className="text-right">
						<div className="mb-4">
							<a href="tel:+79161234567" className="text-xl font-bold text-gray-800 hover:text-purple-600 transition-colors font-['Inter']">
								+7 (916) 123-45-67
							</a>
						</div>
						<div className="text-gray-600 mb-2 font-['Inter']">Москва, ул. Тверская, д. 10</div>
						<div className="text-gray-600 font-['Inter']">Ежедневно 10:00 - 20:00</div>

						<div className="flex justify-end space-x-4 mt-4">
							<a href="#" className="w-10 h-10 rounded-xl bg-white border border-gray-300 flex items-center justify-center hover:border-purple-300 hover:bg-purple-50 transition-colors group">
								<Instagram size={20} className="text-gray-600 group-hover:text-purple-600" />
							</a>
							<a href="#" className="w-10 h-10 rounded-xl bg-white border border-gray-300 flex items-center justify-center hover:border-blue-300 hover:bg-blue-50 transition-colors group">
								<Facebook size={20} className="text-gray-600 group-hover:text-blue-600" />
							</a>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-300/50 pt-8 text-center text-gray-500 text-sm">
					<p className="font-['Inter']">© {new Date().getFullYear()} GlowSculpt. Все права защищены.</p>
				</div>
			</div>
		</footer>
	);
};

// Основной компонент App
function App() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-purple-50/30 via-white to-pink-50/30">
			<style>
				{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
          
          /* Стили для плавного скролла */
          html {
            scroll-behavior: smooth;
          }
          
          /* Кастомные анимации */
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out;
          }
          
          .animate-pulse-slow {
            animation: pulse 3s ease-in-out infinite;
          }
        `}
			</style>

			<Header />
			<HeroSection />
			<section id="services" className="container mx-auto px-4 py-16">
				<div className="text-center mb-12">
					<div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4 font-['Inter']">
						<Package size={16} className="mr-2" />
						<span>Наши услуги</span>
					</div>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-['Playfair_Display']">
						Полный спектр услуг
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto text-lg font-['Inter']">
						Профессиональные процедуры с использованием лучших материалов и авторских техник
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
					{services.map((service) => (
						<ServiceCard key={service.id} service={service} />
					))}
				</div>

				<div className="text-center mt-12">
					<a
						href="#contact"
						onClick={(e) => scrollToSection(e, 'contact')}
						className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-medium hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 text-lg font-['Inter']"
					>
						<MessageCircle className="mr-3" />
						Бесплатная консультация
					</a>
				</div>
			</section>


			<AboutSection />

			<section id="contact" className="container mx-auto px-4 py-16">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-['Playfair_Display']">
						Контакты и запись
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto text-lg font-['Inter']">
						Свяжитесь со мной любым удобным способом
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Контактная информация */}
					<div className="space-y-8">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100">
								<div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center mb-4">
									<Phone className="text-purple-600" size={24} />
								</div>
								<div className="text-gray-600 text-sm mb-1 font-['Inter']">Телефон</div>
								<a href="tel:+79161234567" className="text-xl font-bold text-gray-900 hover:text-purple-600 transition-colors font-['Inter']">
									+7 (916) 123-45-67
								</a>
							</div>

							<div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100">
								<div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center mb-4">
									<Mail className="text-purple-600" size={24} />
								</div>
								<div className="text-gray-600 text-sm mb-1 font-['Inter']">Email</div>
								<a href="mailto:anna@businesscardsugaring.ru" className="text-xl font-bold text-gray-900 hover:text-purple-600 transition-colors font-['Inter']">
									anna@businesscardsugaring.ru
								</a>
							</div>

							<div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100">
								<div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center mb-4">
									<MapPin className="text-purple-600" size={24} />
								</div>
								<div className="text-gray-600 text-sm mb-1 font-['Inter']">Адрес студии</div>
								<div className="text-lg font-bold text-gray-900 font-['Inter']">Москва, ул. Тверская, д. 10</div>
								<div className="text-gray-600 text-sm font-['Inter']">(5 минут от м. Тверская)</div>
							</div>

							<div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100">
								<div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center mb-4">
									<Clock className="text-purple-600" size={24} />
								</div>
								<div className="text-gray-600 text-sm mb-1 font-['Inter']">График работы</div>
								<div className="text-lg font-bold text-gray-900 font-['Inter']">Пн-Пт: 10:00 - 20:00</div>
								<div className="text-lg font-bold text-gray-900 font-['Inter']">Сб-Вс: 11:00 - 18:00</div>
							</div>
						</div>

						{/* Социальные сети */}
						<div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
							<h3 className="font-bold text-gray-900 text-lg mb-4 font-['Inter']">Социальные сети</h3>
							<div className="flex space-x-4">
								<a href="#" className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300 group">
									<Instagram className="text-white group-hover:scale-110 transition-transform" size={24} />
								</a>
								<a href="#" className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300 group">
									<Facebook className="text-white group-hover:scale-110 transition-transform" size={24} />
								</a>
							</div>
						</div>
					</div>

					{/* Форма */}
					<AnimatedForm />
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default App;