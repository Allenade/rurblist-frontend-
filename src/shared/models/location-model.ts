export interface LocationModel {
  address: string
  city: string
  state: string
  country: string
  coordinates: Coordinates
}

export interface Coordinates {
  type: string
  coordinates: number[]
}