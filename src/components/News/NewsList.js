import News from './News';

// Компонент Блок Новостей

function NewsList(props) {
  return (
    <div className="news-list">
      <News>
        <img className='image' src={props.img} alt=''/>
        <p className="news-item">{props.news1}</p>
      </News>
      <News>
        <img className='image' src={props.img} alt=''/>
        <p className="news-item">{props.news2}</p>
      </News>
      <News>
        <img className='image' src={props.img} alt=''/>
        <p className="news-item">{props.news3}</p>
      </News>
    </div>
  );
}

export default NewsList;
