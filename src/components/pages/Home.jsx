import React from 'react'
import Main from '../Main'
import Row from '../Row'
import requests from '../../Request'

const Home = () => {
  return (
    <div>
        <Main />
        <Row title='UpComing' fetchUrl={requests.requestUpcoming} />
        <Row title='Popular' fetchUrl={requests.requestPopular} />
        <Row title='Trending' fetchUrl={requests.requestTrending} />
        <Row title='Top Rated' fetchUrl={requests.requestTopRated} />
        <Row title='Horror' fetchUrl={requests.requestHorror} />

    </div>
  )
}

export default Home