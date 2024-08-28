// src/components/Register/Validation.js

export const validateFields = (firstName, lastName, email, phoneNumber, password, confirmPassword) => {
    let errors = {};

    const trimmedFirstName = firstName.trim();
    if (!trimmedFirstName) {
        errors.firstName = 'Имя обязательно';
    } else if (/[^a-zA-Zа-яА-ЯёЁ]/.test(trimmedFirstName)) {
        errors.firstName = 'Имя должно содержать только буквы';
    } else if (trimmedFirstName.length > 20) {
        errors.firstName = 'Имя должно содержать не более 20 символов';
    }

    const trimmedLastName = lastName.trim();
    if (!trimmedLastName) {
        errors.lastName = 'Фамилия обязательна';
    } else if (/[^a-zA-Zа-яА-ЯёЁ]/.test(trimmedLastName)) {
        errors.lastName = 'Фамилия должна содержать только буквы';
    } else if (trimmedLastName.length > 20) {
        errors.lastName = 'Фамилия должна содержать не более 20 символов';
    }

    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]{4,33}@[^\s@]+\.[a-zA-Z]+$/;
    const domainRegex = /@[a-zA-Z]+\.[a-zA-Z]+$/;
    if (!trimmedEmail) {
        errors.email = 'Email обязателен';
    } else if (/\s/.test(trimmedEmail)) {
        errors.email = 'Email не должен содержать пробелы';
    } else if (!emailRegex.test(trimmedEmail)) {
        errors.email = 'Неверный формат email. Длина части до @ должна быть от 4 до 33 символов.';
    } else if (!domainRegex.test(trimmedEmail)) {
        errors.email = 'Часть после @ и домен должны содержать только буквы.';
    }

    if (phoneNumber.trim() === '+7' || phoneNumber.length > 15) {
        errors.phoneNumber = 'Введите корректный номер телефона.';
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
        errors.password = 'Пароль должен содержать минимум 6 символов, включая латинские буквы и цифры.';
    }

    if (password !== confirmPassword) {
        errors.confirmPassword = 'Пароли не совпадают';
    }

    return errors;
};
