import Button from "../Button";
import Input from "../Input";

export default function RentForm(){
  return (
		<div className="flex-auto px-20 pt-10 justify-center">
			<form onSubmit={()=>{}}>
        <Input name="carId" placeholder="Car Id" required={true} type="text"/>
        <Input name="customerId" placeholder="Customer Id" required={true} type="text"/>
        <Input name="price" placeholder="Price" required={true} type="number"/>
        <Input name="totalPrice" placeholder="Price" required={true} type="number"/>
        <Input name="paymentMethod" placeholder="Payment Method" required={true} type="text"/>
        <Input name="isPaid" placeholder="Is Paid" required={true} type="checkbox"/>
        <Input name="startDate" placeholder="Start Date" required={true} type="date"/>
        <Input name="endDate" placeholder="End Date" required={true} type="date"/>
        <Input name="createdAt" placeholder="Created At" required={true} type="date"/>
        <Input name="updatedAt" placeholder="Updated At" required={true} type="date"/>
				<Button type="submit" name="Save" onClick={() => {}}></Button>
			</form>
		</div>
  )
}