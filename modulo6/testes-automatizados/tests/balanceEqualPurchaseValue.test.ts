
import { User } from "../src/models/interfaceUser"
import { performPurchase } from "../src/funcs/performPurchase"

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 50
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 0
	})
})
