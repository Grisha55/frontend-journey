/**
 * Тип для изображения в модальном окне
 */
export type ModalImage = {
  source: string;
  description: string;
};

/**
 * Типы полей формы
 */
export type FormFieldType = 'text' | 'tel' | 'email' | 'select' | 'checkbox';

/**
 * Базовый тип для поля формы
 */
type BaseFormField = {
  id: string;
  label: string;
};

/**
 * Текстовые поля (text, tel, email)
 */
export type TextFormField = BaseFormField & {
  type: 'text' | 'tel' | 'email';
};

/**
 * Поле select
 */
export type SelectFormField = BaseFormField & {
  type: 'select';
  options: Array<{
    value: string;
    text: string;
  }>;
};

/**
 * Чекбокс
 */
export type CheckboxFormField = BaseFormField & {
  type: 'checkbox';
};

/**
 * Объединенный тип для всех полей формы
 */
export type FormField = TextFormField | SelectFormField | CheckboxFormField;

/**
 * Основной тип для модального окна
 */
export type Modal = {
  image: ModalImage;
  title: string;
  formFields: FormField[];
  privacyPolicyUrl: string;
  submitButtonText: string;
};