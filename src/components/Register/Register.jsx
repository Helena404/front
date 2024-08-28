import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, T } from '@admiral-ds/react-ui';
import { RegisterContainer, RegisterModal } from './StyledRegister';
import { validateFields } from './Validation';
import {
    FirstNameInput,
    LastNameInput,
    EmailInput,
    PhoneNumberInputField,
    PasswordInput,
    ConfirmPasswordInput
} from './InputComponents';
import { registerUser } from '../../api/apiService';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('+7');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const validationErrors = validateFields(firstName, lastName, email, phoneNumber, password, confirmPassword);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await registerUser(firstName, lastName, email, phoneNumber, password);

                if (response && response.success) {
                    if (response.token) {
                        localStorage.setItem('jwtToken', response.token);
                    }
                    navigate('/login');
                } else {
                    setErrors({ global: response.message || 'Ошибка регистрации' });
                }
            } catch (error) {
                console.error('Error:', error.message || error);
                setErrors({ global: 'Ошибка регистрации' });
            }
        }
    };

    return (
        <RegisterContainer>
            <RegisterModal>
                <h2>Регистрация</h2>
                <form onSubmit={handleRegister}>
                    <FirstNameInput firstName={firstName} setFirstName={setFirstName} error={errors.firstName} />
                    <LastNameInput lastName={lastName} setLastName={setLastName} error={errors.lastName} />
                    <EmailInput email={email} setEmail={setEmail} error={errors.email} />
                    <PhoneNumberInputField phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} error={errors.phoneNumber} />
                    <PasswordInput password={password} setPassword={setPassword} error={errors.password} />
                    <ConfirmPasswordInput confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} error={errors.confirmPassword} />
                    {errors.global && <p className="error">{errors.global}</p>}
                    <Button type="submit" dimension="m">Зарегистрироваться</Button>
                </form>
                <p>
                    Уже есть аккаунт?{' '}
                    <T as={Link} to="/login" font="Body/Body 1 Long" style={{ color: 'blue' }}>
                        Войти
                    </T>
                </p>
            </RegisterModal>
            <style>{`
				.error {
					color: red;
					font-size: 0.9em;
				}
			`}</style>
        </RegisterContainer>
    );
};

export default Register;
