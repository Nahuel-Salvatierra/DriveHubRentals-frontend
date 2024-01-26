import toast from "react-hot-toast";
import useCustomer from "../../hooks/useCustomer";
import { INPUTS_CUSTOMER } from "../../utils/inputs.customer";
import Button from "../Button";
import Input from "../Input";

export default function CustomerForm() {
  
  const { createCustomer } = useCustomer();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
          await createCustomer(form);
          toast.success("Customer created");
        } catch (error) {
      toast.error(`${error}`);
    }
  }
  return (
    <div className="flex-auto px-20 pt-10 justify-center">
      <form onSubmit={handleSubmit}>
        {INPUTS_CUSTOMER.map((input) => (
          <Input
            key={input.name}
            type={input.type}
            name={input.name}
            required={input.required}
            placeholder={input.placeholder}
          />
        ))}
      <Button type="submit" name="Save" onClick={() => {}}></Button>
      </form>
    </div>
  );
}