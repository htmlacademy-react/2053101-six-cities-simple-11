import { REVIEW_RATING_STARS } from '../../const';
import { useState, ChangeEvent } from 'react';

function Review(): JSX.Element {
  const [review, setReview] = useState({
    comment: '',
    rating: 0
  });

  const handleTextAreaInput = (evt: ChangeEvent<HTMLTextAreaElement>): void => {
    setReview({
      ...review,
      comment: evt.target.value
    });
  };

  const handleRadioButtonClick = (star: number): void => {
    setReview({
      ...review,
      rating: star
    });
  };

  return(
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          Object.values(REVIEW_RATING_STARS).map(({value, title}) => (
            <label
              htmlFor={`${value}-star`}
              className="reviews__rating-label form__rating-label"
              title={title}
              key={value}
            >
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={`${value}-star`}
                id={`${value}-star`}
                type="radio"
                onClick={() => handleRadioButtonClick(value)}
              />
              <svg
                className="form__star-image"
                width="37"
                height="33"
              >
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          ))
        }

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onInput={handleTextAreaInput}
      >

      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set
          <span className="reviews__star">
            rating
          </span> and describe your stay with at least
          <b className="reviews__text-amount">
            50 characters
          </b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Review;
