export type Language = 'eng' | 'esp';

export type LanguageContextType = {
    language: Language;
    changeLanguage: (language: Language) => void;
};