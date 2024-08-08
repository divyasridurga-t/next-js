'use client';
import { useEffect, useState } from "react";
import './sample.css';
import SmallList from '../../components/smallList';

export default async function Home() {
    let [tab, setTab] = useState("latest");
    let [data, setData] = useState({})
    useEffect(() => {
        async function FetchData() {
            let res = await fetch('https://www.dnaindia.com/pwaapi/sidebar');
            let data = await res.json(); // Await the JSON parsing
            console.log(data, '##########');
            setData(data);
        }
        FetchData();
    }, []);

    

    let { breaking_news = [], trending_news = [], verified_news = [] }: any = data;
    let finalData = tab == 'latest' ? breaking_news : tab == 'webstory' ? verified_news : trending_news;

    const handleClick=(tabName)=>{
        setTab(tabName)
    }

    return (
        <>

            <div className="tab_content">
                <button className={`${tab == 'latest' ? 'active' : ''}`} onClick={() => { handleClick("latest") }}>latest</button>
                <button className={`${tab == 'webstory' ? 'active' : ''}`} onClick={() => { handleClick("webstory") }}>webstory</button>
                <button className={`${tab == 'trending' ? 'active' : ''}`} onClick={() => { handleClick("trending") }}>trending</button>
            </div>
            <div>
                <SmallList data={finalData} />
            </div>
        </>
    )
}