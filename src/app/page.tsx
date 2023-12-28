import ArticleList from '@/components/Article/ArticleList';
import Banner from '@/components/Banner';

export default function Home() {
  return (
    <div>
      <Banner />
      <section className='px-10 pt-10 pb-20'>
        <ArticleList />
      </section>
    </div>
  );
}
