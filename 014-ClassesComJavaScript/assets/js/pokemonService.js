class PokemonService {
  constructor() {
    this.baseUrl = 'https://pokeapi.co/api/v2'
  }

  getItem(name) {
    return fetch(`${this.baseUrl}/pokemon/${name}`)
      .then(response => response.json())
      .then(data => data);
  }

  getList() {
    return fetch(`${this.baseUrl}/pokemon?limit=151`)
      .then(response => response.json())
      .then(data => data);
  }
}