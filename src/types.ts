interface DocumentType {
  id: number,
  title: string,
  slug: string,
}
interface Position {
  id: number,
  name: string,
}
interface StuffTag {
  id: number,
  title: string,
  slug: string,
  color: string,
}
interface Country {
  id: number,
  icon: string,
  title: string,
  slug: string,
}
export interface Tag {
  id: number,
  color: string,
  name: string,
}
interface Gender {
  id: number,
  title: string,
  slug: string,
}
export interface Worker {
  full_name: string,
  inn: string,
  address: string,
  stuff_tag: StuffTag,
  date_birth: string,
  age: number,
  type_contract: DocumentType,
  type_contract_id: number,
  position: Position,
  position_id: number,
  country: Country,
  country_id: number,
  gender: Gender,
  gender_id: number,
}
