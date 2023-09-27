import TopicList from './СurrentTopics/TopicList';
import Widgets from './Widgets/Widgets';
import Promo from './Promo/Promo';
import Search from './Search/Search';
import NewsList from './News/NewsList';
import SubjectList from './Subjects/SubjectList';
import '../style/page.css';

function Page() {
let dataTopics = {
  topic1: 'Topic1',
  topic2: 'Topic2',
  topic3: 'Topic3',
}

let dataWidgets = {
  wid1: 'Wid1',
  wid2: 'Wid2',
  wid3: 'Wid3',
}

let dataSubjects = {
  subject1: 'Subject1',
  subject2: 'Subject2',
  subject3: 'Subject3',
}

let dataNews = {
  news1: 'News1',
  news2: 'News2',
  news3: 'News3',
  img: 'https://play-lh.googleusercontent.com/3yY5IVL0wXkVMCRtgKUr45zZQPgttu4phoynUjkcrdzo-4z_FGDDlnW47jKWf4I_p_I=w32'
}

  return (
    <div className="page">
      <div>
        <TopicList {...dataTopics}/>
      </div>
      <div>
        <NewsList {...dataNews}/>
      </div>
      <div>
        <SubjectList {...dataSubjects}/>
      </div>
      <div>
        <Search titleBtn={'Найти'} placeholder={'search...'}/>
      </div>
      <div>
        <Promo
          img={
            'https://i.artfile.ru/s/1037528_120516_17_ArtFile_ru.jpg'
          }
        />
      </div>
      <div>
        <Widgets {...dataWidgets}/>
      </div>
    </div>
  );
}

export default Page;
