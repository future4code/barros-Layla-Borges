
import { User } from "../src/models/interfaceUser"
import { performPurchase } from "../src/funcs/performPurchase"


test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 100
	}

	const result = performPurchase(user, 40)
	
	expect(result).toEqual({
		name: "Astrodev",
		balance: 60
	})
})