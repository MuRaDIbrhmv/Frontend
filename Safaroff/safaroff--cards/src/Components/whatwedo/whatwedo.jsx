import './whatwedo.css'
import WWDcard from '../whatwedo/wwdcard/wwdcard'

function WhatWeDo(){

    const whatWeDoData = [
        {  
            field: "IT məhsullarının hazırlanması",
            info: "Yaratdığımız tam funksional İT həllərin köməyi ilə müştərilərimiz böyük həcmli informasiya ilə rahat işləyir, mürəkkəb prosesləri effektiv idarə edirlər."
        },
        {
            field:"UX/UI dizayn",
            info:"İstifadə zamanı maksimal rahat və aydın, vizual olaraq mükəmməl interfeyslər yaradırıq."
        },
        {
            field:"Mobil tətbiqlərin və saytların yaradılması",
            info:"Onlarla böyük funksionallı sayt və platformaları hazırlamış heyətimiz bu sahədə ölkədə qabaqcıl təcrübəyə malikdir."
        },
        {
            field:"Media",
            info:"Məhsul haqqında aydın və müfəssəl fikir yaradacaq video və audio məzmunlar hazırlayır və media kanallarında effektiv yerləşdirilməsini təmin edirik."
        },
        {
            field:"Rəqəmsal marketinq",
            info:"Rəqəmsal mühit üçün sadəcə məzmun yox, sizi hədəflərinizə doğru aparacaq kompleks marketinq strategiyası hazırlayırıq."
        },
        {
            field:"Brendinq",
            info:"Brend üçün aydın və müfəssəl imic, işlək kommunikasiya istiqaməti yaradırıq."
        },
        {
            field:"Reputasiyanın idarə olunması",
            info:"Heyətimiz rəqəmsal mühitdə müştərilərin şirkətiniz haqqında fikirlərini öyrənir, bunun əsasında reputasiyanızın korreksiyası üçün kompleks addımlar təklif edirik."
        },
        {
            field:"Şəhər mühitinin dizaynı",
            info:"Məkanın üslubunu və məqsədini vurğulayaraq ictimai və yaşayış interyerlərini dizayn edirik."
        },
    ]




    return <>
    <div className="whatwedo">
        <section>
        <h3>Biz nələr edirik?</h3>
        <div className="interface">
            {
                whatWeDoData.map(data => (<WWDcard {...data} />))
            }
        </div>
        </section>
    </div>

</>
}


export default WhatWeDo