import React, {useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTab from '../../../components/switchTab/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';


const Trending = () => {

    const [endpoint, setEndpoint] = useState("day")
    const {data, loading } = useFetch(`/trending/all/${endpoint}`);

    const onTabChaange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week")

    }
  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className='carouselTitle'>Trending</span>
            <SwitchTab data={["Day", "Week"]} onTabChaange={onTabChaange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Trending;