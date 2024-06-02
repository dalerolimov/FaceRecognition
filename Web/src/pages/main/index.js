import Header from './header';
import Content from './content';
import Footer from './footer';

function Main() {
  return (
    <div className=" bg-[#FFF] flex flex-col h-screen justify-between">
      <header className="h-[72px]">
        <Header></Header>
      </header>
      <main className="mb-auto ">
        <Content></Content>
      </main>
      <footer className="h-10 bg-blue-500">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default Main;
