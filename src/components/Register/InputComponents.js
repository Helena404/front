// src/components/Register/InputComponents.js

import React from 'react';
import { InputField, PhoneNumberInput } from '@admiral-ds/react-ui';
import { FormGroup, Label } from './StyledRegister';

export const FirstNameInput = ({ firstName, setFirstName, error }) => (
    <FormGroup>
        <Label htmlFor="firstName">Имя</Label>
        <InputField
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Введите ваше имя"
            maxLength={20}
            required
            status={error ? 'error' : ''}
        />
        {error && <p className="error">{error}</p>}
    </FormGroup>
);

export const LastNameInput = ({ lastName, setLastName, error }) => (
    <FormGroup>
        <Label htmlFor="lastName">Фамилия</Label>
        <InputField
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Введите вашу фамилию"
            maxLength={20}
            required
            status={error ? 'error' : ''}
        />
        {error && <p className="error">{error}</p>}
    </FormGroup>
);

export const EmailInput = ({ email, setEmail, error }) => (
    <FormGroup>
        <Label htmlFor="email">Email</Label>
        <InputField
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите ваш email"
            required
            autoComplete="email"
            maxLength={30}
            status={error ? 'error' : ''}
        />
        {error && <p className="error">{error}</p>}
    </FormGroup>
);

export const PhoneNumberInputField = ({ phoneNumber, setPhoneNumber, error }) => {
    const handlePhoneNumberChange = (event) => {
		// Получаем значение из объекта события
		let value = event.target.value;
	
		// Логика корректировки номера
		if (value.startsWith('+8')) {
			value = '+7' + value.slice(2);
		} else if (!value.startsWith('+7')) {
			value = '+7' + value.replace(/^\+/, '');
		}
	
		// Устанавливаем значение номера в состояние
		setPhoneNumber(value);
	};
	

	
    return (
        <FormGroup>
            <Label htmlFor="phoneNumber">Номер телефона</Label>
            <PhoneNumberInput
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                dimension="m"
                defaultCountry="RUS"
                required
                status={error ? 'error' : ''}
            />
            {error && <p className="error">{error}</p>}
        </FormGroup>
    );
};

export const PasswordInput = ({ password, setPassword, error }) => (
    <FormGroup>
        <Label htmlFor="password">Пароль</Label>
        <InputField
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            required
            autoComplete="current-password"
            maxLength={30}
            status={error ? 'error' : ''}
        />
        {error && <p className="error">{error}</p>}
    </FormGroup>
);

export const ConfirmPasswordInput = ({ confirmPassword, setConfirmPassword, error }) => (
    <FormGroup>
        <Label htmlFor="confirmPassword">Подтверждение пароля</Label>
        <InputField
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Подтвердите пароль"
            required
            autoComplete="current-password"
            maxLength={30}
            status={error ? 'error' : ''}
        />
        {error && <p className="error">{error}</p>}
    </FormGroup>
);
