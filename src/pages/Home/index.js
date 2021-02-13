import React, { useEffect, useState } from 'react';
import Navbar from '../components-global/Navbar'
import CatItem from '../components-global/CatItem'
import { Cats } from './styles';
import axios from 'axios'

function Home() {
  const [cat, setCat] = useState([])

  useEffect(() => {
    fetchDataCats()
  }, [])

  const fetchDataCats = async () => {
    const url = "https://api.thecatapi.com/v1/breeds"

    try {
      const response = await axios.get(url)
      const data = await response.data
      setCat(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Navbar/>
      <Cats>
        {
          cat.map(Items => {
            return (
              <CatItem key={Items.id} name={Items.name} description={Items.description} origin={Items.origin} image={Items.image ? Items.image.url : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.thestahlman.com%2FCommon%2Fimages%2Fjquery%2Fgalleria%2Fimage-not-found.png&f=1&nofb=1"} life={Items.life_span} weight={Items.weight.metric} wiki={Items.wikipedia_url} temperament={Items.temperament} />
            )
          })
        }
      </Cats>
    </>
  );
}

export default Home