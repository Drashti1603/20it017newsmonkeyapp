import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "news24",
                "name": "News24"
            },
            "author": "Khanyiso Tshwaku",
            "title": "Stubbs' fearless approach 'the brand of cricket' Boucher wants SA to play - selection chief",
            "description": "Tristan Stubbs has announced himself to world cricket in no uncertain teams and it's the fearlessness that he brings that excites Proteas convenor of selectors Victor Mpitsang.",
            "url": "https://www.news24.com/sport/Cricket/Proteas/stubbs-fearless-approach-the-brand-of-cricket-boucher-wants-sa-to-play-selection-chief-20220907",
            "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/3793/31890e44b4ef4c158dda035aec6506a7.jpg",
            "publishedAt": "2022-09-07T07:01:19+00:00",
            "content": "<ul><li>Proteas convenor of selectors Victor Mpitsang is excited by the prospect of Tristan Stubbs for the T20 World Cup.</li><li>Stubbs has come off for his franchise and the national team with his … [+1955 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    constructor() {
        super();
        console.log("Hello I am constructor from news component");
        this.state = {
            articles : this.articles,
            loading : false
        }
    }
async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=cac12b9f3ca1448fa078ac07887eb244";
    let data= await fetch(url);
    let parcedData = await data.json()
    console.log(parcedData);
    this.setState({articles: parcedData.articles})
}
  render() {
    
    
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
       
        <div className='row'>
        {this.state.articles.map((element)=>{
            return <div className='col-md-4'key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0, 40):""} discription={element.description?element.description.slice(0, 80):""} imgurl={element.urlToImage} newsUrl={element.url}></NewsItem>
            </div>
  })}
            
        
        </div>
        

      </div>
    )
  }
}

export default News
