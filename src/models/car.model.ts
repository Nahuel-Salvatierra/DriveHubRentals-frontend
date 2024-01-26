enum TransmissionEnum {
  MANUAL = "manual",
  AUTOMATIC = "automatic",
}

export interface Car {
  id?:number;
  brand:string
  model:string
  year:number
  kms:number
  color:string
  AC:boolean
  passengers:number
  transmission:TransmissionEnum
  createdAt?: Date;
	updatedAt?: Date;
}