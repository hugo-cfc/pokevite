export interface Pokemon {
  name: string;
  url: string;
  base_experience: number;
  height: number;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      }
    }
  }
}
