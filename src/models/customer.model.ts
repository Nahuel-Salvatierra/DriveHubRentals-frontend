export enum DocumentTypeEnum {
	dni = "dni",
	passport = "passport",
}

export interface Customer {
	id?: number
	name: string;
	lastName: string;
	documentType: DocumentTypeEnum;
	documentNumber: number;
	birthDate: string;
	address: string;
	phone: number;
	email: string;
	createdAt?: string;
	updatedAt?: string;
}
