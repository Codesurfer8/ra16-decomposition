//Компонент создает новостной элемент

function News(props) {
  return <div className='news'>{props.children}</div>;
}

export default News;
