export enum StatusEnum {
	finished = "finished",
	pending = "pending",
	canceled = "canceled",
}

export interface Rent {
	id?: number;
	carId: number;
	customerId: number;
	unitPrice: number;
	totalPrice: number;
	paymentMethod: string;
	isPaid: boolean;
	startDate: Date;
	endDate: Date;
	createdAt?: Date;
	updatedAt?: Date;
	status?: StatusEnum;
}
