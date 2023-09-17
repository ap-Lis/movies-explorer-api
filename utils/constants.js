const LIMITER_MESSAGE = 'Слишком много запросов с этого IP, попоробуйте повторить попытку через 15 минут.';
const WRONG_DATA_MESSAGE = 'Получены некорректные данные';
const FILM_NOT_FOUND_MESSAGE = 'Фильм не найден';
const ACCESS_ERROR_MESSAGE = 'Нет доступа';
const NOT_UNIQ_EMAIL_MESSAGE = 'Пользователь с таким email уже зарегистрирован';
const USER_NOT_FOUND_MESSAGE = 'Пользователь не найден';
const NO_AUTH_MESSAGE = 'Необходима авторизация';
const JWT_ERROR_MESSAGE = 'Ошибка проверки jwt токена';
const COMMON_ERROR_MESSAGE = 'На сервере произошла ошибка';
const WRONG_CREDENTIALS_MESSAGE = 'Неправильный email или пароль';
const DEV_JWT_SECRET = 'a-man-a-plan-a-canal-panama';
const URL_NOT_FOUND_MESSAGE = 'URL не найден';

module.exports = {
  LIMITER_MESSAGE,
  WRONG_DATA_MESSAGE,
  FILM_NOT_FOUND_MESSAGE,
  ACCESS_ERROR_MESSAGE,
  NOT_UNIQ_EMAIL_MESSAGE,
  USER_NOT_FOUND_MESSAGE,
  NO_AUTH_MESSAGE,
  JWT_ERROR_MESSAGE,
  COMMON_ERROR_MESSAGE,
  WRONG_CREDENTIALS_MESSAGE,
  DEV_JWT_SECRET,
  URL_NOT_FOUND_MESSAGE,
};
