const LIMITER_MESSAGE = 'Слишком много запросов с этого IP, попоробуйте повторить попытку через 15 минут.';
const WRONG_DATA_MESSAGE = 'Получены некорректные данные';
const FILM_NOT_FOUND_MESSAGE = 'Фильм не найден';
const ACCESS_ERROR_MESSAGE = 'Нет доступа';
const NOT_UNIQ_EMAIL_MESSAGE = 'Пользователь с таким email уже зарегистрирован';
const USER_NOT_FOUND_MESSAGE = 'Пользователь не найден';
const NO_AUTH_MESSAGE = 'Необходима авторизация';
const JWT_ERROR_MESSAGE = 'Ошибка проверки jwt токена';
const COMMON_ERROR_MESSAGE = 'На сервере произошла ошибка';
const DEV_JWT_SECRET = 'a-man-a-plan-a-canal-panama';
const URL_NOT_FOUND_MESSAGE = 'URL не найден';
const WRONG_URL_MESSAGE = 'Получен некорректный URL';

const MOVIE_REQUIRED_COUNTRY_MESSAGE = 'Поле "country" должно быть заполнено';
const MOVIE_REQUIRED_DIRECTOR_MESSAGE = 'Поле "director" должно быть заполнено';
const MOVIE_REQUIRED_DURATION_MESSAGE = 'Поле "duration" должно быть заполнено';
const MOVIE_REQUIRED_YEAR_MESSAGE = 'Поле "year" должно быть заполнено';
const MOVIE_REQUIRED_DESCRIPTION_MESSAGE = 'Поле "description" должно быть заполнено';
const MOVIE_REQUIRED_IMAGE_MESSAGE = 'Поле "image" должно быть заполнено';
const MOVIE_REQUIRED_TRAILER_MESSAGE = 'Поле "trailerLink" должно быть заполнено';
const MOVIE_REQUIRED_THUMBNAIL_MESSAGE = 'Поле "thumbnail" должно быть заполнено';
const MOVIE_REQUIRED_OWNER_MESSAGE = 'Поле "owner" должно быть заполнено';
const MOVIE_REQUIRED_MOVIEID_MESSAGE = 'Поле "movieId" должно быть заполнено';
const MOVIE_REQUIRED_NAMERU_MESSAGE = 'Поле "nameRU" должно быть заполнено';
const MOVIE_REQUIRED_NAMEEN_MESSAGE = 'Поле "nameEN" должно быть заполнено';
const MOVIE_WRONG_URL_MESSAGE = 'Некорректный URL';

const USER_WRONG_EMAIL_MESSAGE = 'Неправильный формат почты';
const USER_WRONG_CREDENTIALS_MESSAGE = 'Неправильный email или пароль';
const USER_NAME_MIN_MESSAGE = 'Минимальная длина поля "name" - 2';
const USER_NAME_MAX_MESSAGE = 'Максимальная длина поля "name" - 30';

const urlPattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;

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
  DEV_JWT_SECRET,
  URL_NOT_FOUND_MESSAGE,
  WRONG_URL_MESSAGE,
  MOVIE_REQUIRED_COUNTRY_MESSAGE,
  MOVIE_REQUIRED_DIRECTOR_MESSAGE,
  MOVIE_REQUIRED_DURATION_MESSAGE,
  MOVIE_REQUIRED_YEAR_MESSAGE,
  MOVIE_REQUIRED_DESCRIPTION_MESSAGE,
  MOVIE_REQUIRED_IMAGE_MESSAGE,
  MOVIE_REQUIRED_TRAILER_MESSAGE,
  MOVIE_REQUIRED_THUMBNAIL_MESSAGE,
  MOVIE_REQUIRED_OWNER_MESSAGE,
  MOVIE_REQUIRED_MOVIEID_MESSAGE,
  MOVIE_REQUIRED_NAMERU_MESSAGE,
  MOVIE_REQUIRED_NAMEEN_MESSAGE,
  MOVIE_WRONG_URL_MESSAGE,
  USER_WRONG_EMAIL_MESSAGE,
  USER_WRONG_CREDENTIALS_MESSAGE,
  USER_NAME_MIN_MESSAGE,
  USER_NAME_MAX_MESSAGE,
  urlPattern,
};
