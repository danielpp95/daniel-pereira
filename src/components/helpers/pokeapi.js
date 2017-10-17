import trae from 'trae'

const url = `https://pokeapi.co/api/v2/pokemon/`

const poke = (id) => {
  const api = `${url}${id}/`
  trae.get(api, { bodyType: 'json' }).then((response) => {
    console.log(response)
    return response.data
  })
}

export default poke
