import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { InputField, Button, T } from '@admiral-ds/react-ui';
import { loginUser } from '../../api/apiService';
import { LoginContainer, LoginModal, FormGroup, Label } from './StyledLogin';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/authSlice';

const Login = ({ redirectTo = '/' }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const validateFields = () => {
        const validationErrors = {};
        if (!email.trim()) {
            validationErrors.email = 'Email обязателен';
        }
        if (!password.trim()) {
            validationErrors.password = 'Пароль обязателен';
        }
        return validationErrors;
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const validationErrors = validateFields();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await loginUser(email, password);

            if (response.token) {
                localStorage.setItem('jwtToken', response.token);

                // Сохраняем пользователя и его права доступа в Redux
                dispatch(setUser({ user: response.user, permissions: response.permissions }));

                navigate(redirectTo); // Перенаправление на указанный в redirectTo путь
            } else {
                setErrors({ global: response.message || 'Ошибка авторизации' });
            }
        } catch (error) {
            console.error('Ошибка авторизации:', error.message || error);
            setErrors({ global: 'Ошибка авторизации' });
        }
    };

    return (
        <LoginContainer>
            <LoginModal>
                <h2>Вход</h2>
                <form onSubmit={handleLogin}>
                    <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <InputField
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Введите ваш email"
                            required
                            autoComplete="email"
                            maxLength={30}
                            status={errors.email ? 'error' : ''}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </FormGroup>
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
                            status={errors.password ? 'error' : ''}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </FormGroup>
                    {errors.global && <p className="error">{errors.global}</p>}
                    <Button type="submit" dimension="m">
                        Войти
                    </Button>
                </form>
                <p>
                    Нет аккаунта?{' '}
                    <T as={Link} to="/register" font="Body/Body 1 Long" style={{ color: 'blue' }}>
                        Зарегистрироваться
                    </T>
                </p>
            </LoginModal>
            <style jsx>{`
                .error {
                    color: red;
                    font-size: 0.9em;
                }
            `}</style>
        </LoginContainer>
    );
};

export default Login;
