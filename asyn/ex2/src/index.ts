import axios from 'axios';

const getData = async () => {
  try {

    const dataDetail = await axios.get('https://pokeapi.co/');
    console.log(dataDetail.data);
  } catch (err) {
    console.log(err);
  }
}

getData();