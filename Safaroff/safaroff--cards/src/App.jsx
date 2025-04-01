import './App.css'
import Card from './Components/card/card'
import Nav from './Components/navigation/nav'
import Advantage from './Components/advantage/advantage'
import WhatWeDo from './Components/whatwedo/whatwedo'



function App() {


  const cardsData=[
    { img:"https://crescentmall.az/resized/fit1664x793/center/pages/157/1440x934-1.png",
      heading:"Crescent",
      text:"100 -dən çox dünya markalari, ailəvi əyləncədən tutmuş yeni konseptli restoranlar, oyuncaq və uşaq mağazalarindan ev aliş-verişinə və sağlamliq mərkəzi ilə şəhər həyatinin nəbzi burada döyünəcək. Crescent Mall-da yaşayacağniz yeni təcrübələr ilə aliş-veriş və əyləncə mərkəzinin bir hissəsi olun!",
      color:"blue"},
    { img:"https://fryday.az/image/catalog/filials/BUZOVNA/1/0U8A0888.jpg",
      heading: "Fryday",
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptate voluptas impedit!',
      color: "red"
    },
    {
      img:"https://static01.nyt.com/images/2025/01/14/multimedia/14xp-starbucks-cgbh/14xp-starbucks-cgbh-videoSixteenByNine3000.jpg",
      heading: "Starbucks",
      text: "Coffees very good , Latte, Frappucino, Kapucino, Mashallah, Inshallah, kruasannarda dadlidi",
      color: "green"
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfgREo-m2yLyWFjsK1PuOpbhSUPUqg3CMQLg&s",
      heading: "McDonald's",
      text: "Very bad burgers very high prices i extremely do not recommend, onnansa iki dene duzemelli doner xoroso",
      color: "yellow"
    }
  ]

  
  return (
    <>
      
      <Nav/>
      
      <section id='bizKimik'>
      <div className='cards'>
      {
        cardsData.map(data => (
          <Card {...data}/>
        ))
      }
      </div>
      </section>
      <div id="advantageSection">
        <Advantage/>
      </div>

      <div id="whatwedoSection">
        <WhatWeDo/>
      </div>
        
      
    </>
  )
}

export default App
