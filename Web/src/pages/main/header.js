import logo from '../../assets/logo/face_ai.svg';

function Header() {
  return (
    <div className="flex justify-between p-[16px] items-center bg-[#F3F3F3] font-sans font-medium text-[#6C757D] text-[16px]">
      <div className="flex items-center">
        <img src={logo} alt="" className="w-[56px] h-[56px]" />
        <p className="text-[#000] ml-[14.45px]">FACE_AI</p>
      </div>
      <div>
        <a className="mr-[15px]" href="#about">
          О приложении
        </a>

        <a className="mr-[15px]" href="#related">
          Похожие приложения
        </a>

        <a className="mr-[15px]" href="">
          Демонстрация
        </a>

        <a className="mr-[15px]" href="#advantages">
          Преимущества
        </a>
        <button className="h-[38px] py-[5px] px-[25px] border-[1px] bg-[#0D6EFD] rounded-[4px]">
          <a className="text-[#fff]" href="https://github.com/khusravkhon/admin_face_ia">
            Скачать FACE_AI
          </a>
        </button>
      </div>
    </div>
  );
}

export default Header;
