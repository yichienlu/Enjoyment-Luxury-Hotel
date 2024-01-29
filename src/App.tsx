// import { useState } from 'react'
import { Link } from "react-router-dom";

function App() {
  return (
    <>
     <header className="w-full flex items-center justify-between text-white fixed top-0 px-3 lg:px-20 py-4 lg:py-6 z-20">
      <a href="#">
        <img src="./images/logo-white.png" alt="" className="h-10 lg:h-[72px]" />
      </a>
      <button className="lg:hidden">三</button>
      <div className="hidden lg:flex gap-4">
        <a href="#" className="block p-4 hover:text-primary-100">客房旅宿</a>
        <Link to="/login" className="block p-4 hover:text-primary-100">會員登入</Link>
        <button className="block py-4 px-8 bg-primary-100 hover:bg-primary-120 rounded-lg">立即訂房</button>
      </div>
    </header>
    <section id="banner" className="h-[100vh] relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559599238-308793637427')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] px-5 lg:px-20">
        <div className="flex flex-col lg:flex-row z-20 h-full justify-center items-center pt-20 pb-10">
          <div className="lg:grow lg:shrink text-primary-100 font-bold lg:mb-0 ">
            <h2 className="text-[40px] mb-2 text-center lg:text-left">享樂酒店</h2>
            <h3 className="text-2xl mb-10 text-center lg:text-left">Enjoyment Luxury Hotel</h3>
            <div className="hidden lg:block h-0.5 bg-gradient-primary"></div>
          </div>
          <div className="lg:hidden w-0.5 grow shrink mx-auto bg-gradient-primary-vertical max-h-20 mb-10"></div>
          <div className="ml-20 md:ml-30 2xl:ml-50 text-white py-15 lg:py-24 2xl:px-16 bg-[linear-gradient(180deg,#FFF0_0%,#FFF5_100%)] backdrop-blur-md border-t border-r border-white border-solid rounded-[40px] lg:rounded-[80px] relative">
            <h3 className="text-5xl lg:text-6xl 2xl:text-[100px] leading-tight font-bold mb-6 -translate-x-16 2xl:-translate-x-30">高雄<br />豪華住宿之選</h3>
            <p className="mb-10 lg:mb-15 lg:text-xl 2xl:text-[32px] lg:whitespace-nowrap tracking-widest -translate-x-16 2xl:-translate-x-30">我們致力於為您提供無與倫比的奢華體驗與優質服務</p>
            <button className="w-full p-5 lg:p-8 2xl:p-10 bg-white hover:bg-primary-100 text-black hover:text-white text-2xl font-bold rounded-lg -translate-x-16 2xl:-translate-x-30 duration-200">立即訂房</button>
          </div>
        </div>
      </div>
      <div className="absolute flex gap-2 bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-15 h-1 bg-primary-100 rounded-full"></div>
          <div className="w-8 h-1 bg-primary-40 rounded-full"></div>
          <div className="w-8 h-1 bg-primary-40 rounded-full"></div>
          <div className="w-8 h-1 bg-primary-40 rounded-full"></div>
      </div>
    </section>
    {/* 最新消息 */}
    <section id="news" className="bg-primary-10  py-20 lg:py-30 px-5 lg:px-20 relative">
      <img src="./images/desktop-deco-dot.png" alt="" className="hidden lg:block w-50 h-50 absolute left-50 -bottom-20" />
      <img src="./images/desktop-deco-dot.png" alt="" className="hidden lg:block w-50 h-50 absolute right-[180px] top-[100px]" />
      <div className="container lg:flex ">
        <div className="mr-20 mb-10 lg:mb-0">
          <h2 className="text-[32px] lg:text-[48px] text-primary-100 tracking-[2.4px] font-bold">最新<br />消息</h2>
          <div className="w-[140px] h-[2px] bg-gradient-primary mt-6 lg:mt-10"></div>
        </div>
        <div className="text-black"> 
          <a href="#" className="block lg:flex items-center mb-10 group duration-200">
            <div className="lg:w-5/12 h-[294px] mb-6 lg:mb-0 lg:mr-6 shrink-0 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1615722440048-da4ccf6de048')] bg-center bg-cover group-hover:scale-105 duration-200"></div>
            </div>
            <div>
              <h3 className="font-bold text-[28px] group-hover:text-primary-100 duration-200">秋季旅遊，豪華享受方案</h3>
              <p className="text-sm">秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。</p>
            </div>
          </a>
          <a href="#" className="block lg:flex items-center mb-10 group duration-200">
            <div className="lg:w-5/12 h-[294px] mb-6 lg:mb-0 lg:mr-6 shrink-0 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1445991842772-097fea258e7b')] bg-center bg-cover group-hover:scale-105 duration-200"></div>
            </div>
            <div>
              <h3 className="font-bold text-[28px] group-hover:text-primary-100 duration-200">輕鬆住房專案</h3>
              <p className="text-sm">我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。</p>
            </div>
          </a>
          <a href="#" className="block lg:flex items-center group duration-200">
            <div className="lg:w-5/12 h-[294px] mb-6 lg:mb-0 lg:mr-6 shrink-0 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1479740030693-66ad10f3a7b0')] bg-center bg-cover group-hover:scale-105 duration-200"></div>
            </div>
            <div>
              <h3 className="font-bold text-[28px] group-hover:text-primary-100 duration-200">耶誕快樂，住房送禮</h3>
              <p className="text-sm">聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！</p>
            </div>
          </a>
        </div>
      </div> 
    </section>
    {/* <!-- 關於我們 --> */}
  <section className="bg-neu-100 pt-20 lg:pt-30 pb-30 lg:pb-50">
    <div className="bg-[url('https://images.unsplash.com/photo-1582719508461-905c673771fd')] bg-cover bg-center pr-5 pl-10 lg:px-20">
      <div className="container flex flex-row-reverse">
        <div className="sm:basis-5/6 lg:basis-3/4 bg-about backdrop-blur translate-y-10 lg:translate-y-20 rounded-[40px] lg:rounded-[80px] rounded-br-none p-6 lg:p-20 text-white">
          <h2 className="mb-10 lg:mb-20 text-[32px] lg:text-[48px] leading-tight tracking-[2.4px] font-bold flex items-center">
            <span>關於<br />我們</span>
            <div className="grow sm:grow-0 shrink sm:w-[165px] h-0.5 bg-white ml-10"></div>
          </h2>
            
          <p className="mb-4 lg:mb-10 text-sm lg:text-base">享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。
            我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。</p>
          <p className="mb-4 lg:mb-10 text-sm lg:text-base">我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。
            我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。</p>
          <p className="mb-4 lg:mb-10 text-sm lg:text-base">在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。</p>
          <p>享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。</p>
        </div>
    </div>
    </div>
  </section>
  {/* <!-- 房間介紹 --> */}
  <section className="py-20 lg:py-30 px-5 lg:px-0 bg-neu-100 bg-[url('../images/desktop-deco-BG.png'),url('../images/desktop-deco-Line.png')] bg-[position:bottom,top_180px_right_0] bg-[size:contain,63%_auto] bg-no-repeat">
    <div className="lg:flex items-end">
      <div className="w-full lg:w-[900px] h-[900px] mb-6 lg:mb-0 bg-[url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b')] bg-center bg-cover"></div>
      <div className="text-white lg:px-20">
        <h3 className="mb-2 lg:mb-4 text-[28px] lg:text-[40px] font-bold">尊爵雙人房</h3>
        <p className="mb-6 lg:mb-10 text-sm lg:text-base font-normal">享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
        <h4 className="mb-6 lg:mb-10 font-bold text-2xl lg:text-[32px]">NT$ 10,000</h4>
        <button className="mb-6 lg:mb-10 w-full bg-white hover:bg-primary-100 text-black hover:text-white p-5 lg:text-2xl font-bold">查看更多</button>
        <div className="flex justify-end">
          <button className="p-4 text-primary-100 hover:text-primary-40"><span className="inline-block w-6 h-6">←</span></button>
          <button className="p-4 text-primary-100 hover:text-primary-40"><span className="inline-block w-6 h-6">→</span></button>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- 佳餚美饌 --> */}
  <section className="relative">
    <img src="./images/desktop-deco-Line-1.png" alt="" className="absolute  left-10 -bottom-20" />
    <img src="./images/desktop-deco-dot.png" alt="" className="absolute right-20 -top-10" />
    <div className="bg-light px-5 lg:px-20 py-20 lg:py-30  overflow-x-hidden">
      <div className="container">
        <div className="flex items-center mb-10 lg:mb-20">
          <h2 className="text-primary-100 text-[32px] lg:text-[48px] tracking-[2.4px] font-bold">佳餚<br />美饌</h2>
          <div className="w-40 lg:w-50 h-[2px] bg-gradient-primary ml-10"></div>
        </div>
  
        <div id="food_list_container" className="h-[480px] lg:h-[600px]  relative select-none">
          <div id="food_list" className="w-[400%] sm:w-[300%] md:w-[220%] lg:w-[calc(166.667%_+_16px)] h-full flex justify-between absolute left-0">
            <div className="h-full w-[calc(20%_-_12px)] lg:w-[20%] mr-6 rounded-lg bg-[url('https://images.unsplash.com/photo-1624938823487-d62ba4a5cf0f')] bg-center bg-cover text-white flex items-end">
              <div className="p-4 lg:p-6 backdrop-blur-lg">
                <div className="flex items-center mb-4 lg:mb-6">
                  <h3 className="mr-auto text-2xl font-bold">海霸</h3>
                  <p className="text-sm mr-2 lg:mr-4">SUN-MON</p>
                  <p className="text-sm">11:00 - 20:30</p>
                </div>
                <p className="font-this">
                  以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。
                </p>
              </div>
            </div>
            <div className="h-full w-[calc(20%_-_12px)] lg:w-[20%] mr-6 rounded-lg bg-[url('https://images.unsplash.com/photo-1628543108325-1c27cd7246b3')] bg-center bg-cover text-white flex items-end">
              <div className="p-4 lg:p-6 backdrop-blur-lg">
                <div className="flex items-center mb-4 lg:mb-6">
                  <h3 className="mr-auto text-2xl font-bold">日食</h3>
                  <p className="text-sm mr-2 lg:mr-4">SUN-MON</p>
                  <p className="text-sm">17:00 - 22:00</p>
                </div>
                <p className="font-this">
                  為您提供優質的牛排，每一塊肉都來自頂級的牛肉，經過專業廚師的巧手烹調，口感豐滿、風味絕佳。搭配我們的特製醬料，讓您的味蕾享受一場美味的盛宴。
                </p>
              </div>
            </div>
            <div className="h-full w-[calc(20%_-_12px)] lg:w-[20%] mr-6 rounded-lg bg-[url('https://images.unsplash.com/photo-1621916805571-2e804f82170c')] bg-center bg-cover text-white flex items-end">
              <div className="p-4 lg:p-6 backdrop-blur-lg">
                <div className="flex items-center mb-4 lg:mb-6">
                  <h3 className="mr-auto text-2xl font-bold">山臻</h3>
                  <p className="text-sm mr-2 lg:mr-4">SUN-MON</p>
                  <p className="text-sm">11:00 - 20:30</p>
                </div>
                <p className="font-this">
                  帶您進入一次辣味與鮮香兼具的川菜美食之旅。我們的廚師掌握正宗的川菜烹調技巧，從麻辣鍋到口水雞，每一道菜都有其獨特的風味，讓您回味無窮。
                </p>
              </div>
            </div>
            <div className="h-full w-[calc(20%_-_12px)] lg:w-[20%] mr-6 rounded-lg bg-[url('https://images.unsplash.com/photo-1467003909585-2f8a72700288')] bg-center bg-cover text-white flex items-end">
              <div className="p-4 lg:p-6 backdrop-blur-lg">
                <div className="flex items-center mb-4 lg:mb-6">
                  <h3 className="mr-auto text-2xl font-bold">月永</h3>
                  <p className="text-sm mr-2 lg:mr-4">SUN-MON</p>
                  <p className="text-sm">11:00 - 20:00</p>
                </div>
                <p className="font-this">
                  從鮮美的海鮮、經典的牛排，到各國的特色美食，我們都一應俱全。在這裡，您可以品嚐到世界各地的美食，每一道菜都由專業廚師用心製作，讓您在享受美食的同時，也能感受到我們的熱情與用心。
                </p>
              </div>
            </div>
            <div className="h-full w-[calc(20%_-_12px)] lg:w-[20%] rounded-lg bg-[url('https://images.unsplash.com/photo-1517084166762-9edca41416e6')] bg-center bg-cover text-white flex items-end">
              <div className="p-4 lg:p-6 backdrop-blur-lg">
                <div className="flex items-center mb-4 lg:mb-6">
                  <h3 className="mr-auto text-2xl font-bold">天潮</h3>
                  <p className="text-sm mr-2 lg:mr-4">SUN-MON</p>
                  <p className="text-sm">14:00 - 19:30</p>
                </div>
                <p className="font-this">
                  我們提供各種精緻甜點與糕點，無論您喜歡的是巧克力蛋糕、法式馬卡龍，還是台灣傳統的糕點，都能在這裡找到。讓我們的甜點帶您進入一場繽紛的甜蜜旅程。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- 交通方式 --> */}
<section className="bg-neu-100 py-20 lg:pt-30 px-5 lg:px-20">
  <div className="container">
    <div className="flex items-center mb-10 lg:mb-20">
      <h2 className="text-primary-100 text-[32px] lg:text-[48px] tracking-[2.4px] font-bold">交通<br />方式</h2>
      <div className="w-40 lg:w-50 h-[2px] bg-gradient-primary ml-10"></div>
    </div>
    <p className="mb-4 text-white">台灣高雄市新興區六角路123號</p>
     <div className="w-full h-[360px] bg-[url('https://s3-alpha-sig.figma.com/img/4dd7/3a80/9458afb0d3233560c66a7177e1d6ade3?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FpsFej~R-sQ0QKJvUqddH6CepLGuKe4BGr8-k6jLrreBdb08PclhdpcEi4Miz6s~xX6Y24xXBUo0Ue5Y7NO7hQwwwa13vsLryk-1ivJ9OYW~8nqSZ6pUmbW4669bW4zKOx3lVuIHwYHhAD0WN0j6HLKsK4HmIIBhqgvu58Bsp0KRuBi2DPGa-GNzghltDj9-FiSKOtqby83ZEmvmPrDaioXWVtfHvgAI48BsrFnadL7f9P416Vd1xcelNn5k5mIE1u2kx2Qdj422GqWDe4MDeeHY13ZyrAbAydsrXIFtbzlVT2Gv5Bp~j8p6Gt0oMstj-3uEx8y-A~7NddjBoYQlRA__')] bg-cover bg-center mb-10"></div>
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-white">
      <div className="">
        <img src="./images/traffic-car.png" alt="" className="w-12 h-12 lg:w-20 lg:h-20 mb-2 lg:mb-4" />
        <h3 className="lg:text-2xl mb-2">自行開車</h3>
        <p className="text-sm lg:text-normal font-normal">如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。</p>
      </div>
      <div>
        <img src="./images/traffic-train.png" alt="" className="w-12 h-12 lg:w-20 lg:h-20 mb-2 lg:mb-4" />
        <h3 className="lg:text-2xl mb-2">高鐵/火車</h3>
        <p className="text-sm lg:text-normal font-normal">如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。</p>
      </div>
      <div>
        <img src="./images/traffic-luxurycar.png" alt="" className="w-12 h-12 lg:w-20 lg:h-20 mb-2 lg:mb-4" />
        <h3 className="lg:text-2xl mb-2">禮賓車服務</h3>
        <p className="text-sm lg:text-normal font-normal">承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567</p>
      </div>
     </div>
  </div>
</section>
<img src="./images/mobile-deco-Line.png" alt="" className="lg:hidden bg-neu-100" />
<img src="./images/desktop-deco-Line-2.png" alt="" className="hidden lg:block bg-neu-100" />
{/* <!-- Footer --> */}
<footer className="bg-neu-100  text-white px-5 lg:px-20">
  <div className="container py-20 lg:pb-30">
    <div className="lg:flex justify-between">
      <div className="mb-10 lg:mb-0">
        <a href="#" className="block w-[196px] h-[72px] mb-10">
          享樂酒店
        </a>
        <div className="flex gap-4">
          <a href="#" className="block w-10 h-10 border border-white rounded-full">line</a>
          <a href="#" className="block w-10 h-10 border border-white rounded-full">ig</a>
        </div>
      </div>
      <div className="lg:flex gap-20">
        <div>
          <div className="mb-2">TEL</div>
          <div className="mb-4 lg:mb-10">+886-7-1234567</div>
          <div className="mb-2">FAX</div>
          <div className="mb-4">+886-7-1234567</div>
        </div>
        <div>
          <div className="mb-2">MAIL</div>
          <div className="mb-4 lg:mb-10">elh@hexschool.com</div>
          <div className="mb-2">WEB</div>
          <div className="mb-4">www.elhhexschool.com.tw</div>
        </div>
      </div>
    </div>
    <div className="lg:flex justify-between mt-20 ">
      <div className="mb-4 lg:mb-0">806023 台灣高雄市新興區六角路123號</div>
      <div>© 享樂酒店 2023 All Rights Reserved.</div>
    </div>
  </div>
</footer>

    </>
  )
}

export default App
