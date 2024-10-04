import en from '@/translations/en.json';
import ru from '@/translations/ru.json';
import cookie from 'js-cookie';
const translations: {
	[key: string]: any;
} = { en, ru };

const useTranslation = () => {
	const language = cookie.get('language') || 'ru';
	const languages = ['ru', 'en'];

	const translate = (key: string) => {
		const keys = key.split('.');
		return keys.reduce((obj, key) => {
			return obj?.[key];
		}, translations[language]);
	};

	const setLanguage = (language: 'ru' | 'en') => {
		cookie.set('language', language);
	};

	const toggleLanguage = () => {
		const newLanguage = language === 'ru' ? 'en' : 'ru';
		setLanguage(newLanguage);
	};

	return { t: translate, language, languages, setLanguage, toggleLanguage };
};

export default useTranslation;
