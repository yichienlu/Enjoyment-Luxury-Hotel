import { useState, useRef } from 'react'

function FoodList(){
  const food_list_container = useRef<HTMLDivElement>(null);
  const food_list = useRef<HTMLDivElement>(null);
  const [movable, setMovable] = useState('false'); // 不知道為什麼用boolean不行

  const changeMovable = (condition:string) => {
    if(food_list.current){
      setMovable(condition)
      food_list.current.style.cursor = condition=='true' ? 'grabbing' : 'grab'
    }
  };
  const moveFoodList = (event: React.PointerEvent<HTMLDivElement>) => {
    if(movable=='true' &&food_list.current && food_list_container.current){
      let offset_right = food_list.current.offsetLeft + food_list.current.offsetWidth - food_list_container.current.offsetWidth
      let movement = Number(food_list.current.style.left.split('px')[0])
      if(movement+event.movementX<=0 && offset_right+event.movementX > 0){
        movement += event.movementX
        food_list.current.style.left = `${movement}px`
      } 
      else if (movement==0 && event.movementX< 0) {
        movement = 0
        food_list.current.style.left = `${movement}px`
      } 
    }
  }
  
  return (
    <>
      <div id="food_list_container" ref={food_list_container} className="h-[480px] lg:h-[600px]  relative select-none">
        <div id="food_list" ref={food_list} className="w-[400%] sm:w-[300%] md:w-[220%] lg:w-[calc(166.667%_+_16px)] h-full flex justify-between absolute left-0" 
          onPointerDown={()=>changeMovable('true')}
          onPointerUp={()=>changeMovable('false')}
          onPointerLeave={()=>changeMovable('false')}
          onPointerMove={moveFoodList}
        >
          <div className="h-full w-[calc(20%_-_12px)] lg:w-[20%] mr-6 rounded-lg bg-[url('https://images.unsplash.com/photo-1624938823487-d62ba4a5cf0f')] bg-center bg-cover text-white flex items-end"
          >
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
    </>
  )
}
export default FoodList
