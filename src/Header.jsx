import { useEffect, useState } from "react";
import {
	Phone,
	Mail,
	ChevronRight,
	Menu,
	X,
	Calendar
} from 'lucide-react';
import { FacebookIcon, FeatherLogo, HeartLogo, InstagramIcon, MinimalLogo, RosePetalLogo } from './constants/icons';


export const HeaderVariant1 = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
			<div className="container mx-auto px-4 py-3">
				<div className="flex justify-between items-center">
					{/* Левая часть - контакты (только на десктопе) */}
					<div className="hidden md:flex items-center space-x-4">
						<a
							href="tel:+79161234567"
							className="text-gray-700 hover:text-pink-600 flex items-center text-sm"
						>
							<Phone size={16} className="mr-2" />
							<span>+7 (916) 123-45-67</span>
						</a>
					</div>

					{/* Центр - логотип */}
					<div className="flex-1 flex justify-center md:justify-start">
						<div className="flex items-center space-x-2">
							<div className="relative">
								{/* Анимированный логотип с градиентным кругом */}
								<div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center animate-pulse-slow">
									<span className="text-white font-bold text-lg">S</span>
								</div>
								{/* Анимация пульсации вокруг лого */}
								<div className="absolute inset-0 border-2 border-pink-300 rounded-full animate-ping opacity-50"></div>
							</div>
							<div>
								<h1 className="text-xl font-bold text-gray-900">GlowSculpt</h1>
								<p className="text-xs text-gray-500 hidden md:block">Профессиональный шугаринг</p>
							</div>
						</div>
					</div>

					{/* Правая часть - меню и кнопка */}
					<div className="flex items-center space-x-3">
						{/* Навигация на десктопе */}
						<nav className="hidden md:flex space-x-6 mr-4">
							<a href="#services" className="text-gray-700 hover:text-pink-600 text-sm font-medium">Услуги</a>
							<a href="#about" className="text-gray-700 hover:text-pink-600 text-sm font-medium">Обо мне</a>
							<a href="#contact" className="text-gray-700 hover:text-pink-600 text-sm font-medium">Запись</a>
						</nav>

						{/* Кнопка записи */}
						<a
							href="#contact"
							className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-shadow hidden md:block"
						>
							Записаться
						</a>

						{/* Бургер-меню для мобильных */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-pink-50"
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Мобильное меню */}
			{isMenuOpen && (
				<div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-slide-down">
					<div className="container mx-auto px-4 py-4">
						<div className="grid grid-cols-2 gap-4">
							<a href="#services" className="p-3 rounded-lg hover:bg-pink-50 flex items-center">
								<div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mr-3">
									<span className="text-pink-600">✧</span>
								</div>
								<div>
									<div className="font-medium">Услуги</div>
									<div className="text-xs text-gray-500">Процедуры</div>
								</div>
							</a>
							<a href="#about" className="p-3 rounded-lg hover:bg-pink-50 flex items-center">
								<div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mr-3">
									<span className="text-pink-600">◈</span>
								</div>
								<div>
									<div className="font-medium">Обо мне</div>
									<div className="text-xs text-gray-500">Опыт 10+ лет</div>
								</div>
							</a>
							<a href="#contact" className="p-3 rounded-lg hover:bg-pink-50 flex items-center col-span-2">
								<div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mr-3">
									<Phone size={18} className="text-white" />
								</div>
								<div>
									<div className="font-medium">Запись онлайн</div>
									<div className="text-xs text-gray-500">Быстро и удобно</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}

// HeaderVariant2.jsx
export const HeaderVariant2 = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl">
			<div className="container mx-auto px-4 py-3">
				<div className="flex justify-between items-center">
					{/* Логотип с анимацией */}
					<div className="flex items-center space-x-3">
						<div className="relative">
							{/* Анимированное свечение */}
							<div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full blur opacity-70 animate-pulse"></div>
							{/* Основной логотип */}
							<div className="relative w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center border-2 border-transparent bg-clip-padding">
								<div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
									<span className="text-white font-bold text-lg">SL</span>
								</div>
							</div>
						</div>
						<div>
							<h1 className="text-xl font-bold">GlowSculpt</h1>
							<p className="text-xs text-gray-300 hidden md:block">Мастер шугаринга</p>
						</div>
					</div>

					{/* Навигация на десктопе */}
					<nav className="hidden md:flex items-center space-x-8">
						<a href="#services" className="text-gray-300 hover:text-white transition-colors relative group">
							Услуги
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
						</a>
						<a href="#about" className="text-gray-300 hover:text-white transition-colors relative group">
							Опыт
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
						</a>
						<a href="#advantages" className="text-gray-300 hover:text-white transition-colors relative group">
							Преимущества
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
						</a>
						<a href="#contact" className="text-gray-300 hover:text-white transition-colors relative group">
							Контакты
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
						</a>
					</nav>

					{/* Правая часть */}
					<div className="flex items-center space-x-4">
						{/* Кнопка записи */}
						<a
							href="#contact"
							className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-pink-500/30 transition-all hidden md:block"
						>
							Записаться
						</a>

						{/* Телефон на мобильных */}
						<a
							href="tel:+79161234567"
							className="md:hidden bg-gradient-to-r from-pink-500 to-rose-500 text-white p-2 rounded-full"
						>
							<Phone size={20} />
						</a>

						{/* Бургер-меню */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-700"
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Мобильное меню */}
			{isMenuOpen && (
				<div className="md:hidden bg-gray-800 border-t border-gray-700">
					<div className="container mx-auto px-4 py-4">
						<div className="space-y-2">
							<a href="#services" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700">
								<div className="flex items-center">
									<div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center mr-3">
										<span className="text-pink-400">✦</span>
									</div>
									<span>Услуги и цены</span>
								</div>
								<ChevronRight size={16} className="text-gray-400" />
							</a>
							<a href="#about" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700">
								<div className="flex items-center">
									<div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center mr-3">
										<span className="text-pink-400">★</span>
									</div>
									<span>Мой опыт</span>
								</div>
								<ChevronRight size={16} className="text-gray-400" />
							</a>
							<a href="#contact" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700">
								<div className="flex items-center">
									<div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mr-3">
										<Calendar size={18} className="text-white" />
									</div>
									<span>Запись онлайн</span>
								</div>
								<ChevronRight size={16} className="text-gray-400" />
							</a>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}

// HeaderVariant3.jsx
export const HeaderVariant3 = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 bg-white shadow-md">
			{/* Верхняя полоска с контактами */}
			<div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm">
				<div className="container mx-auto px-4 py-2">
					<div className="flex justify-between items-center">
						<div className="flex items-center space-x-4">
							<a href="tel:+79161234567" className="flex items-center hover:text-gray-100">
								<Phone size={14} className="mr-2" />
								<span>+7 (916) 123-45-67</span>
							</a>
							<span className="hidden md:inline">|</span>
							<a href="mailto:anna@businesscardsugaring.ru" className="hidden md:flex items-center hover:text-gray-100">
								<Mail size={14} className="mr-2" />
								<span>anna@businesscardsugaring.ru</span>
							</a>
						</div>
						<div className="flex items-center space-x-3">
							<a href="#" className="hover:text-gray-100">
								<InstagramIcon size={16} />
							</a>
							<a href="#" className="hover:text-gray-100">
								<FacebookIcon size={16} />
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Основной header */}
			<div className="bg-white">
				<div className="container mx-auto px-4 py-3">
					<div className="flex justify-between items-center">
						{/* Логотип с текстом */}
						<div className="flex items-center space-x-3">
							<div className="relative">
								{/* Анимация вращения */}
								<div className="w-10 h-10 rounded-full border-2 border-pink-200 flex items-center justify-center animate-spin-slow">
									<div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"></div>
								</div>
								{/* Статичный центр */}
								<div className="absolute inset-0 flex items-center justify-center">
									<span className="text-white font-bold text-sm">S</span>
								</div>
							</div>
							<div>
								<h1 className="text-xl font-bold text-gray-900">GlowSculpt Studio</h1>
								<p className="text-xs text-gray-500">Студия эстетики'</p>
							</div>
						</div>

						{/* Навигация на десктопе */}
						<nav className="hidden md:flex items-center space-x-1">
							{[
								{ name: 'Главная', href: '#', icon: '🏠' },
								{ name: 'Услуги', href: '#services', icon: '✧' },
								{ name: 'Цены', href: '#prices', icon: '₽' },
								{ name: 'Отзывы', href: '#reviews', icon: '★' },
								{ name: 'Контакты', href: '#contact', icon: '📞' },
							].map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="flex flex-col items-center px-4 py-2 rounded-lg hover:bg-pink-50 group"
								>
									<span className="text-lg mb-1">{item.icon}</span>
									<span className="text-sm font-medium text-gray-700 group-hover:text-pink-600">{item.name}</span>
								</a>
							))}
						</nav>

						{/* Кнопка записи и меню */}
						<div className="flex items-center space-x-3">
							<a
								href="#contact"
								className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-5 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all hidden md:flex items-center"
							>
								<Calendar size={18} className="mr-2" />
								Онлайн-запись
							</a>

							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-pink-50"
							>
								{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Мобильное меню */}
			{isMenuOpen && (
				<div className="md:hidden bg-white border-t border-gray-100 shadow-inner">
					<div className="container mx-auto px-4 py-6">
						<div className="space-y-4">
							<div className="text-center mb-6">
								<div className="w-16 h-16 mx-auto bg-gradient-to-r from-pink-100 to-rose-100 rounded-full flex items-center justify-center mb-3">
									<Phone size={24} className="text-pink-600" />
								</div>
								<a href="tel:+79161234567" className="text-xl font-bold text-gray-900 block">+7 (916) 123-45-67</a>
								<p className="text-gray-500 text-sm mt-1">Звоните с 10:00 до 20:00</p>
							</div>

							<div className="grid grid-cols-2 gap-3">
								<a href="#services" className="bg-pink-50 p-4 rounded-xl text-center hover:bg-pink-100">
									<div className="text-2xl mb-2">✧</div>
									<div className="font-medium">Услуги</div>
								</a>
								<a href="#prices" className="bg-pink-50 p-4 rounded-xl text-center hover:bg-pink-100">
									<div className="text-2xl mb-2">₽</div>
									<div className="font-medium">Цены</div>
								</a>
								<a href="#about" className="bg-pink-50 p-4 rounded-xl text-center hover:bg-pink-100">
									<div className="text-2xl mb-2">⭐</div>
									<div className="font-medium">Опыт</div>
								</a>
								<a href="#contact" className="bg-pink-50 p-4 rounded-xl text-center hover:bg-pink-100">
									<div className="text-2xl mb-2">📅</div>
									<div className="font-medium">Запись</div>
								</a>
							</div>

							<a
								href="#contact"
								className="block w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-xl text-center font-medium mt-4"
							>
								Записаться онлайн
							</a>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
// HeaderVariant4.jsx
export const HeaderVariant4 = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${scrolled
			? 'bg-white/90 shadow-lg'
			: 'bg-white/80'
			}`}>
			<div className="container mx-auto px-4 py-3">
				<div className="flex justify-between items-center">
					{/* Логотип с анимацией переливания */}
					<div className="flex items-center space-x-3 group">
						<div className="relative">
							{/* Градиентная анимация */}
							<div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 bg-size-200 animate-gradient-x"></div>
							{/* Белый круг поверх */}
							<div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
								<span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent font-bold text-lg">S</span>
							</div>
						</div>
						<div>
							<h1 className="text-xl font-bold text-gray-900">GlowSculpt</h1>
							<p className="text-xs text-gray-500">Студия депиляции</p>
						</div>
					</div>

					{/* Навигация на десктопе */}
					<nav className="hidden md:flex items-center space-x-1 bg-white/50 rounded-full p-1">
						{['Главная', 'Услуги', 'Цены', 'Обо мне', 'Контакты'].map((item, index) => (
							<a
								key={item}
								href={`#${item.toLowerCase().replace(' ', '-')}`}
								className="px-5 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-white transition-all"
							>
								{item}
							</a>
						))}
					</nav>

					{/* Правая часть */}
					<div className="flex items-center space-x-3">
						{/* Инстаграм на десктопе */}
						<a href="#" className="hidden md:block p-2 hover:bg-pink-50 rounded-full">
							<InstagramIcon size={20} className="text-gray-700" />
						</a>

						{/* Кнопка записи */}
						<a
							href="#contact"
							className="hidden md:block bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all"
						>
							Записаться
						</a>

						{/* Компактная кнопка на мобильных */}
						<a
							href="tel:+79161234567"
							className="md:hidden bg-gradient-to-r from-pink-500 to-rose-500 text-white p-2.5 rounded-full"
						>
							<Phone size={20} />
						</a>

						{/* Меню */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-pink-50"
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Мобильное меню с эффектом морфинга */}
			{isMenuOpen && (
				<div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 animate-slide-down">
					<div className="container mx-auto px-4 py-6">
						<div className="space-y-1">
							<a href="#services" className="flex items-center justify-between p-4 rounded-xl hover:bg-pink-50 group">
								<div className="flex items-center">
									<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
										<span className="text-pink-600 text-lg">✦</span>
									</div>
									<div>
										<div className="font-medium text-gray-900">Услуги</div>
										<div className="text-sm text-gray-500">Шугаринг всех зон</div>
									</div>
								</div>
								<ChevronRight size={18} className="text-gray-400 group-hover:text-pink-500" />
							</a>

							<a href="#prices" className="flex items-center justify-between p-4 rounded-xl hover:bg-pink-50 group">
								<div className="flex items-center">
									<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
										<span className="text-pink-600 text-lg">₽</span>
									</div>
									<div>
										<div className="font-medium text-gray-900">Цены</div>
										<div className="text-sm text-gray-500">От 500 ₽</div>
									</div>
								</div>
								<ChevronRight size={18} className="text-gray-400 group-hover:text-pink-500" />
							</a>

							<a href="#contact" className="flex items-center justify-between p-4 rounded-xl hover:bg-pink-50 group mt-4">
								<div className="flex items-center">
									<div className="w-10 h-10 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
										<Calendar size={20} className="text-white" />
									</div>
									<div>
										<div className="font-medium text-gray-900">Онлайн-запись</div>
										<div className="text-sm text-gray-500">Быстро и удобно</div>
									</div>
								</div>
								<div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1 rounded-full text-sm">
									Скидка 15%
								</div>
							</a>
						</div>
					</div>
				</div>
			)}
		</header>
	);
};

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-xl' : 'bg-gradient-to-r from-gray-900 to-gray-800'}`}>
			<div className="container mx-auto px-4 py-3">
				<div className="flex justify-between items-center">
					{/* Логотип с анимацией */}
					<div className="flex items-center space-x-3">
						<div className="relative">
							{/* Анимированное свечение */}
							<div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full blur opacity-70 animate-pulse"></div>
							{/* Основной логотип */}
							<div className="relative w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center border-2 border-transparent bg-clip-padding">
								<div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
									<span className="text-white font-bold text-lg font-serif">SL</span>
								</div>
							</div>
						</div>
						<div>
							<h1 className="text-xl font-bold text-white font-serif">GlowSculpt</h1>
							<p className="text-xs text-gray-300 hidden md:block">Мастер шугаринга</p>
						</div>
					</div>

					{/* Навигация на десктопе */}
					<nav className="hidden md:flex items-center space-x-8">
						<a href="#services" className="text-gray-300 hover:text-white transition-colors relative group font-medium">
							Услуги
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
						</a>
						<a href="#about" className="text-gray-300 hover:text-white transition-colors relative group font-medium">
							Опыт
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
						</a>
						<a href="#advantages" className="text-gray-300 hover:text-white transition-colors relative group font-medium">
							Преимущества
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
						</a>
						<a href="#contact" className="text-gray-300 hover:text-white transition-colors relative group font-medium">
							Контакты
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
						</a>
					</nav>

					{/* Правая часть */}
					<div className="flex items-center space-x-4">
						{/* Кнопка записи */}
						<a
							href="#contact"
							className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-pink-500/30 transition-all hidden md:block"
						>
							Записаться
						</a>

						{/* Телефон на мобильных */}
						<a
							href="tel:+79161234567"
							className="md:hidden bg-gradient-to-r from-pink-500 to-rose-500 text-white p-2 rounded-full"
						>
							<Phone size={20} />
						</a>

						{/* Бургер-меню */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-700"
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Мобильное меню */}
			{isMenuOpen && (
				<div className="md:hidden bg-gray-800 border-t border-gray-700 animate-slide-down">
					<div className="container mx-auto px-4 py-4">
						<div className="space-y-2">
							<a href="#services" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>
								<div className="flex items-center">
									<div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center mr-3">
										<span className="text-pink-400">✦</span>
									</div>
									<span className="text-white">Услуги и цены</span>
								</div>
								<ChevronRight size={16} className="text-gray-400" />
							</a>
							<a href="#about" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>
								<div className="flex items-center">
									<div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center mr-3">
										<span className="text-pink-400">★</span>
									</div>
									<span className="text-white">Мой опыт</span>
								</div>
								<ChevronRight size={16} className="text-gray-400" />
							</a>
							<a href="#contact" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>
								<div className="flex items-center">
									<div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mr-3">
										<Calendar size={18} className="text-white" />
									</div>
									<span className="text-white">Запись онлайн</span>
								</div>
								<ChevronRight size={16} className="text-gray-400" />
							</a>
						</div>
					</div>
				</div>
			)}
		</header>
	);
};